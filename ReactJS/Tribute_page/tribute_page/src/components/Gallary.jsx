import React from 'react';


const Gallery = () => {
  return (
    <>
    
    <section className="container my-5">
    <h2>Gallery</h2>
    <div className="row">
      <div className="col-md-4">
        <img src="https://5.imimg.com/data5/ANDROID/Default/2023/5/311676754/UJ/AI/OR/19186960/product-jpeg-500x500.jpg" className="img-fluid rounded shadow" alt="Statue" />
      </div>
      <div className="col-md-4">
        <img src="https://in.musafir.com/uploads/Rajgad_be1a83a52e.webp" className="img-fluid rounded shadow" alt="Fort" />
      </div>
      <div className="col-md-4">
        <img src="https://images.news18.com/ibnlive/uploads/2022/11/shivaji-talwar.jpeg" className="img-fluid rounded shadow" alt="Sword" />
      </div>
    </div>
  </section>
    
    </>
  );
};

export default Gallery;
