import React, { useEffect, useState } from 'react';
import "./About.css";

const About = () => {
    const definedtext = "Hello there! I'm Kanthuri Reddysai, an aspiring Full stack developer with a passion for crafting innovative web solutions and a strong desire to learn and grow in the ever-evolving world of technology";

    const [textArray, setTextArray] = useState([]);

    useEffect(() => {
        console.log("useEffect is triggered");
        let currentIndex = 0;
        let uniqueId = setInterval(() => {
            if (currentIndex < definedtext.length) {
                setTextArray(prevArray => [...prevArray, definedtext[currentIndex]]);
                currentIndex++;
            } else {
                clearInterval(uniqueId);
                // Remove any occurrences of undefined from the array
                setTextArray(prevArray => prevArray.filter(item => item !== undefined));
            }
        }, 100);

        return () => {
            clearInterval(uniqueId);
        };
    }, []); // Empty dependency array

    // Join the array elements into a string
    const text = textArray.join('');

    return (
        <div className='about-con'>
            <div>

            </div>
            <div>
                <h2>{text}</h2>
            </div>
        </div>
    );
};

export default About;
