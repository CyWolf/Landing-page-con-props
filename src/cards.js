import React from 'react'
import firstimage from './assets/images/business_jet-1366x768.jpg'
import secondimage from './assets/images/cropped-1920-1080-1072748.jpg'
import thirdimage from './assets/images/cropped-Business-HQ.jpg'
import fourthimage from './assets/images/Fingers_Hands_Business_506994_1366x768.jpg'

function Cards() {
    return (
        <div className='d-flex justify-content-between'>
            <div className="card" style={{width: '18rem'}}>
                <img src={firstimage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Travels</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src={secondimage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Investments</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src={thirdimage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Real state</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div className="card" style={{width: '18rem'}}>
                <img src={fourthimage} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Insurance policy</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    )
}

export default Cards