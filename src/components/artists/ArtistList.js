import { useState, useEffect } from "react"
import { getAllArtists } from "../../services/userService"
import "./Artist.css"
import { ArtistSearchBar } from "../search/SearchBar"
import { AllArtists } from "./AllArtists"




export const AllArtistList = () => {

    const [allArtist, setAllArtist] = useState([])
    const [filteredArtists, setFilteredArtists] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getAllArtists().then((data) => {
            setAllArtist(data)
            
        })
    }, [])


    useEffect(() => {
        const foundArtist = allArtist.filter(artist => 
            artist.name.toLowerCase().includes(searchTerm.toLowerCase())
            )
            setFilteredArtists(foundArtist)
            
    }, [allArtist, searchTerm])



    return (
        <div className="allArtists">
            {/* Search Artist */}
            <h2>Search Artist</h2>
            <ArtistSearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

            {/* Display all filtered Artists */}
            {filteredArtists.map ( artist => {
                return (
                    <AllArtists key={artist.id} artist={artist} />
                )
            })}

            {/* Display add new artist button */}

        </div>
    )




}






