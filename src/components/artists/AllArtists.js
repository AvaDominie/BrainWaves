

import "./Artist.css"
import { Link } from 'react-router-dom'




export const AllArtists = ({ artist }) => {

    return (
        <div key={artist.id}>
            <img className="artistList-pic" src={artist.artistPictureURL} alt={artist.name} />
            <Link to={`/artists-details/${artist.id}`}>
                <h2>{artist.name}</h2>
            </Link>
            <p>Genre: {artist.genre}</p>
        </div>
    )
}

