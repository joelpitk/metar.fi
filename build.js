const execSync = require("child_process").execSync;
const fs = require("fs-extra");

const clean = () => 
  fs.removeSync("dist");

const buildUi = () => {
  console.log("Building UI...");
  execSync("npm run build", { cwd: "ui" });
};

const makeDistDirectory = () => {
  fs.mkdirsSync("dist/public");
};

const copyUiToDist = () => {
  console.log("Copying UI to dist...");
  fs.copySync("ui/build", "dist/public");
};

const copyApiToDist = () => {
  console.log("Copying API to dist...");
  fs.copySync("api/package.json", "dist/package.json");
  fs.copySync("api/package-lock.json", "dist/package-lock.json");
  fs.copySync("api/src", "dist");
};

clean();
buildUi();
makeDistDirectory();
copyUiToDist();
copyApiToDist();