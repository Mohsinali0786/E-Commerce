import { useState, useEffect } from "react";

import { Button } from "@mui/material";
import { Divider } from "antd";
import Swal from "sweetalert2";
function Mybag() {
    const [Quantity, SetQuantity] = useState(0);
    const [deleteclicked, setdeleteclicked] = useState(false)
    const [allbagitems, setallbagitems] = useState([])
    let AllItemsInBag;
    useEffect(() => {
        console.log("Use Effect 1")
        if (localStorage.getItem("mycart") === null) {
            console.log("Use Effect 2")
        }
        else {
            // AllItemsInBag.items = [null]
            console.log("Use Effect 3")
            AllItemsInBag = JSON.parse(localStorage.getItem('mycart'))
            setallbagitems(AllItemsInBag?.items)

        }


    }, [AllItemsInBag?.items])

    console.log(allbagitems, 'allbagitems')
    useEffect(() => {
        if (allbagitems.length === 0) {

        }
        else {
            setdeleteclicked(false)
        }

    }, [deleteclicked === true])

    const deleteitemfromcart = (index) => {
        setdeleteclicked(true)
        for (var i = 0; i < allbagitems.length; i++) {
            console.log("i===>", i, index)
            if (index === i) {
                allbagitems.splice(index, 1)
                setallbagitems(allbagitems)
                localStorage.setItem('mycart', JSON.stringify({ items: [...allbagitems] }))
            }
        }
    }
    console.log("Updated allbagitems====>", allbagitems)
    if (allbagitems.length === 0) return <p className="emptycart-text">Your cart is empty</p>;
    return (

        <div className="Bag-maindiv">
            <h1 >Mybag</h1>
            <div className="Bag-sub-div">
                <h3>Total-Items:{allbagitems.length}</h3>
                {/* <h3>Cart ({totalUniqueItems})</h3> */}
            </div>

            <Divider className="divcol" />

            <div >

                <ul >
                    {allbagitems?.map((item, index) => {
                        console.log('item', item)
                        return (
                            <>
                                <div className='lists2' >
                                    <div>
                                        <img src={item.img} style={{ width: '50%', height: '80%' }} />
                                    </div>
                                    <div>
                                        <h4><b>ItemName</b><br />{item.itemName}</h4>
                                        <h4><b>Price:$</b>{item.price}</h4>
                                        <h4><b>Quantity:</b>{Quantity}</h4>
                                    </div>
                                </div>
                                <div className="update-quantity" >
                                    <div className="D-quan-btn">
                                        <Button className="quan-btn" variant="contained" color='success'
                                            onClick={() => SetQuantity(Quantity - 1)}
                                        >
                                            -
                                        </Button>
                                        <Button className="quan-btn" variant="contained" color='success'
                                            onClick={() => SetQuantity(Quantity + 1)}
                                        >
                                            +
                                        </Button>
                                    </div>
                                    <div>
                                        <Button color="error" className='del-btn' variant="contained" onClick={() => deleteitemfromcart(index)}>Delete</Button>
                                    </div>

                                </div>

                                < Divider className="divcol" />
                            </>

                        )
                    })}
                </ul>

            </div>



        </div >
    )

}

export default Mybag;