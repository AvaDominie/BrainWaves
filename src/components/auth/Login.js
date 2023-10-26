

import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Login.css"
import { getUserByEmail } from "../../services/userService"

export const Login = () => {
    const [email, setEmail] = useState("avadominie@gmail.com")
    const [password, setPassword] = useState("Bigmop")
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        getUserByEmail(email).then((foundUsers) => {
            if (foundUsers.length === 1) {
                const user = foundUsers[0]
                localStorage.setItem(
                    "brainWave_user",
                    JSON.stringify({
                        id: user.id,
                        user: user.name,
                    })
                    )
                    navigate(`/${user.id}`)

            } else {
                window.alert("Invalid login")
            }
        })
    }

    return (
        <main className="container-login">
            <section>
                <form className="form-login" onSubmit={handleLogin}>
                    <h1>BrainWaves</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <div className="form-group">
                            <input
                                type="email"
                                value={email}
                                onChange={(evt) => setEmail(evt.target.value)}
                                className="form-control"
                                placeholder="Email address"
                                required
                                autoFocus
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <input
                                type="password"
                                value={password}
                                onChange={(evt) => setPassword(evt.target.value)}
                                className="form-control"
                                placeholder="Password"
                                required
                                autoFocus
                            />
                        </div>
                    </fieldset>
                    <fieldset>
                        <div className="form-group">
                            <button className="login-btn btn-info" type="submit">
                                Sign in
                            </button>
                        </div>
                    </fieldset>
                </form>
            </section>
            <section>
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
