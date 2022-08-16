import MediaCard from '../Components/card';
import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import { useCart } from 'react-use-cart';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';



import Data from '../Components/data'

function Men() {
    const { addItem } = useCart();
    const alert = (item) => {
        addItem(item)
        Swal.fire(
            'Succeed!',
            'You Item has been added to cart sucessfuly!',
            'success'
        )

    }

    return (
        <Container className='maincont'>
            <Grid>
                <ResponsiveAppBar />
            </Grid>

            <h1 className='pageheading'>Men Collection</h1>
            <Grid className='cardstyling'>

                {
                    Data.Men.map((items, index) => {
                        return (
                            <Grid key={index} className='productcard' >
                                <MediaCard img={items.img} itemName={items.Name} price={items.price} />
                                <Button variant='contained' color='success' onClick={() => alert(items)}>Add To Cart</Button>

                            </Grid>
                        )
                    })

                }
            </Grid>
        </Container >
    )

}
export default Men;