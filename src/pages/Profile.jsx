

import { useLocation, useParams } from "react-router-dom";


function Profile(){

    const location = useLocation()
    console.log("location",location)

    let {username} = useParams()
    return(
        <div>
            <h1>Profile Page ({username}) </h1>
        </div>
    )
}


export default Profile;