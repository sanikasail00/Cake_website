
import React from 'react';
import '../styles/CakeGallery.css';

function CakeGallery() {
  const cakes = [
    { id: 1, name: 'Chocolate Cake', image: 'https://thenovicechefblog.com/wp-content/uploads/2013/08/Chocolate-and-Peanut-Butter-Dream-Cake-6-sm.jpg' },
    { id: 2, name: 'Vanilla Cake', image: 'https://bakerbynature.com/wp-content/uploads/2022/04/Golden-Vanilla-Cake-with-Vanilla-Frosting0-19.jpg' },
    { id: 3, name: 'Strawberry Cake', image: 'https://www.wyseguide.com/wp-content/uploads/2016/06/Strawberry-Shortcake-Cake4.jpg' }
  ];

  return (
    <section id="gallery" className="cake-gallery">
      <h2>Our Cake Gallery</h2>
      <div className="gallery-grid">
        {cakes.map((cake) => (
          <div key={cake.id} className="gallery-item">
            <img src={cake.image} alt={cake.name} />
            <p>{cake.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CakeGallery;
