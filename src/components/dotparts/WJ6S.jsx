import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function WJ6S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/hydro/hwj6/SAB.png"),
        require("../../assets/images/hydro/hwj6/SAA.png"),
        require("../../assets/images/hydro/hwj6/SAS.png"),
    ];

    const slideTexts = [
        {
            conjet: "STONEAGE BANSHEE",
            paragraph: "Lorem ipsum dolor sit amet, consectetur adipiscing elit diam quam nisi ut pellentesque nec cursus habitant nec lobortis ac placerat non, urna tempus luctus lobortis sed dui nisl.",
            listItems: [
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            ]
        },
        {
            conjet: "STONEAGE AUTOBOX 3L",
            paragraph: "Slide 2: Another description for the second slide.",
            listItems: [
                "Second slide list item 1.",
                "Second slide list item 2.",
                "Second slide list item 3.",
                "Second slide list item 4.",
            ]
        },
        {
            conjet: "STONEAGE SENTINEL",
            paragraph: "Slide 3: Yet another description for the third slide.",
            listItems: [
                "Third slide list item 1.",
                "Third slide list item 2.",
                "Third slide list item 3.",
                "Third slide list item 4.",
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
                <div className="column slider-column">
                    <div className='slider-container'>
                        <div className="slider">
                            <p className='barcode conjet-spacing'>{slideTexts[currentSlide].conjet}</p>
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
                <div className="column text-column rajdhani-semibold">
                    <p className='list-paragraph-3'>
                        {slideTexts[currentSlide].paragraph.split('\n').map((text, index) => (
                            <React.Fragment key={index}>
                                {text}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <ul>
                        {slideTexts[currentSlide].listItems.map((item, index) => (
                            <li key={index} className='bullet-list left-spacing-3'>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}