import { Arrival1, Arrival2, Arrival3 } from "@/utils/media";
import Card from "../card/card";
import Title from "../title/title";

export default function NewArrival() {
  return (
    <div className="w-full">
      <Title title="New Arrivals" uppercase />
      <div className="grid grid-cols-3 w-full gap-16">
        <div className="flex items-center justify-center">
          <Card src={Arrival1} title="Hoodies & Sweetshirt" />
        </div>
        <div className="flex items-center justify-center">
          <Card src={Arrival2} title="Coats & Parkas" />
        </div>
        <div className="flex items-center justify-center">
          <Card src={Arrival3} title="Tees & T-Shirt" />
        </div>
      </div>
    </div>
  );
}
