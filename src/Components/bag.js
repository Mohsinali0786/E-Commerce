import { useCart } from "react-use-cart";
import { Button } from "@mui/material";
import { Divider } from "antd";

function Mybag() {

    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        updateItemQuantity,
        removeItem,
        emptyCart,
        cartTotal,
    } = useCart();
    if (isEmpty) return <p>Your cart is empty</p>;

    return (

        <div className="Bag-maindiv">
            <h1 >Mybag</h1>
            <div className="Bag-sub-div">
                <h3>Total-Items:{totalItems}</h3>
                <h3>Cart ({totalUniqueItems})</h3>
            </div>
            <Divider className="divcol" />

            <div >
                <ul >
                    {items.map((item) => (
                        <li key={item.id} className='lists'>
                            <div className='lists2' >
                                <div>
                                    <img src={item.img} style={{ width: '30%', height: 'auto' }} />
                                </div>
                                <div>
                                    <h4><b>ItemName</b>:{item.Name}</h4>
                                    <h4><b>Price:$</b>{item.price}</h4>
                                    <h4><b>Quantity:</b>{item.quantity}</h4>

                                </div>

                            </div>


                            <div className="update-quantity" >
                                <div className="D-quan-btn">
                                    <Button className="quan-btn" variant="contained" color='success'
                                        onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </Button>
                                    <Button className="quan-btn" variant="contained" color='success'
                                        onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </Button>
                                </div>
                                <div>
                                    <Button color="error" className='del-btn' variant="contained" onClick={() => removeItem(item.id)}>Delete</Button>
                                </div>

                            </div>
                            <Divider className="divcol" />
                        </li>

                    ))}
                </ul>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '50px' }}>
                    <h2 style={{ marginLeft: '8%' }}><b>Total:</b>${cartTotal}</h2>
                    <Button variant='contained' color='error' onClick={() => emptyCart()}>Delete All</Button>
                </div>

            </div>



        </div>
    )

}

export default Mybag;