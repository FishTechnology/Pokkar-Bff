import { Router, Request, Response } from "express";
import middlewares from "../middlewares";
const route = Router();
export default (app: Router) => {
  app.use("/proxy", route);
  route.get("", (req: Request, res: Response) => {
    return res.json({ user: "welcome 2" }).status(200);
  });
};
