import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

// Left testimonial cards data (right side column 1)
const leftTestimonials = [
  {
    text: "Buying a scooter was out of budget for me. Renting from HCD gave me the freedom to start working right away without the upfront cost. It’s been a life-saver.",
    author: "Farhan, Delivery Rider",
  },
  {
    text: "I often need to move boxes and supplies across the city. The cargo space and sturdy build are perfect. It feels like this scooter was designed for people like me.",
    author: "Anita, Shop Owner",
  },
];

// Right testimonial cards data (right side column 2)
const rightTestimonials = [
  {
    text: "I use the scooter for my daily runs — picking up groceries, dropping parcels, and short trips. It’s strong, simple, and doesn’t let me down.",
    author: "Neha, Student",
  },
  {
    text: "Managing multiple riders is tough, but HCD scooters are reliable and easy to maintain. The double battery option has really improved our delivery turnaround.",
    author: "Karan, Logistics Supervisor",
  },
];

export default function DualTestimonialsWithLogo() {
  const leftRef = useRef(null);
  const rightRef = useRef(null);

  useEffect(() => {
    const leftSlide = leftRef.current;
    const rightSlide = rightRef.current;

    if (!leftSlide || !rightSlide) return;

    const leftHeight = leftSlide.scrollHeight / 2;
    const rightHeight = rightSlide.scrollHeight / 2;

    const leftTween = gsap.to(leftSlide, {
      y: -leftHeight,
      repeat: -1,
      duration: 15,
      ease: "linear",
      modifiers: {
        y: (y) => `${parseFloat(y) % -leftHeight}px`,
      },
    });

    const rightTween = gsap.to(rightSlide, {
      y: -rightHeight,
      repeat: -1,
      duration: 15,
      ease: "linear",
      modifiers: {
        y: (y) => `${parseFloat(y) % -rightHeight}px`,
      },
    });

    return () => {
      leftTween.kill();
      rightTween.kill();
    };
  }, []);

  const renderCards = (cards) => (
    <>
      {[...cards, ...cards].map((card, idx) => (
        <div
          key={idx}
          style={{
            background: "white",
            border: "1px solid #ccc",
            borderRadius: 16,
            margin: "28px 20px",
            padding: 25,
            boxShadow: "0 0 4px #ededed",
            minWidth: 250,
            maxWidth: 400,
            fontFamily: "'Roboto', sans-serif",
            color: "#444",
            fontSize: 17,
            letterSpacing: ".2px",
            lineHeight: 1.5,
            textAlign: "left",
          }}
        >
          <p>{card.text}</p>
          <p style={{ fontWeight: 700, marginTop: 12 }}>{card.author}</p>
        </div>
      ))}
    </>
  );

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        minHeight: "100vh",
        backgroundColor: "white",
        fontFamily: "'Roboto', sans-serif",
        padding: "40x",
        alignItems: "start",
        justifyContent: "flex-start",
        gap: "300px",
        flexWrap: "nowrap",
      }}
    >
      {/* Left Section (logo + text) */}
      <div
        style={{
          flex: "0 0 350px",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "start",
          paddingLeft: '10px',
          maxWidth: 350,
          minWidth: 280,
        }}
      >
        <img
          src="/user.png"
          alt="User logo"
          style={{
            width: "80%",
            maxWidth: 400,
            height: "auto",
            marginBottom: 10,
            objectFit: "contain",
          }}
        />
        <h2
          style={{
            fontWeight: 900,
            fontSize: "2.4rem",
            lineHeight: "3rem",
            color: "#000",
            textAlign: "left",
            marginTop: 50,
          }}
        >
          What Our Users <br /> Say About Us
        </h2>
      </div>

      {/* Right Section (two testimonial columns) */}
      <div
        style={{
          flex: "1 1 700px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-end",
          gap: "10px",
          maxWidth: 800,
        }}
      >
        {/* Left Testimonials */}
        <div
          style={{
            flex: "1 1 320px",
            height: 650,
            maxWidth: 400,
            overflow: "hidden",
            borderRadius: 14,
          
          }}
        >
          <div
            ref={leftRef}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {renderCards(leftTestimonials)}
          </div>
        </div>

        {/* Right Testimonials */}
        <div
          style={{
            flex: "1 1 320px",
            height: 650,
            maxWidth: 400,
            overflow: "hidden",
            borderRadius: 14,
            
            
          }}
        >
          <div
            ref={rightRef}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            {renderCards(rightTestimonials)}
          </div>
        </div>
      </div>
    </div>
  );
}
