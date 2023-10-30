
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { UserProfile } from "../components/UserProfile/UserProfile"
import { AllArtistList } from "../components/artists/ArtistList"
import { AllUserList } from "../components/friends/UserList"
import { useState, useEffect } from "react"



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

                    <Route path="artists" element={<AllArtistList />} />

                    <Route path="friends" element={<AllUserList />} />

                </Route>
            </Routes>
        </>
    )
}


