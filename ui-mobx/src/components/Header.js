import React from 'react'
import {
    Link
} from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav mx-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/cart" className="nav-link">Cart</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/transaction" className="nav-link">Transaction</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">Profile</Link>
                        </li>
                    </ul>
                    <button className="btn btn-sm btn-info">LOGIN</button>
                </div>
            </nav>
        </div>
    )
}

export default Header
