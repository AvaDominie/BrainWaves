// import { useState } from "react"
// import { useNavigate, useParams } from "react-router-dom"
// import { createNewArtist } from "../../services/userService"







// export const CreateArtist = () => {

//     const { userId } = useParams()
//     const navigate = useNavigate()

//     const [artist, setArtist] = useState({})


    
    

    
    
//     const handleCreateArtist = (e) => {
//         const Create = {
//             userId: userId,
//             name: artist.name,
//             genre: artist.genre,
//             artistPictureURL: artist.artistPictureURL,
//             about: artist.about,
//             listenLink: artist.listenLink
//         }
//         createNewArtist(Create).then((response) => {
    
            
//             console.log("Artist created:", response)
//         })
//         navigate(`artist/${userId}`)
    
//         e.preventDefault()
//     }


//     const updateArtists = (evt) => {
//         const copy = { ...artist }
//         copy[evt.target.id] = evt.target.value
//         setArtist(copy)
//         console.log(copy)
//     }


//     return (
//         <form className="create-artist">
//             <h2>Create New Artist</h2>
//             <fieldset>
//                 <div>
//                     <label>Name:</label>
//                     <input
//                         type="text"
//                         value={artist.name}
//                         name="name"
//                         onChange={handleCreateArtist}
//                         required
//                         className="form-control" />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div>
//                     <label>Genre:</label>
//                     <input
//                         type="text"
//                         value={artist.genre}
//                         name="genre"
//                         onChange={handleCreateArtist}
//                         required
//                         className="form-control" />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div>
//                     <label>About:</label>
//                     <input
//                         type="text"
//                         value={artist.about}
//                         name="about"
//                         onChange={handleCreateArtist}
//                         required
//                         className="form-control" />
//                 </div>
//             </fieldset>
//             <fieldset>
//                 <div>
//                     <label>Artist Picture URL:</label>
//                     <input
//                         type="text"
//                         value={artist.artistPictureURL}
//                         name="artistPictureURL"
//                         onChange={handleCreateArtist}
//                         required
//                         className="form-control" />
//                 </div>
//             </fieldset>

//             <fieldset>
//                 <div>
//                     <label>listen Link:</label>
//                     <input
//                         type="text"
//                         value={artist.listenLink}
//                         name="listenLink"
//                         onChange={handleCreateArtist}
//                         required
//                         className="form-control" />
//                 </div>
//             </fieldset>



//             <fieldset>
//                 <div className="form-group">
//                     <button className="user-info-edit-btn" onClick={createNewArtist}>Save</button>

//                 </div>
//             </fieldset>
//         </form>
//     )




// }
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { createNewArtist } from "../../services/userService"

export const CreateArtist = () => {
    const { userId } = useParams()
    const navigate = useNavigate()

    const [artist, setArtist] = useState({
        userId: userId,
        name: "",
        genre: "",
        artistPictureURL: "",
        about: "",
        listenLink: "",
    })

    const handleCreateArtist = (e) => {
        createNewArtist(artist).then((response) => {
            console.log("Artist created:", response)
            navigate(`/artists/${userId}`)
        })

        e.preventDefault()
    }

    const updateArtists = (evt) => {
        const copy = { ...artist }
        copy[evt.target.name] = evt.target.value
        setArtist(copy)
    }

    return (
        <form className="create-artist" onSubmit={handleCreateArtist}>
            <h2>Create New Artist</h2>
            <fieldset>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        value={artist.name}
                        name="name"
                        onChange={updateArtists}
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Genre:</label>
                    <input
                        type="text"
                        value={artist.genre}
                        name="genre"
                        onChange={updateArtists}
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>About:</label>
                    <input
                        type="text"
                        value={artist.about}
                        name="about"
                        onChange={updateArtists}
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Artist Picture URL:</label>
                    <input
                        type="text"
                        value={artist.artistPictureURL}
                        name="artistPictureURL"
                        onChange={updateArtists}
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Listen Link:</label>
                    <input
                        type="text"
                        value={artist.listenLink}
                        name="listenLink"
                        onChange={updateArtists}
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <button type="submit" className="user-info-edit-btn">
                        Save
                    </button>
                </div>
            </fieldset>
        </form>
    )
}
