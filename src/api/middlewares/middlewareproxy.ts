import { Container } from "typedi";
import { Logger } from "winston";

const middlewareProxy = async (req, res, next) => {
  const Logger: Logger = Container.get("logger");
  try {
  } catch (e) {
    Logger.error("🔥 Error attaching user to req: %o", e);
    return next(e);
  }
};

export default middlewareProxy;
