



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
    return fetch(`http://localhost:8088/users/${currentUser}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(currentUser),
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


export const UnlikeArtist = (likedId) => {
    return fetch(`http://localhost:8088/artistsLiked/${likedId}`, {
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