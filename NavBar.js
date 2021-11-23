import React from 'react'
import PropTypes from 'prop-types'
const NavBar = (onClick) => {
    return (
        <div>
            <ul>
                <li><a href="btn">Home</a></li>
                <li><a href="btn">About</a></li>
                <li><a href="btn">Services</a></li>
                <li><a href="btn">Contact</a></li>
            </ul>
        </div>
    )
}

export default NavBar
NavBar.propTypes = {
    onClick: PropTypes.func.isRequired
}
