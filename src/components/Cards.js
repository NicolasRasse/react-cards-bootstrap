import React from 'react'
import Card from './Card'
import '../style/cards.css'
import image1 from '../assets/image1.jpg'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.jpg'

const cards = [
    {
        id: 1,
        title: 'Fazt Web',
        imagen: image1,
        url: 'https://www.google.com.ar'
    },
    {
        id: 2,
        title: 'Fazt Blog',
        imagen: image2,
        url: 'https://www.google.com.ar'
    },
    {
        id: 3,
        title: 'Fazt Youtube',
        imagen: image3,
        url: 'https://www.google.com.ar'
    }
]

const Cards = () => {
  return (
    <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='row'>
            {
                cards.map(card =>(
                    <div className='col-md-4' key={card.id}>
                        <Card title={card.title} imageSource={card.imagen} url={card.url}/>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Cards
