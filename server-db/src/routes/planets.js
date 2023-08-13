import express from "express";
import conn from "../db.js";

const planets = [
  {
    id: 1,
    name: "Mercury",
    diameter: 4879,
    description: "Mercury is the 1st planet in our Solar System.",
  },
  {
    id: 2,
    name: "Venus",
    diameter: 12104,
    description: "Venus is the 2nd planet in our Solar System.",
  },
  {
    id: 3,
    name: "Earth",
    diameter: 12756,
    description: "Earth is the 3rd planet in our Solar System.",
  },
  {
    id: 4,
    name: "Mars",
    diameter: 6792,
    description: "Mars is the 4th planet in our Solar System.",
  },
  {
    id: 5,
    name: "Jupiter",
    diameter: 142984,
    description: "Jupiter is the 5th planet in our Solar System.",
  },
  {
    id: 6,
    name: "Saturn",
    diameter: 120536,
    description: "Saturn is the 6th planet in our Solar System.",
  },
  {
    id: 7,
    name: "Uranus",
    diameter: 51118,
    description: "Uranus is the 7th planet in our Solar System.",
  },
  {
    id: 8,
    name: "Neptune",
    diameter: 49528,
    description: "Neptune is the 8th planet in our Solar System.",
  },
  {
    id: 9,
    name: "Pluto",
    diameter: 2370,
    description: "Pluto is the 9th planet in our Solar System.",
  },
];

const router = express.Router();

// simpan semua
router.post("/all", async (_req, res) => {
  for await (const planet of planets) {
    const prepare = await conn.prepare(
      "INSERT INTO planets (name, diameter, description) VALUES (?, ?, ?)"
    );
    await prepare.execute([planet.name, planet.diameter, planet.description]);
  }
  res.send("Semua planet berhasil disimpan.");
});

// tampilkan semua
router.get("/", async (_req, res) => {
  const planets = await conn.query("SELECT * FROM planets");
  res.json(planets);
});

// tampilkan satu berdasarkan ID
router.get("/:id", async (req, res) => {
  const prepare = await conn.prepare("SELECT * FROM planets WHERE id = ?");
  const planet = (await prepare.execute([req.params.id]))[0];
  res.json(planet);
});

// buat
router.post("/", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "INSERT INTO planets (name, diameter, description) VALUES (?, ?, ?)"
    );
    await prepare.execute([
      req.body.name,
      req.body.diameter,
      req.body.description,
    ]);
    res.send("Planet berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// edit
router.put("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare(
      "UPDATE planets SET name = ?, diameter = ?, description = ? WHERE id = ?"
    );
    await prepare.execute([
      req.body.name,
      req.body.diameter,
      req.body.description,
      req.params.id,
    ]);
    res.send("Planet berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus berdasarkan ID
router.delete("/:id", async (req, res) => {
  try {
    const prepare = await conn.prepare("DELETE FROM planets WHERE id = ?");
    await prepare.execute([req.params.id]);
    res.send("Planet berhasil dihapus.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus semua

export default router;
