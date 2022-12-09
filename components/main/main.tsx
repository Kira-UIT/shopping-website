import * as React from "react";
import Banner from "./banner";
import Branch from "./branch";
import Community from "./community";
import Favorite from "./favorite";
import Hero from "./hero";
import NewArrival from "./new-arrival";

export default function Main() {
  return (
    <div className="grow space-y-16 > * + *">
      <Hero />
      <Branch />
      <NewArrival />
      <Banner />
      <Favorite />
      <Community />
    </div>
  );
}
