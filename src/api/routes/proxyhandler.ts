import { Router, Request, Response } from "express";
import middlewares from "../middlewares";
const route = Router();
export default (app: Router) => {
  app.use("/pokkarproxy*", middlewares.middlewareProxy, (req: Request, res: Response) => {
    return res.json(req.mwResponse).status(200);
  });
  // app.use("/pokkarproxy*", route);
  // route.get("", middlewares.middlewareProxy, (req: Request, res: Response) => {
  //   return res.json(req.mwResponse).status(200);
  // });
};
