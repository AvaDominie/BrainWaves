import { useState, useEffect } from "react"
import { getAllArtists } from "../../services/userService"
import "./Artist.css"




export const AllArtistList = () => {

    const [allArtist, setAllArtist] = useState([])

    useEffect(() => {
        getAllArtists().then((data) => {
            setAllArtist(data)
            
        })
    }, [])



    return (
        <div className="allArtists">
            {/* Search Artist */}

            {/* Display artist picture, name, genre, and like button */}
            {allArtist.map((artist) => {
                return (
                    <div key={artist.id}>
                        <img className="artistList-pic" src={artist.artistPictureURL} alt={artist.name} />
                        <h2>{artist.name}</h2>
                        <p>Genre: {artist.genre}</p>
                        <button className="like-btn">Like</button>
                        <h1>_________________________________________________________________________________________________________________________________________________</h1>
                    </div>
                )
            })}

            {/* Display add new artist button */}

        </div>
    )




}






