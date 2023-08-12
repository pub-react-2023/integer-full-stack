import express from "express";

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

let id = planets.length;

const router = express.Router();

// tampilkan semua
router.get("/", (_req, res) => {
  res.json(
    planets.map((planet) => {
      return { id: planet.id, name: planet.name, diameter: planet.diameter };
    })
  );
});

// tampilkan satu berdasarkan ID
router.get("/:id", (req, res) => {
  const planet = planets.find((p) => p.id == req.params.id);
  if (planet) {
    res.json(planet);
  } else {
    res.status(404);
    res.send("Planet tidak ditemukan.");
  }
});

// buat
router.post("/", (req, res) => {
  try {
    planets.push({ id: ++id, ...req.body });
    res.send("Planet berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// edit
router.put("/:id", (req, res) => {
  try {
    planets.forEach((planet) => {
      if (planet.id == req.params.id) {
        for (const property in req.body) {
          planet[property] = req.body[property];
        }
      }
    });
    res.send("Planet berhasil disimpan.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus berdasarkan ID
router.delete("/:id", (req, res) => {
  try {
    const index = planets.findIndex((p) => p.id == req.params.id);
    planets.splice(index, 1);
    res.send("Planet berhasil dihapus.");
  } catch (error) {
    res.status(500);
    res.send(error);
  }
});

// hapus semua

export default router;
