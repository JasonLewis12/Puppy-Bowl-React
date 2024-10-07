import React from "react";
import { useNavigate } from "react-router-dom";

export default function puppyCard({ puppy }) {
  return (
    <div className="puppy-Card">
      <div className="puppy">
        <h1>{puppy.name}</h1>
        <img src={puppy.imageUrl} alt={puppy.name} />
        <p>Status:{puppy.status}</p>
        <p>Breed:{puppy.breed}</p>
        <p>team ID:{puppy.teamId}</p>
      </div>
    </div>
  );
}
