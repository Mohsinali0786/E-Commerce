import MediaCard from '../Components/card';
import ResponsiveAppBar from '../Components/navbar'
import { Container } from '@mui/system';
import { Grid, Button } from '@mui/material';
import Data from '../Components/data'
import { useCart } from 'react-use-cart';

function Women() {
    const { addItem } = useCart();

    return (
        <Container className='maincont'>
            <Grid>
                <ResponsiveAppBar />
            </Grid>

            <h1 className='pageheading'>Womens Collection</h1>
            <Grid className='cardstyling'>
                {
                    Data.Women.map((items, index) => {
                        return (
                            <Grid key={index} className='productcard'>
                                <MediaCard img={items.img} itemName={items.Name} price={items.price} />
                                <Button variant='contained' color='success' onClick={() => addItem(items)}>Add To Cart</Button>
                            </Grid>

                        )
                    })
                }
            </Grid>

        </Container >
    )

}
export default Women;