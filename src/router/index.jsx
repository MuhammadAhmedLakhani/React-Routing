import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from '../pages/Home1.jsx';
import Profile from '../pages/Profile.jsx';


function AppRouter(){
    return(
         <BrowserRouter>
            <Routes>
                <Route  path='/home' element = {<Home/>} />
                <Route  path='/profile' element = {<Profile/>} />
            </Routes>
         </BrowserRouter>
    )
}


export default AppRouter;