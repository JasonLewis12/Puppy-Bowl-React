import React from "react";
import { useEffect } from "react";
import { GetOnePuppy } from "../API";
import { useParams } from "react-router-dom";

export default function SinglePuppy({ singlePup, SetSinglePup }) {
  const { id } = useParams();

  useEffect(() => {
    async function fetSinglePup(id) {
      const singlePupy = await GetOnePuppy(id);
      SetSinglePup(singlePupy);
    }
    console.log(singlePup);
    fetSinglePup(id);
  }, [id]);
  if (!singlePup) {
    return <h1>Loading...</h1>;
  }
  return (
    <div className="puppy-Card">
      <div className="puppy">
        <h1>{singlePup.name}</h1>
        <img src={singlePup.imageUrl} alt={singlePup.name} />
        <p>Status:{singlePup.status}</p>
        <p>Breed:{singlePup.breed}</p>
        <p>team ID:{singlePup.teamId}</p>
      </div>
    </div>
  );
}
