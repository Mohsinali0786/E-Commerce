import MediaCard from '../Components/card';
import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import Data from '../Components/data'
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

import { useState } from 'react';

import Swal from 'sweetalert2'

function Kids() {
    const Navigate = useNavigate()
    const [login, islogin] = useState(false)


    const alert = (item) => {
        if (login) {
            addItem(item)
            Swal.fire(
                'Succeed!',
                'You Item has been added to cart sucessfuly!',
                'success'
            )

        }
        else {
            Navigate('/form')
        }

    }
    // console.log(Data.Kids)
    const { addItem } = useCart();

    return (
        <Container className='maincont'>
            <Grid>
                <ResponsiveAppBar />
            </Grid>
            <h1 className='pageheading'>Kids Collection</h1>
            <Grid className='cardstyling'>
                {
                    Data.Kids.map((item, index) => {
                        return (
                            <Grid key={index} className='productcard'>
                                <MediaCard img={item.img} itemName={item.Name} price={item.price} />
                                <Button variant='contained' color='success' onClick={() => alert(item)}>Add To Cart</Button>

                            </Grid>
                        )
                    })
                }
            </Grid>
        </Container >
    )

}
export default Kids;