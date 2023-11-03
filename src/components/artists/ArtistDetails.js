
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GetArtistById } from "../../services/userService"




export const ArtistsDetails = () => {

    const [artists, setArtists] = useState([])
    const { artistId } = useParams()
    // const navigate = useNavigate()


    useEffect(() => {
        GetArtistById(artistId).then((data) => {
            setArtists(data)
        })
    }, [artistId])
    console.log(artists.name)

    // const isCurrentUserArtistCreator = currentUserId === artists.userId

    return (
        <div>
            {artists.map((artist) => (
                <div key={artist.id}>

                    <section className="artist-name">
                        <h1>{artist.name}</h1>
                    </section>

                    <section className="artist-info-picture">
                        <img className="artist-picture" src={artist.artistPictureURL} alt={artist.name} />
                    </section>

                    <section className="artist-info-genre">
                        <h1>Genre</h1>
                        {artist.genre}
                    </section>

                    <section className="artist-info-bio">
                        <h1>About</h1>
                        {artist.about}
                    </section>

                    <section className="artist-info-link">
                        <a href={artist.listenLink}>Listen to {artist.name}</a>
                    </section>
                </div>
            )
            )}
        </div>
    )
}






