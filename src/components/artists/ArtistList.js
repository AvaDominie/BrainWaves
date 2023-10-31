import { useState, useEffect } from "react"
import { getAllArtists, likeArtist } from "../../services/userService"
import "./Artist.css"
import { ArtistSearchBar } from "../search/SearchBar"
import { AllArtists } from "./AllArtists"
import { useParams } from "react-router-dom"
import React from 'react';




export const AllArtistList = () => {

    const [allArtist, setAllArtist] = useState([])
    const [filteredArtists, setFilteredArtists] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const { userId } = useParams()


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


    const userIdNumber = parseInt(userId)

    const handleLike = (artist) => {

        const newArtistLiked = {
            userId: userIdNumber,
            artistId: artist.id,
        }
        likeArtist(newArtistLiked, userId)
    }





        return (
            <div className="allArtists">
                {/* Search Artist */}
                <h2>Search Artist</h2>
                <ArtistSearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />

                {/* Display all filtered Artists */}
                {filteredArtists.map(artist => {
                    return (
                        <div>
                        <AllArtists key={artist.id} artist={artist} />
                        <button 
                        className="like-btn"
                        onClick={() => handleLike(artist)}
                        >Add Artist</button>
                        <h1>_________________________________________________________________________________________________________________________________________________</h1>
                        </div>
                    )
                })}

            </div>
        )




    }






