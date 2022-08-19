import MediaCard from '../Components/card';
import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import Data from '../Components/data'
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Women() {
    const Navigate = useNavigate()


    // For MySelfCart

    const [additems, setAddItems] = useState([])
    const [id, setid] = useState(0)
    const [getdatafromLS, setgetdaatfromLC] = useState([])

    const AddItemsInCart = (items) => {

        console.log("items in function", items)
        setAddItems([...additems, { img: items.img, itemName: items.Name, price: items.price }])
        // console.log(additems)
        setid(id + 1)

    }
    console.log("Add items state", additems)

    useEffect(() => {

        if (additems.length === 0) {

        }
        else {
            // let previousData = localStorage.getItem('mycart')
            // console.log('previousData',previousData)
            localStorage.setItem('mycart', JSON.stringify({ isEmpty: false, items: [...additems] }))
        }

    }, [additems])

    const myalert1 = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'btn btn-success',
                cancelButton: 'btn btn-danger'
            },
            buttonsStyling: true
        })

        swalWithBootstrapButtons.fire({
            title: 'Please Login First?',
            text: "You won't be able to add your product now!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Login!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {

                Navigate('/form')
            } else if (
                /* Read more about handling dismissals below */
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }
    // console.log("outside===>", additems)
    // const AddItemsInCart = (item) => {
    //     if (localStorage.getItem("id") === null) {
    //         myalert1()
    //         // Navigate('/form')
    //     }
    //     else {
    //         var data = JSON.parse(localStorage.getItem('id'))
    //         if (data.IsLogin) {
    //             addItem(item)
    //             Swal.fire(
    //                 'Succeed!',
    //                 'You Item has been added to cart sucessfuly!',
    //                 'success'
    //             )

    //         }
    //         else {
    //             Swal.fire(
    //                 'Please LogIn!',
    //                 'To Add Item in Cart you should Login first!',
    //                 'warning'
    //             )
    //             Navigate('/form')
    //         }
    //     }

    // }

    return (
        <Container className='maincont'>
            <Grid>
                <ResponsiveAppBar />
            </Grid>

            <h1 className='pageheading'>Womens Collection</h1>
            <Grid className='cardstyling'>
                {
                    Data?.Women?.map((items, index) => {
                        // setitems({ img: items.img, itemName: items.Name, price: items.price })
                        return (
                            <Grid key={index} className='productcard'>
                                <MediaCard img={items.img} itemName={items.Name} price={items.price} />
                                <Button variant='contained' color='success' onClick={() => { AddItemsInCart(items) }}>Add To Cart</Button>
                            </Grid>

                        )
                    })
                }
            </Grid>

        </Container >
    )

}
export default Women;