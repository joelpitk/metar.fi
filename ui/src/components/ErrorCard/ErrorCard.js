import React, { Component } from "react";
import { Card, CardActions, CardHeader } from "material-ui/Card";
import RetryIcon from "material-ui/svg-icons/action/autorenew";
import ErrorIcon from "material-ui/svg-icons/alert/error";
import FlatButton from "material-ui/FlatButton";
import { red500 } from "material-ui/styles/colors";

class ErrorCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      retryAfterSeconds: this.props.retryAfterSeconds || 10
    };
  }

  decreaseRetryTimer = () => {
    if (this.state.retryAfterSeconds === 0) {
      this.props.onRetry();
      return;
    }
    this.setState(previousState => ({
      retryAfterSeconds: previousState.retryAfterSeconds - 1
    }));

    setTimeout(this.decreaseRetryTimer, 1000);
  };

  componentDidMount() {
    this.decreaseRetryTimer();
  }

  render() {
    return (
      <Card>
        <CardHeader
          title={this.props.message}
          subtitle={`Retrying automatically in ${this.state.retryAfterSeconds} seconds...`}
          avatar={<ErrorIcon style={{ height: "36px" }} color={red500} />}
        />
        <CardActions>
          <FlatButton icon={<RetryIcon />} label="Retry" onClick={this.props.onRetry} />
        </CardActions>
      </Card>
    );
  }
}

export { ErrorCard };
