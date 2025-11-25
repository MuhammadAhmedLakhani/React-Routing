

import { useLocation, useParams , useSearchParams } from "react-router-dom";


function Profile(){

    const [searchParams,setSearchParams] = useSearchParams()
    console.log("searchparam",searchParams.get('name'))

    let {username} = useParams()
    return(
        <div>
            <h1>Profile Page ({username}) </h1>
        </div>
    )
}


export default Profile;