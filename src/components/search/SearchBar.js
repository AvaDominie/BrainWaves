






export const UserSearchBar = ({ setSearchTerm, searchTerm }) => {

    
    return ( 
        <div>
                <div className="search-term">
                    <input
                    type="text"
                    placeholder="Search Users"
                    className="search-users"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    ></input>
                </div>
            </div>
    )
}


export const ArtistSearchBar = ({ setSearchTerm, searchTerm }) => {

    
    return ( 
        <div>
                <div className="search-term">
                    <input
                    type="text"
                    placeholder="Search Artists"
                    className="search-artists"
                    value={searchTerm}
                    onChange={(event) => {
                        setSearchTerm(event.target.value)
                    }}
                    ></input>
                </div>
            </div>
    )
}
