
import { useState, useEffect } from "react"
import { getAllUsers } from "../../services/userService"
import "./User.css"



export const AllUserList = () => {
    const [allUser, setAllUser] = useState([])


    useEffect(() => {
        getAllUsers().then((data) => {
            setAllUser(data)
            console.log("All Users:", allUser)
        })
    }, [allUser])

    return (
        <div className="allUsers">
            {/* Search Users */}

            {/* Display user's picture, name, and friend button */}
            {/* {allUser.map((user) => {
                return (
                    <div key={user.id}>
                        <div key={user.id}>
                            <img src={user.userPictureURL} alt={user.name} />
                            <h2>{user.name}</h2>
                            <p>Genre: {user.genre}</p>
                            <button className="like-btn">Like</button>
                            <h1>_________________________________________________________________________________________________________________________________________________</h1>
                        </div>

                        )
        })} */}

                    </div>
                )



            }


