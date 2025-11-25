import {BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from '../pages/Home1.jsx';
import Profile from '../pages/Profile.jsx';
import AppLayout from '../components/Layout.jsx';
import NotFound from '../components/NotFound.jsx';
import LoginApp from '../components/Login.jsx';




function AppRouter(){
    return(
         <BrowserRouter>
            <Routes>
                <Route path='/' element = {<LoginApp/>} />
                <Route  path='/home' element = { <AppLayout><Home/></AppLayout> } />
                {/* <Route  path='/profile' element = {<Profile/>} /> */}
                <Route path='/profile/:username' element = {<AppLayout><Profile/></AppLayout>} />


                <Route path='*' element = {<NotFound/>} />
            </Routes>
         </BrowserRouter>
    )
}


export default AppRouter;