import React from "react";
import { getAllPuppys } from "../API";
import PuppyCard from "./puppyCard";
import { useEffect } from "react";

export default async function PuppyList({ setPuppy, puppy }) {
  useEffect(() => {
    const fetchAllPuppys = async () => {
      const puppys = await getAllPuppys();
      setPuppy(puppys);
      fetchAllPuppys;
    };
  });

  return (
    <div>
      <h1>Welcome to puppy bowl!</h1>
      <div>
        {puppy.map((puppy) => {
          return <PuppyCard key={puppy.id} puppy={puppy} setPuppy={setPuppy} />;
        })}
      </div>
    </div>
  );
}
