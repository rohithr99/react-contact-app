import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function SingleView() {

    const [allUser, setUser] = useState([]);

    const params = useParams();

    const getUser = async () => {
        const result = await fetch(`/db.json`)

        //convert json to javascript
        result.json().then(data => {
            setUser(data.contacts);
        })
    }


    // console.log(allUser);

    useEffect(() => {
        getUser();
        // console.log(params.id);
    }, [])

    const singleUser = allUser.find(i => i.id == params.id)
    console.log(singleUser);

    return (
        <div className="text-center">
            {
                singleUser ? 
                <div>
                    <h1>{singleUser.username}</h1>
                    <img src={singleUser.profile} alt="" />
                    <h6 className="mt-2">Mobile: {singleUser.mobile}</h6>
                    <p>Address: {singleUser.address}</p>
                    <ul>
                        <li>Place : {singleUser.place}</li>
                        <li>E-mail : {singleUser.email}</li>
                    </ul>
                </div>
                : <h1>No Contact Found</h1>
            }

        </div>
    )
}

export default SingleView