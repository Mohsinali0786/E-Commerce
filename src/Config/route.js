import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Women from '../Container/Women'
import Men from '../Container/Men'
import Kids from '../Container/Kids'
import { CartProvider } from 'react-use-cart'

function AppRouter() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    <Route exact path='/' element={<Women />} />
                    <Route path='/Men' element={<Men />} />
                    <Route path='/kids' element={<Kids />} />
                </Routes>
            </CartProvider>

        </BrowserRouter>


    )
}
export default AppRouter