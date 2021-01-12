import React from 'react'
import jumbotroncontent from './jumbotroncontent'

function Jumbotron() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">{jumbotroncontent.title}</h1>
            <p className="lead">{jumbotroncontent.header}</p>
            <hr className="my-4" />
            <p>{jumbotroncontent.content}</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">{jumbotroncontent.button}</a>
        </div>
    )
}

export default Jumbotron