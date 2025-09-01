import { config } from "dotenv";
import semanticRelease from "semantic-release";

config({ path: "./environments/.env.secrets" });
(async () => {
  await semanticRelease();
})();
