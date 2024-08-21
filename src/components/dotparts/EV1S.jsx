import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function EV1S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/environmental/envr1/evs1.png"),
        require("../../assets/images/environmental/envr1/evs2.png"),
        require("../../assets/images/environmental/envr1/evs3.png"),
    ];

    const slideTexts = [
        {
            conjet: "Leg Cup Seals",
            paragraph: "Designed to provide effective leak prevention and secure sealing, utilizing durable materials to resist wear and environmental stress. Their easy installation and versatile fit make them suitable for various applications, while their high resistance ensures long-lasting performance.",
            listItems: [
                "Leak Prevention: Ensures secure, leak-proof sealing",
                "Durable Material: Resists wear and environmental stress",
                "Versatile Fit: Adapts to various leg sizes and shapes",
                "High Resistance: Withstands chemicals and temperature fluctuations",
            ]
        },
        {
            conjet: "Flexi-Composite Hose",
            paragraph: "Engineered for flexibility and durability, making it ideal for diverse applications where bending and conforming are required. Its lightweight construction and high pressure resistance ensure reliable performance under challenging conditions, while the smooth interior promotes efficient flow.",
            listItems: [
                "Flexible Design: Easily bends and conforms to various configurations",
                "High Durability: Resists abrasion, chemicals, and extreme temperatures",
                "High Pressure Resistance: Handles demanding pressure conditions effectively",
                "Easy Installation: Simple to connect and integrate into systems",
            ]
        },
        {
            conjet: "Leg Sock",
            paragraph: "Offer protective coverage and durability, shielding legs from damage and wear with their robust fabric. The adjustable fit and breathable material ensure comfort and versatility for various applications. ",
            listItems: [
                "Protective Coverage: Shields legs from damage and wear",
                "Durable Fabric: Resists tears and abrasions for longevity",
                "Adjustable Fit: Accommodates various leg sizes securely",
                "Cost-Effective: Provides high-quality protection at an affordable price",
            ]
        },
    ];

    const handleDotClick = (index) => {
        setCurrentSlide(index);
    };

    useEffect(() => {
        setPage(() => "");
    }, [setPage]);

    return (
        <div className="App">
            <div className="section section-bg">
                <div className="column rajdhani-semibold">
                    <p className='list-paragraph-heading'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list'>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="column">
                    <div className=''>
                        <div className="">
                            <p className='barcode'>{slideTexts[currentSlide].conjet}</p>
                            {slides.map((image, index) => (
                                <div
                                    key={index}
                                    className={`slide ${index === currentSlide ? 'active' : ''}`}
                                >
                                    <img src={image} alt={`Slide ${index + 1}`} />
                                </div>
                            ))}
                        </div>
                        <div className="slider-dots">
                            {slides.map((_, index) => (
                                <React.Fragment key={index}>
                                    <span
                                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                                        onClick={() => handleDotClick(index)}
                                    ></span>
                                    {index < slides.length - 1 && <div className="line"></div>}
                                </React.Fragment>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
