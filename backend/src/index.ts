import app from "./application";
import { createServer } from "http";
import { sequelize } from "./sequelize";
import logger from "./internal/logger";

const port = process.env.PORT || 8000;

void (async () => {
  await sequelize.authenticate({
    logging: () => {
      logger.info("Database Authenticated");
    },
  });
  createServer(app).listen(port, () =>
    logger.info(`Server running on port ${port}`)
  );
})();
