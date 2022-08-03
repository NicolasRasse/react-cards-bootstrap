import React from 'react'

function Card() {
  return (
    <div className='card'>
      <img src='../assets/image1.jpg' />
        <div className='card-body'>
          <h4 className='card-title'>My tittle</h4>
          <p className='card-text text-secondary'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tempor faucibus ex. Pellentesque nulla nisl, eleifend vel volutpat sed, gravida vitae elit. Maecenas vel nisl elementum, pulvinar mauris et, ultricies.</p>
        </div>
    </div>
  )
}

export default Card
