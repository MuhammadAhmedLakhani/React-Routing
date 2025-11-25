import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from '../pages/Home1.jsx';
import Profile from '../pages/Profile.jsx';
import AppLayout from '../components/Layout.jsx';

function AppRouter(){
    return(
         <BrowserRouter>
            <Routes>
                <Route  path='/home' element = { <AppLayout><Home/></AppLayout> } />
                {/* <Route  path='/profile' element = {<Profile/>} /> */}
                <Route path='/profile' element = {<AppLayout><Profile/></AppLayout>} />
            </Routes>
         </BrowserRouter>
    )
}


export default AppRouter;