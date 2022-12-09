import { Favorite1, Favorite2 } from "@/utils/media";
import * as React from "react";
import Card from "../card/card";
import Title from "../title/title";

export default function Favorite() {
  return (
    <div>
      <Title title="Young's Favorite" uppercase={false} />
      <div className="grid grid-cols-2 gap-16">
        <div className="flex items-center justify-center">
          <Card src={Favorite1} title="Trending on instagram" />
        </div>
        <div className="flex items-center justify-center">
          <Card src={Favorite2} title="All Under $40" />
        </div>
      </div>
    </div>
  );
}
