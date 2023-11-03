



export const getUserByEmail = (email) => {
    return fetch(`http://localhost:8088/users?email=${email}`).then((res) =>
        res.json()
    )
}

export const getUser = (userId) => {
    return fetch(`http://localhost:8088/users?id=${userId}`).then((res) =>
        res.json()
    )
}

export const createUser = (customer) => {
    return fetch("http://localhost:8088/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(customer),
    }).then((res) => res.json())
}

export const updateUser = (currentUser) => {
    return fetch(`http://localhost:8088/users/${currentUser.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
    })
}

export const updateArtist = (artistId, updateArtist) => {
    return fetch(`http://localhost:8088/artists/${artistId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(updateArtist),
    })
} 


export const getAllArtists = () => {
    return fetch(`http://localhost:8088/artists`).then((res) =>
        res.json()
    )
}


export const getAllUsers = () => {
    return fetch(`http://localhost:8088/users`).then((res) =>
        res.json()
    )
}


export const UserLikedArtist = (id) => {
    return fetch(`http://localhost:8088/artistsLiked/?userId=${id}&_expand=artist`).then((res) =>
        res.json()
    )
}

// I need to get the friends id so I can delete it later
export const UserAddedFriend = (id) => {
    return fetch(`http://localhost:8088/friends/?userId=${id}`).then((res) =>
    res.json()
    )
}

export const ArtistsLiked = (id) => {
    return fetch(`http://localhost:8088/artistsLiked/?userId=${id}`).then((res) =>
        res.json()
    )
}

export const likeArtist = (id) => {
    return fetch(`http://localhost:8088/artistsLiked/?userId=${id}&_expand=artist`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
    }).then((res) => res.json())
}


export const UnlikeArtist = (artistLikedId) => {
    return fetch(`http://localhost:8088/artistsLiked/${artistLikedId}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json())
}



export const GetArtistById = (id) => {
    return fetch(`http://localhost:8088/artists?id=${id}`).then((res) =>
    res.json()
    )
}

export const friendUser = (id) => {
    return fetch(`http://localhost:8088/friends/?userId=${id}&_expand=user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id),
    }).then((res) => res.json())
}


export const unfriendUser = (id) => {
    console.log("this is the id", id)
    //I need to access the friendsId information to be able to delete it
    // not sure how to use friendsId number as the user
    // I'm able to friend with no problem just the unfriend is the problem
    return fetch(`http://localhost:8088/friends/${id}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
        },
    }).then((res) => res.json())
}



export const createNewArtist = (artist) => {
    return fetch(`http://localhost:8088/artists`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(artist),
    }).then((res) => res.json())

}






