module.exports = {
  testTimeout: 30000,
  reporters: [
    "default",
    [
      "jest-html-reporters",
      {
        publicPath: "./reports",
        filename: "report.html",
        expand: true,
      },
    ],
  ],
};
