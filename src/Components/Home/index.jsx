/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import './style.css';
import { BiPlayCircle } from 'react-icons/bi';
import Image from '../../Assets/Images/hero-img.png';

export default function Home() {
  return (
    <>
      <section id="hero" className="hero d-flex align-items-center section-bg">
        <div className="container mt-5">
          <div className="row justify-content-between gy-5">
            <div className="col-lg-5 order-2 order-lg-1 d-flex flex-column justify-content-center align-items-center align-items-lg-start text-center text-lg-start">
              <h2 data-aos="fade-up">Enjoy Your Healthy<br />Delicious Food</h2>
              <p data-aos="fade-up" data-aos-delay={100}>Sed autem laudantium dolores. Voluptatem itaque ea consequatur eveniet. Eum quas beatae cumque eum quaerat.</p>
              <div className="d-flex" data-aos="fade-up" data-aos-delay={200}>
                <a href="#book-a-table" className="btn-book-a-table">Book a Table</a>
                <a href="https://www.youtube.com/watch?v=LXb3EKWsInQ" className="glightbox btn-watch-video d-flex align-items-center">
                  <span><BiPlayCircle className='i' />Watch Video</span>
                </a>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2 text-center text-lg-start">
              <img src={Image} className="img-fluid" alt="Hero Image" data-aos="zoom-out" data-aos-delay={300} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
