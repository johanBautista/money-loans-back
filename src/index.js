import "dotenv/config";
import "./database/connectdb.js";
import offertRouter from "./routes/offert.router.js";
import express from "express";
import cors from "cors";

const app = express();

//cors
const whitelist = [process.env.ORIGIN1, process.env.ORIGIN2];
app.use(
  cors({
    origin: (origin, callback) => {
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        return callback(null, true);
      }
      return callback(`🆘 Error de Cors ${origin}, no autorizado`);
    },
  })
);

//
app.use(express.json());
//
app.use("/api/v1/offerts", offertRouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log("listening on", PORT));
