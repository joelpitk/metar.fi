import { Selector } from "testcafe";

class MetarCard {
  constructor(airportCode) {
    this.container = Selector(".metar-card")
      .find("span")
      .withText(airportCode.toUpperCase())
      .parent(".metar-card");

    this.removeButton = this.container.find(".remove-button");
    this.refreshButton = this.container.find(".refresh-button");
    this.metarText = this.container.find(".raw-metar");
  }
}

class MetarList {
  constructor() {
    this.list = Selector(".metar-list-container > div");
  }

  airportCardByCode = airportCode => {
    return new MetarCard(airportCode);
  };

  count = () => {
    this.list.childElementCount;
  };
}

export class MetarPage {
  constructor() {
    this.airportInput = Selector("input");
    this.metarList = new MetarList();
  }
}
