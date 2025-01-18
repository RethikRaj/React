const CartItemCard = ({cartItemDetails})=>{
    const {name, count, price} = cartItemDetails;

    return (
        <div data-testid="cartItemCard" className="flex flex-row border-2 justify-between border-black p-4 m-2 rounded-lg">
            <h2>{name}</h2>
            <div className="flex flex-row justify-between">
                <h2 className="mx-2">Quantity : {count}</h2>
                <h2 className="mx-2">₹ {(price/100) * count}</h2>
            </div>
        </div>
    )
}

export default CartItemCard;