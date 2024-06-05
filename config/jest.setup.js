const ENABLED = false;
if (ENABLED) {
  beforeAll(() => {
    console.log("Redirection console output to void");
    jest.spyOn(global.console, "log").mockImplementation(() => {});
    jest.spyOn(global.console, "warn").mockImplementation(() => {});
    jest.spyOn(global.console, "error").mockImplementation(() => {});
    jest.spyOn(global.console, "info").mockImplementation(() => {});
    jest.spyOn(global.console, "debug").mockImplementation(() => {});
  });

  afterAll(() => {
    jest.restoreAllMocks();
    console.log("Restore console output");
  });
}
