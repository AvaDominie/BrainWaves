import { useState, useEffect } from "react"
import { getAllArtists } from "../../services/userService"
import "./Artist.css"




export const AllArtistList = () => {

    const [allArtist, setAllArtist] = useState([])

    useEffect(() => {
        getAllArtists().then((data) => {
            setAllArtist(data)
            console.log(allArtist)
        })
    }, [allArtist])



    return (
        <div className="allArtists">
            {/* Search Artist */}

            {/* Display artist picture, name, genre, and like button */}
            {allArtist.map((artist) => {
                return (
                    <div key={artist.id}>
                        <img src={artist.artistPictureURL} alt={artist.name} />
                        <h2>{artist.name}</h2>
                        <p>Genre: {artist.genre}</p>
                        <button className="like-btn">Like</button>
                        <h1>_________________________________________________________________________________________________________________________________________________</h1>
                    </div>
                )
            })}
            {/* {Array.isArray(allArtist) && allArtist.length > 0 ? (
                allArtist.map((artist) => (
                    <div key={artist.id}>
                        <img src={artist.pictureURL} alt={artist.name} />
                        <h2>{artist.name}</h2>
                        <p>Genre: {artist.genre}</p>
                        <button>Like</button>
                    </div>
                ))
            ) : (
                <p>No artists found.</p>
            )} */}

            {/* Display add new artist button */}

        </div>
    )




}






