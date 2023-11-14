
import { useState, useEffect } from "react"
import { friendUser, getAllUsers } from "../../services/userService"
import "./User.css"
import { UserSearchBar } from "../search/SearchBar"
import { AllUsers } from "./AllUsers"
import { useParams } from "react-router-dom"



export const AllUserList = () => {
    const [allUser, setAllUser] = useState([])
    const [filteredUsers, setFilteredUsers] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const { userId } = useParams()


    useEffect(() => {
        getAllUsers().then((data) => {
            setAllUser(data)
            
        })
    }, [])


    useEffect(() => {
        const foundUser = allUser.filter(user => 
            user.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredUsers(foundUser)
            
    }, [allUser, searchTerm])

    const userIdNumber = parseInt(userId)

    const handleFriend = (user) => {

        const newFriend = {
            currentUserId: userIdNumber,
            userId: user.id
        }
        friendUser(newFriend, userId)
    }


    return (
        <div className="allUsers">
            <br />

            {/* Search Users */}
            <h2>Search User:</h2>
            <UserSearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
            <br/>
            
            {/* Display all filtered users */}
            {filteredUsers.map( user => {
                return (
                    <div key={user.id}>
                    <AllUsers user={user} />
                    <button className="like-btn"
                    onClick={() => handleFriend(user)}
                    >Friend</button>
                    <hr></hr>
                    </div>
                )
            })}
            </div>
    )
}


























// {allUser.map((user) => {
//     return (
//         <div key={user.id}>
//             <img className="pfp-url" src={user.profilePictureURL} alt={user.name} />
//             <h2>{user.name}</h2>
//             <p>Genre: {user.genre}</p>
//             <button className="like-btn">Like</button>
//             <h1>_________________________________________________________________________________________________________________________________________________</h1>
//         </div>
//     )
// })}
// </div>

    // return (
    //     <div className="allUsers">
    //         {/* Search Users */}

    //         {/* Display user's picture, name, and friend button */}
    //         {allUser.map((user) => {
    //             return (
    //                 <div key={user.id}>
    //                     <div key={user.id}>
    //                         <img src={user.userPictureURL} alt={user.name} />
    //                         <h2>{user.name}</h2>
    //                         <p>Genre: {user.genre}</p>
    //                         <button className="like-btn">Like</button>
    //                         <h1>_________________________________________________________________________________________________________________________________________________</h1>
    //                     </div>
    //                     )
                        
    //         })}

    //                 </div>

    //             )
    //         }
