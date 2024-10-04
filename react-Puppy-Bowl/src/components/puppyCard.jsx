import React from "react";

export default function puppyCard({ puppy, setPuppy }) {
  return (
    <div>
      <h1>{puppy.name}</h1>
      <img src={puppy.imageUrl} alt={puppy.name} />
      <p>{puppy.status}</p>
      <p>{puppy.breed}</p>
      <p>{puppy.teamId}</p>
    </div>
  );
}
