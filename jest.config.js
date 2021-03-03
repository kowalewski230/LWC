const { jestConfig } = require("@salesforce/sfdx-lwc-jest/config");
const setupFilesAfterEnv = jestConfig.setupFilesAfterEnv || [];
setupFilesAfterEnv.push("<rootDir>/jest-sa11y-setup.js");
module.exports = {
  ...jestConfig,
  setupFilesAfterEnv,
  moduleNameMapper: {
    "^lightning/button$":
      "<rootDir>/force-app/test/jest-mocks/lightning/button",
    "^thunder/hammerButton$":
      "<rootDir>/force-app/test/jest-mocks/thunder/hammerButton",
    "^c/displayPanel$": "<rootDir>/force-app/test/jest-mocks/c/displayPanel"
  }
  // add any custom configurations here
};
