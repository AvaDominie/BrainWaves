

import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GetArtistById, updateArtist } from "../../services/userService"

export const EditArtist = () => {
    const [artist, setArtist] = useState({
        name: "",
        genre: "",
        about: "",
        artistPictureURL: "",
        listenLink: ""
    })

    const { artistId } = useParams() 

    const navigate = useNavigate()

    useEffect(() => {

        GetArtistById(artistId).then((data) => {
            setArtist(data[0])
        })

    }, [artistId])

    const artistIdNumber = parseInt(artistId)

    const handleUpdate = () => {

        const updatedArtist = {
            id: artistIdNumber,
            userId: artist.userId,
            name: artist.name,
            genre: artist.genre,
            about: artist.about,
            artistPictureURL: artist.artistPictureURL,
            listenLink: artist.listenLink,
        }

        updateArtist(artistId, updatedArtist).then(() => {

            navigate(`/artists-details/${artistIdNumber}`)
        })
    }



    const handleChange = (evt) => {
        const { name, value } = evt.target
        setArtist({
            ...artist,
            [name]: value,
        })
    }

    return (
        <form>
            <h2>Edit Artist</h2>
            <fieldset>
                <div>
                    <label>Name:</label>
                    <input
                        type="text"
                        name="name"
                        value={artist.name}
                        onChange={handleChange}
                    />
                </div>
            </fieldset>
            <fieldset>
                <div>
                    <label>Genre:</label>
                    <input
                        type="text"
                        value={artist.genre ? artist.genre : ""}
                        name="genre"
                        onChange={handleChange}
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
                        value={artist.about ? artist.about : ""}
                        name="about"
                        onChange={handleChange}
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
                        value={artist.artistPictureURL ? artist.artistPictureURL : ""}
                        name="artistPictureURL"
                        onChange={handleChange}
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
                        value={artist.listenLink ? artist.listenLink : ""}
                        name="listenLink"
                        onChange={handleChange}
                        required
                        className="form-control"
                    />
                </div>
            </fieldset>

            <button className="user-info-edit-btn" onClick={handleUpdate}>Update</button>
        </form>
    )
}





