import { useSelector } from "react-redux";
import CartItemCard from "./CartItemCard";

const Cart = ()=>{
    const cartItems = useSelector((store)=>store.cart.items);
    let itemTotal = 0;

    return (
        <div className="flex flex-col items-center font-bold">
            <h1>My Cart</h1>
            <div className="w-6/12">
                {cartItems.map((cartItem)=>{
                    itemTotal += ((cartItem.price/100) * cartItem.count);
                    return <CartItemCard key={cartItem.id} cartItemDetails ={cartItem}/>
                })}
            </div>
            <div className="w-6/12 border-2 border-black rounded-lg p-4 mx-2">
                <h1>Bill Details</h1>
                <h2>Item Total : ₹{itemTotal}</h2>
                <h2>GST : ₹{itemTotal*(5/100)}</h2>
                <h2>Total : ₹{itemTotal + itemTotal*(5/100) }</h2>
            </div>
        </div>
    ) 
}


export default Cart;
