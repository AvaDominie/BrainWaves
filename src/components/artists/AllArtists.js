
// import { Link } from "react-router-dom"
import "./Artist.css"




export const AllArtists = ({ artist }) => {

    return (
        <div key={artist.id}>
            <img className="artistList-pic" src={artist.artistPictureURL} alt={artist.name} />
            <h2>{artist.name}</h2>
            <p>Genre: {artist.genre}</p>
            <button className="like-btn">Like</button>
            <h1>_________________________________________________________________________________________________________________________________________________</h1>
        </div>
    )
}

