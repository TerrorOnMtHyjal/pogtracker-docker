import express from "express";
import compression from "compression";
import router from "./router";

const app: express.Application = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
process.on("SIGINT", () => {
  process.exit(0);
});

app.use(express.json());
app.use(compression());

router(app);

const PORT: any =
  process.env.NODE_ENV === "test"
    ? process.env.TEST_PORT
    : process.env.DEV_PORT;

app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

export default app;
