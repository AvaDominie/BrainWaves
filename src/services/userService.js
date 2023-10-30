



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

