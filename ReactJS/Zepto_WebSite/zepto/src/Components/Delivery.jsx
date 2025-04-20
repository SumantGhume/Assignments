import React from 'react'
import Process1 from '../assets/Images/process1.png'
import Process2 from '../assets/Images/process2.png'
import Process3 from '../assets/Images/process3.png'

const Delivery = () => {
  return (
    <div className="container px-4 py-5 delivery-process">
      <h2 className='text-center display-4 mt-4 fw-bold'>How Zepto Works</h2>
      <div className="row g-4 py-5 row-cols-1 row-cols-sm-2 row-cols-md-3">
        
        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process1} className='w-50 h-50' alt="Browse Items" />
          </div>
          <h5>Browse and Add to Cart</h5>
          <p>
            Explore groceries, snacks, and daily needs. Add your favorites to the cart with a tap.
          </p>
        </div>

        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process2} className='w-50 h-50' alt="Instant Dispatch" />
          </div>
          <h5>We Pack & Dispatch</h5>
          <p>
            Your order is packed in real-time from our nearest dark store. No delays, no hassle.
          </p>
        </div>

        <div className="col px-5 text-center">
          <div className="mb-3">
            <img src={Process3} className='w-50 h-50' alt="Instant Delivery" />
          </div>
          <h5>Delivered in 10 Minutes</h5>
          <p>
            Your items are at your doorstep in just 10 minutes. Fast, fresh, and reliable—every time.
          </p>
        </div>

      </div>
    </div>
  )
}

export default Delivery