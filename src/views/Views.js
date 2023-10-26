
import { Outlet, Route, Routes } from "react-router-dom"
import { NavBar } from "../components/nav/NavBar"
import { UserProfile } from "../components/UserProfile/UserProfile"
import { AllArtistList } from "../components/artists/ArtistList"
import { AllUserList } from "../components/friends/UserList"



export const Views = ({ currentUser }) => {
    return (
        <>
            <Routes>
                <Route path="*"
                    element={
                        <>
                            <NavBar />
                            <Outlet />
                        </>
                    }
                >

                    <Route path="profile" element={<UserProfile />} />

                    <Route path="artists" element={<AllArtistList />} />

                    <Route path="friends" element={<AllUserList />} />

                </Route>
            </Routes>
        </>
    )
}


