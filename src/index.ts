import { LOGGER } from "./context";
import { run as runGithubProvider } from "./providers/github.provider";

console.log("Starting =>", __dirname);
LOGGER.info("start");

runGithubProvider();

LOGGER.info("end");
