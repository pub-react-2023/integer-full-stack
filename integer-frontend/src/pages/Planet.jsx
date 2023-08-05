import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

export default function Planet() {
  const [planet, setPlanet] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:3000/api/planets/${id}`)
      .then((response) => response.json())
      .then((planet) => setPlanet(planet));
  }, [id]);

  return (
    <main>
      {planet ? (
        <>
          <h1>{planet.name}</h1>
          <p>Diameter: {planet.diameter}</p>
          <p>{planet.description}</p>
        </>
      ) : (
        "Loading..."
      )}
    </main>
  );
}
