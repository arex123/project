import React from "react";

const Banner = () => {
  return (
    <div className="text-white flex items-center justify-center">
      <div className=" border text-center shadow-2xl rounded-md bg-[#3f3f3f] mt-40 w-[40%] flex flex-col items-center p-12">
        <h1 className="text-2xl font-bold mb-7">Delicious food, deliver to you</h1>
        <p className="mb-5">
          Choose your favorite meal from our broad seletion of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className="">
          All our meals are cooked with high quality ingredients, just in time
          and ofcourse by experienced chefs!
        </p>
      </div>
    </div>
  );
};

export default Banner;
