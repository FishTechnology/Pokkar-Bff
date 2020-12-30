import { Router } from "express";
import pokkarproxyhandler from "./routes/proxyhandler";
// guaranteed to get dependencies
export default () => {
  const app = Router();
  pokkarproxyhandler(app);
  return app;
};
