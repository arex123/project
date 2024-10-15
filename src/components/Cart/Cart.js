import React, { useContext } from "react";
import ReactDOM from "react-dom";
import CartContext from "../../store/store-context";
import CartItem from "./CartItem";
const BackDrop = (props) => {  
  return (
    <div
      onClick={props.onClose}
      className="fixed top-0 left-0 w-full h-lvh z-10 bg-black bg-opacity-75"
    ></div>
  );
};
const ModalOverlay = (props) => {

  const ctx = useContext(CartContext)
  
  let totalAmount = ctx.items.reduce((acc,curr)=>{
      return acc+curr.price*curr.quantity
  },0)
  

  return (
    <div className="fixed p-5 top-[30vh] bg-white left-1/2 -translate-x-1/2 rounded-xl z-[100] w-[30%] overflow-hidden">
      <div className="space-y-2">
        <p className="text-2xl font-bold ">Cart</p>
        <p>{ctx.items.map(itm=><CartItem item={itm}/>)}</p>
        <h2 className="text-xl font-bold">Total Amount</h2>
      </div>
      <div className="flex flex-col items-end">
        <p className="text-xl font-bold">${totalAmount}</p>
        <div className="space-x-4">
          <button onClick={props.onClose} className="bg-white p-2 border border-red-500 mt-2 px-4 rounded-xl text-red-500">
            Close
          </button>
          <button className="bg-red-500 p-2 mt-2 px-4 rounded-xl text-white">
            Order
          </button>
        </div>
      </div>
    </div>
  );
};

const Cart = (props) => {
  return (
    <>
      {ReactDOM.createPortal(
        <BackDrop onClose={props.onClose}/>,
        document.getElementById("bg-overlay")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onClose={props.onClose}/>,
        document.getElementById("modal-overlay")
      )}
    </>
  );
};

export default Cart;
