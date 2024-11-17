import React from "react";
import { useParams } from "react-router-dom";
import { cakes } from "../data";

function CakeDetails() {
  const { id } = useParams();
  const cake = cakes.find((cake) => cake.id === parseInt(id));

  if (!cake) return <h1>Cake not found!</h1>;

  return (
    <div className="cake-details">
      <img src={cake.image} alt={cake.name} />
      <h1>{cake.name}</h1>
      <p>{cake.description}</p>
      <p>Price: ${cake.price}</p>
      
    </div>
  );
}

export default CakeDetails;
