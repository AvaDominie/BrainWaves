
import { getUser, updateUser } from "../../services/userService"
import "./UserProfile.css"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"




export const EditProfile = () => {

    const [user, setUser] = useState({})
    const { userId } = useParams()

    useEffect(() => {
        getUser().then((data) => {
            setUser(data)
        })
    }, [])



    const userIdNumber = parseInt(userId)

    const handleEdit = () => {

        const EditUser = {
            id: userIdNumber,
            name: userIdNumber.name,
            bio: userIdNumber.bio ,
            profilePictureURL: userIdNumber.profilePictureURL,
            email: userIdNumber.email ,
            password: userIdNumber.password
        }
        updateUser(EditUser, userId)
    }



    return (
        <div>
            <h2>code is workinggggg</h2>
            <button onClick={handleEdit(user)}></button>
        </div>
    )


}



