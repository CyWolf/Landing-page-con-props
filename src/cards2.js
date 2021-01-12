import React from 'react'
import { cardsData } from './cardsdata'

const Cards = () => {
    console.log(cardsData)
    return (
        <div className='d-flex justify-content-between'>
            {cardsData.map((item) => {
                return (
                        <div className="card" style={{ width: '18rem' }}>
                            <img src={item.imagen} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Marca: {item.marca}</h5>
                                <p className="card-text">Modelo: {item.modelo}</p>
                                <p className="card-text">Color: {item.color}</p>
                                <p className="card-text">Motor: {item.motor}</p>
                                <a href="#" className="btn btn-primary">{item.comprar}</a>
                            </div>
                        </div>
                )
            })}
        </div>
    )
}

export default Cards