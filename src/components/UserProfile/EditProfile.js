
import { getUser, updateUser } from "../../services/userService"
import "./UserProfile.css"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"




export const EditProfile = () => {

    const [user, setUser] = useState({})
    const { userId } = useParams()

    const navigate = useNavigate()

    useEffect(() => {
        getUser(userId).then((data) => {
            setUser(data[0])
        })
    }, [userId])



    const userIdNumber = parseInt(userId)

    const handleEdit = () => {

        const EditUser = {
            id: userIdNumber,
            name: user.name,
            bio: user.bio ,
            profilePictureURL: user.profilePictureURL,
            email: user.email ,
            password: user.password
        }
        updateUser(EditUser).then(() => {

            // This is not navigating when save is clicked
            navigate(`/profile/${EditUser.id}`)
            
        });
    }

    const handleInputChange = (event) => {
        const stateCopy = {...user}
        stateCopy[event.target.name] = event.target.value
        setUser(stateCopy)
    }


    return (
        <form className="edit-profile">
            <h2>Update Profile</h2>
            <fieldset>
            <div className="form-group">
                    <label>Name:</label>
                    <input type="text"
                        value={user.name ? user.name : ""}
                        name="name"
                        onChange={handleInputChange}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label>Bio:</label>
                    <input type="text"
                        value={user.bio ? user.bio : ""}
                        name="bio"
                        onChange={handleInputChange}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label>Profile Picture URL:</label>
                    <input type="text"
                        value={user.profilePictureURL ? user.profilePictureURL : ""}
                        name="profilePictureURL"
                        onChange={handleInputChange}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label>Email:</label>
                    <input type="text"
                        value={user.email ? user.email : ""}
                        name="email"
                        onChange={handleInputChange}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
            <div className="form-group">
                    <label>Password:</label>
                    <input type="text"
                        value={user.password ? user.password : ""}
                        name="password"
                        onChange={handleInputChange}
                        required
                        className="form-control" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
            <button className="user-info-edit-btn" onClick={handleEdit}>Save</button>

                </div>
            </fieldset>
        </form>
    
    )
}



