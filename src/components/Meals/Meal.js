import React from "react";

const Meal = ({ item }) => {
  return (
    <div className="border-b-2 flex justify-between pb-2 space-y-2">
      <div>
        <p className="font-bold">{item.name}</p>
        <p className="font-ligh">{item.desc}</p>
        <p className="font-bold text-[#7F3814]">${item.price}</p>
      </div>
      <div>
        <form  className="flex flex-col justify-right">
          <div>
            <label htmlFor="quantity" className="font-bold mx-2">Amount</label>
            <input type="number" className="border p-1 w-10 " value="0" id="quantity" />
          </div>
          <button className="bg-red-500 p-2 mt-2 rounded-xl text-white">+ ADD</button>
        </form>
      </div>
    </div>
  );
};

export default Meal;
