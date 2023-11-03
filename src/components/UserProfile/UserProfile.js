
import "./UserProfile.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { UserAddedFriend, UserLikedArtist, getUser, getAllUsers, UnlikeArtist, unfriendUser } from "../../services/userService"
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'



export const UserProfile = () => {
    const [user, setUser] = useState({})
    const [likedArtists, setLikedArtists] = useState([])
    const [addedFriends, setAddedFriends] = useState([])
    const [userfriends, setUserFriends] = useState([])
    const { userId } = useParams()
    const navigate = useNavigate()
    const [foundFriend, setFoundFriend] = useState({})



    useEffect(() => {
        getUser(userId).then((data) => {
            const userObj = data[0]
            setUser(userObj)
        })

        UserLikedArtist(userId).then((data) => {
            setLikedArtists(data)
        })

        UserAddedFriend(userId).then((data) => {
            setAddedFriends(data)
        })



    }, [userId])




    // get all friends related to current user's userId, and set that to userFriends
    // (expand this so we have info about each of those other users)
    // set it to UserFriends
    useEffect(() => {

        UserAddedFriend().then((data) => {
            setUserFriends(data)
        })

        getAllUsers().then((data) => {
            const usersById = data.reduce((acc, user) => {
                acc[user?.id] = user;
                return acc;
            }, {})

            // Extract and store user friends' information
            const friendsInfo = addedFriends.map((friend) => usersById[friend?.friendsId])
            setUserFriends(friendsInfo)
        })


    }, [addedFriends])


    const LinktoEditForm = () => {
        navigate(`/edit-profile/${userId}`)
    }






    const handleUnlike = (likedId) => {

        console.log("like id", likedId)

        UnlikeArtist(likedId).then(() => {
            // Remove the unliked artist from the likedArtists state
            setLikedArtists((prevLikedArtists) => prevLikedArtists.filter((artist) => artist.id !== likedId))
        })
    }



    const handleUnfriend = (friendId) => {
        console.log("friend id", friendId)

        // need friend.id not friendId
        const foundFriendData = addedFriends.find((friend) => friend.friendsId === friendId)
        setFoundFriend(foundFriendData)
        console.log(foundFriend.id)
        
        unfriendUser(foundFriend.id).then(() => {
            // Remove the friend relationship from friends state
            
            setAddedFriends((prevAddedFriends) => prevAddedFriends.filter((friend) => friend.id !== foundFriend.id))
            console.log(addedFriends)
        })
    }

    // useEffect(() => {
    //     if (foundFriend.id) {
    //         unfriendUser(foundFriend.id).then(() => {
    //             // Remove the friend relationship from friends state
    //             setAddedFriends((prevAddedFriends) => prevAddedFriends.filter((friend) => friend.id !== foundFriend.id))
    //             console.log(addedFriends)
    //         })
    //     }
    // }, [foundFriend])


    return (
        <div>
            <h1 className="welcome-profile">Welcome {user.name}</h1>

            {/* Display Picture */}
            <section className="user-info-picture">
                <img className="user-picture" src={user.profilePictureURL} alt={user.name} />
            </section>

            {/* Display bio */}
            <section className="user-info-bio">
                <h1>Bio</h1>
                {user.bio}
            </section>

            {/* Display artists picture, name, genre, and unlike button */}
            <section className="user-info-liked">
                <h1>Liked Artists</h1>
                {likedArtists.map((liked) => (
                    <div key={liked.artist.id}>
                        <Link to={`/artists-details/${liked.artist.id}`}>
                            <div>{liked.artist.name}</div>
                        </Link>
                        <img className="artistList-pic" src={liked.artist.artistPictureURL} alt={liked.artist.name} />
                        <div>Genre: {liked.artist.genre}</div>

                        <button className="Unlike-btn" onClick={() => handleUnlike(liked?.id)}>Unlike</button>
                        <h1>_________________________________________________________________________________________________________________________________________________</h1>
                    </div>
                ))}
            </section>

            {/* Display friends' picture and name */}
            <section className="user-info-friends">
                <h1>Friends</h1>
                {userfriends.map((friend) => (
                    <div key={friend?.id}>
                        <img className="pfp-url" src={friend?.profilePictureURL} alt={friend?.name} />
                        <Link to={`/users-details/${friend?.id}`}>
                            <h2>{friend?.name}</h2>
                        </Link>

                        <button className="Unlike-btn" onClick={() => handleUnfriend(friend?.id)}>Unfriend {friend?.id}</button>
                        <h1>_________________________________________________________________________________________________________________________________________________</h1>

                    </div>
                ))}
            </section>

            {/* Display edit button */}
            <button className="user-info-edit-btn" onClick={LinktoEditForm}>Edit</button>
        </div>
    )
}

