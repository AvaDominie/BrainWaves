
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { UserProfile } from "../components/UserProfile/UserProfile"
import { AllArtistList } from "../components/artists/ArtistList"
import { AllUserList } from "../components/friends/UserList"
import { useState, useEffect } from "react"
import { AboutInfo } from "../components/about/About"
import { EditProfile } from "../components/UserProfile/EditProfile"
import { ArtistsDetails } from "../components/artists/ArtistDetails"
import { UsersDetails } from "../components/friends/UserDetails"
import { CreateArtist } from "../components/artists/CreateNewArtistForm"



export const Views = () => {
    const [currentUser, setCurrentUser] = useState({})
    
    useEffect(() => {
        const user = JSON.parse(localStorage.getItem("brainWave_user"))
        setCurrentUser(user)
    

    }, [])

    

    return (
        <>
            <Routes>
                <Route path="*"
                    element={
                        <>
                            <NavBar currentUser={currentUser}/>
                            <Outlet />
                        </>
                    }
                >

                    <Route path="profile/:userId" element={<UserProfile />} />

                    <Route path="edit-profile/:userId" element={<EditProfile />} />

                    <Route path="artists/:userId" element={<AllArtistList />} />
                    
                    <Route path="artists-details/:artistId" element={<ArtistsDetails />} />

                    <Route path="artists-create-form/:userId" element={<CreateArtist />} />

                    <Route path="friends/:userId" element={<AllUserList />} />

                    <Route path="users-details/:userId" element={<UsersDetails />} />

                    <Route path="about" element={<AboutInfo />} />

                </Route>
            </Routes>
        </>
    )
}


