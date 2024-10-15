import React, { useContext, useState } from "react";
import CartContext from '../../store/store-context'
const MealItemForm = (props) => {
    const [qntVal,setQntVal] = useState(1)
    const ctx=useContext(CartContext)

    const addItemtoCart = (event)=>{
        event.preventDefault();
        
        let quantity = document.getElementById('form-item-quantity-'+props.id).value
        

        ctx.addItem({...props.item,quantity:quantity})
        

    }

  return (
    <div>
      <form className="flex flex-col justify-right" onSubmit={addItemtoCart}>
        <div>
          <label htmlFor="quantity" className="font-bold mx-2">
            Amount
          </label>
          <input
            type="number"
            className="border p-1 w-10 "
            value={qntVal}
            onChange={(e)=>setQntVal(e.target.value)}
            id={"form-item-quantity-"+props.id}
          />
        </div>
        <button className="bg-red-500 p-2 mt-2 rounded-xl text-white">
          + ADD
        </button>
      </form>
    </div>
  );
};

export default MealItemForm;
