import { useState } from "react";
import CartContext from "./store-context";

const CartProvider = (props) => {
  const [items, setItems] = useState([]);

  const addItemToCartHandler = (item) => {

    console.log("9 ",item)

    let qnt = items.reduce((acc,ele)=>{
        console.log("ele ",ele)
        if(item.id==ele.id){
            return Number(acc)+Number(ele.quantity)
        }
        return acc
    },0)

    console.log("qnt ",qnt)

    if(qnt==0){
        setItems([...items,item]);
    }else{
        console.log("21 ",qnt)
        setItems((prev)=>{
            return prev.map((itm)=>{
                if(itm.id==item.id){
                    return {...itm,quantity : qnt+1}
                }
                return itm
            })
        })
    }

  };
  const removeItemFromCartHandler = (id) => {
    console.log("id ", id);
    let flag = true;
    items.map((itm) => {
      if (itm.id == id && itm.quantity == 1) {
        deleteItemFromCartHandler(id);
        flag = false;
      }
    });
    if (flag) {
      setItems((prev) =>
        prev.map((itm) => {
          if (itm.id == id) {
            return { ...itm, quantity: Number(itm.quantity) - 1 };
          }
          return itm;
        })
      );
    }
  };
  const deleteItemFromCartHandler = (id) => {
    setItems((prev) => prev.filter((item) => item.id != id));
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    deleteItem: deleteItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
