module.exports = {
  default: {
    require: ["./features/step_definitions/*.js"],
    publishQuiet: true,
    format: ["progress", "html:reports/report.html"],
    paths: ["./features/*.feature"],
    timeout: 60000
  }
};
