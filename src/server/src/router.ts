import { Router, Application, Request, Response } from "express";
import fetchComments from "./utils/fetchComments";

const router = (app: Application) => {
  const apiRouter: Router = Router();

  app.get("/api/process", (req: Request, res: Response) => {
    const fetched = fetchComments(req.query.replayID);
    res.status(200).json({ message: "FEZZZZZ" });
  });

  app.use("/api/v1", apiRouter);
};

export default router;
