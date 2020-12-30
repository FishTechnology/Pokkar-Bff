import { Container } from "typedi";
import { Logger } from "winston";

const middlewareProxy = async (req, res, next) => {
  //const Logger: Logger = Container.get("logger");
  const axios = require("axios");
  try {
    let requestUrl = req.originalUrl;
    let pokkarIndex = requestUrl.indexOf("api/pokkarproxy");
    if (pokkarIndex < 0) {
      return next();
    }
    let pokkarUrl = requestUrl.substr(pokkarIndex + 16);
    let games = await axios({
      method: req.method,
      url: process.env.POKKAR_API + pokkarUrl,
      data: req.body,
    });
    req.mwResponse = games.data;
    return next();
  } catch (e) {
    return next();
  }
};

export default middlewareProxy;
