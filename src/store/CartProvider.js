import { useState } from "react";
import CartContext from "./store-context"

const CartProvider = props => {

    const [items,setItems] = useState([])

    const addItemToCartHandler = (item)=>{

        //check if item is already present inside the list or not 
        let flag=true
        console.log("12 ",item)
        items.map(prod=>{
            if(prod.id==item.id){
                flag = false

                prod.quantity=Number(prod.quantity)+Number(item.quantity)
                
            }
        })
        setItems(prev=>prev.map((itm)=>{
            if(itm.id==item.id){
                flag=false
                return {...itm, item:itm.quantity+item.quantity}
            }
          
            return itm
        }
    ))
        console.log("19 ",items)
        
        if(flag)
            setItems([...items,item])
        // if(!item.quantity){
        //     return
        // }

        // let currItem = items.reduce((accumulate,element)=>{
        //     if(element.id==item.id){
        //         let nquant = element.quantity+Number(quantity)
        //         accumulate.push({...item,quantity:nquant})
        //     }

        // },[])

        // setItems()
    };
    const removeItemFromCartHandler = (id)=>{
        setItems(items.filter(item=>item.id!=id))
    };

    const cartContext = {
        items:items,
        addItem:addItemToCartHandler,
        removeItem:removeItemFromCartHandler
    }

    return (<CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>)
}

export default CartProvider