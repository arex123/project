import React from "react";
import Meal from "./Meal";

const mealItems = [
  {
    name: "taqilantro",
    desc: "finish food",
    price: 20,
  },
  {
    name: "panner tikka",
    desc: "protein rich spicy food",
    price: 5,
  },
  {
    name: "fish curry",
    desc: "bengali style",
    price: 8,
  },
  {
    name: "pizza",
    desc: "authentic italiana piazza",
    price: 4,
  },
  {
    name: "thaali",
    desc: "complete rajasthani style meal",
    price: 15,
  },
  {
    name: "momos",
    desc: "authentic nepali momo",
    price: 6,
  },
];
const List = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="mt-40 w-[50%] bg-white p-8 rounded-md space-y-6">
        {mealItems.map((meal) => (
          <Meal item={meal} />
        ))}
      </div>
    </div>
  );
};

export default List;
