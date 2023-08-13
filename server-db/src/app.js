import express from "express";
import cors from "cors";

import galaxiesRouter from "./routes/galaxies.js";
import planetsRouter from "./routes/planets.js";

export const app = express();

// middlewares
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json()); // membaca body

// membuat route (langsung)
app.get("/hello", (_req, res) => {
  res.send("Hello Node.js!");
});

// membuat route (dengan objek Router)
const router = express.Router();

router.use("/galaxies", galaxiesRouter);
router.use("/planets", planetsRouter);

app.use("/api", router);

app.listen(3000, () => console.log("Server berhasil dijalankan di port 3000."));
