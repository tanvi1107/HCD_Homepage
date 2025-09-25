import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const testimonialImages = [
  '/Frame 54.png',
  '/Frame 50.png',
];

const TestimonialsPage = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    // Duplicate height for seamless infinite vertical scroll
    const totalScrollHeight = slider.scrollHeight / 2;

    gsap.to(slider, {
      y: -totalScrollHeight,
      duration: 15,
      repeat: -1,
      ease: 'linear',
    });
  }, []);

  return (
    <div style={{
      display: 'flex',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      alignItems: 'center',
    }}>
      {/* Left Section - Logo and Text */}
      <div style={{
        flex: 1,
        textAlign: 'center',
        paddingRight: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
      }}>
        <img
          src="/user.png"
          alt="User logo"
          style={{ width: 300, height: 300, marginBottom: 20, objectFit: 'contain' }}
        />
        <h2 style={{
          fontWeight: '900',
          fontSize: '2.8rem',
          lineHeight: '3rem',
          color: '#000',
        }}>
          What Our  Users <br/> Say About Us
        </h2>
      </div>

      {/* Right Section - Testimonials with vertical infinite GSAP scroll */}
      <div style={{
        flex: 2,
        height: '320px', // container height according to recording
        overflow: 'hidden',
        borderRadius: '14px',
        boxShadow: '0 2px 8px',
      }}>
        <div
          ref={sliderRef}
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* Actual testimonial images */}
          {testimonialImages.map((imgSrc, idx) => (
            <img
              key={`first-${idx}`}
              src={imgSrc}
              alt={`Testimonial ${idx + 1}`}
              style={{
                width: '50%',
                objectFit: 'cover',
                padding: '12px 20px',
              }}
            />
          ))}
          {/* Duplicate for infinite scroll effect */}
          {testimonialImages.map((imgSrc, idx) => (
            <img
              key={`second-${idx}`}
              src={imgSrc}
              alt={`Testimonial duplicate ${idx + 1}`}
              style={{
                width: '50%',
                objectFit: 'cover',
                padding: '12px 20px',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsPage;
