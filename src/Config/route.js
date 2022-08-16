import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Container/Home'
import Women from '../Container/Women'
import Men from '../Container/Men'
import Kids from '../Container/Kids'
// import Mybag from '../Components/bag'
import WebMybag from '../Components/webbag'
import { CartProvider } from 'react-use-cart'
import Form from '../Container/form'

var Allpaths = [

    { path: '/', Component: Home },
    { path: '/women', Component: Women },
    { path: '/men', Component: Men },
    { path: '/kids', Component: Kids },
    { path: '/webbag', Component: WebMybag },
    { path: '/form', Component: Form },

]

function AppRouter() {
    return (
        <BrowserRouter>
            <CartProvider>
                <Routes>
                    {
                        Allpaths.map((myroutes, index) => {
                            return (
                                <Route key={index} path={myroutes.path} element={<myroutes.Component />} />
                            )
                        })

                    }

                    {/* <Route path='/Men' element={<Men />} />
                     <Route path='/kids' element={<Kids />} />
                     <Route path='/webbag' element={<WebMybag />} /> */}
                </Routes>
            </CartProvider>

        </BrowserRouter>


    )
}
export default AppRouter