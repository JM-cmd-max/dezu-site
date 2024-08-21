import React, { useState, useEffect, useContext } from 'react';
import '../../styles/styles.css';
import PageContext from '../../context/PageContext';

export default function CT1S() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const { page, setPage } = useContext(PageContext);

    const slides = [
        require("../../assets/images/cleaning/ct1/ct14.png"),
        require("../../assets/images/cleaning/ct1/ct14.png"),
        require("../../assets/images/cleaning/ct1/ct14.png"),
    ];

    const slideTexts = [
        {
            conjet: "KLEN 2205",
            paragraph: "Designed to restore shine and remove tough stains from stainless steel surfaces. Non-abrasive, quick-drying formula ensures a streak-free finish while protecting against fingerprints.",
            listItems: [
                "Polishes Stainless Steel: Restores shine and luster effectively",
                "Removes Stains: Targets and eliminates tough stains easily",
                "Quick Drying: Ensures a rapid, streak-free finish",
                "Versatile Use: Effective on various stainless steel surfaces",
            ]
        },
        {
            conjet: "KLEN 1101",
            paragraph: "Effectively restores and revitalizes various industrial surfaces, delivering high performance in challenging conditions. Its non-abrasive, versatile formula ensures easy application and a durable finish.",
            listItems: [
                "Restores Surfaces: Renovates and revitalizes industrial surfaces effectively",
                "High Performance: Delivers strong results in tough conditions",
                "Non-Abrasive Formula: Cleans without damaging or scratching surfaces",
                "Durable Finish: Provides long-lasting results and protection",
            ]
        },
        {
            conjet: "KLEN 897",
            paragraph: "Engineered to tackle tough mineral deposits and scale buildup with powerful, fast-acting results. Its heavy-duty formula is safe on equipment and easy to rinse, ensuring thorough cleaning without residue or corrosion. ",
            listItems: [
                "Powerful Descaling: Removes tough mineral deposits and buildup",
                "Fast Acting: Works quickly to dissolve scale efficiently",
                "Easy Rinsing: Rinses off easily, leaving no residue",
                "Heavy Duty Formula: Designed for industrial-strength descaling tasks",
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
                            <li key={index} className='bullet-list '>{item}</li>
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
