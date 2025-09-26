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
      flexDirection: 'row',
      minHeight: '100vh',
      backgroundColor: 'white',
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
    }}>
      {/* Left Section - Logo and Text */}
      <div style={{
        flex: '1 1 300px',
        textAlign: 'center',
        paddingRight: '40px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '400px',
        minWidth: '280px',
      }}>
        <img
          src="/user.png"
          alt="User logo"
          style={{ width: '80%', maxWidth: 300, height: 'auto', marginBottom: 20, objectFit: 'contain' }}
        />
        <h2 style={{
          fontWeight: '900',
          fontSize: '2.8rem',
          lineHeight: '3rem',
          color: '#000',
          textAlign: 'center',
        }}>
          What Our  Users <br /> Say About Us
        </h2>
      </div>

      {/* Right Section - Testimonials with vertical infinite GSAP scroll */}
      <div style={{
        flex: '2 1 320px',
        height: 320,
        maxWidth: 600,
        overflow: 'hidden',
        borderRadius: 14,
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
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
                width: '100%',
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
                width: '100%',
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
