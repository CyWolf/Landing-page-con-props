import React from 'react'

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark bg-dark nav-text">
            <div className='container'>
                <div className='d-flex '>
                    <h5>Start Bootstrap</h5>
                </div>
                <div className='d-flex div-nav-right'>
                    <a href='#'><p className='mr-3'>{props.home}</p></a>
                    <a href='#'><p className='mr-3'>{props.about}</p></a>
                    <a href='#'><p className='mr-3'>{props.services}</p></a>
                    <a href='#'><p>{props.contact}</p></a>
                </div>
            </div>
        </nav>
    )
}

export default Navbar