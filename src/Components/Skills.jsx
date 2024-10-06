import React, { useEffect, useState } from 'react';
import img from '../assets/Hero.jpeg';
import Styles from './About.module.css';
import ReactPNG from '../assets/Skills/React.png';
import NodePNG from '../assets/Skills/Node.png';
import TailWind from '../assets/Skills/Tailwind.png';
import Express from '../assets/Skills/Express.png';

const skills = [
    {
        title: "React JS",
        src: ReactPNG,
        percentage: "70%",
    },
    {
        title: "Node JS",
        src: NodePNG,
        percentage: "65%",
    },
    {
        title: "Tailwind CSS",
        src: TailWind,
        percentage: "80%",
    },
    {
        title: "Express JS",
        src: Express,
        percentage: "60%",
    },
];

function Skill() {
    const [visible, setVisible] = useState(false);

    const handleScroll = () => {
        const skillsSection = document.getElementById("Skills");
        const rect = skillsSection.getBoundingClientRect();
        // Check if the Skills section is in the viewport
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            setVisible(true);
            window.removeEventListener('scroll', handleScroll); // Remove event listener after visibility is set
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div id="Skills" className='pl-[15px] sm:pr-[100px] sm:pl-[250px] flex flex-col justify-around sm:gap-20 mt-52 sm:my-48 w-[98vw] h-[150vh] sm:h-[70vh]'>
            <div className="flex justify-between items-start"> 
                <div className='flex flex-col items-start sm:py-2'>
                    <h2 className='sm:text-6xl text-4xl text-yellow-500 my-2'>
                        About
                    </h2>
                    <h1 className='sm:text-8xl text-5xl relative text-white'>
                        <span className={Styles.parent}>MY </span><span>Skills </span>
                    </h1>
                </div>
            </div>
            <div className='flex flex-row flex-wrap sm:flex-nowrap justify-around items-center sm:w-full h-full'>
                {
                    skills.map((ele, i) => {
                        return (
                            <Image
                                title={ele.title}
                                key={i}
                                src={ele.src}
                                percentage={ele.percentage}
                                isVisible={visible}
                            />
                        );
                    })
                }
            </div>
        </div>
    );
}

const Image = ({ title, src, percentage, isVisible }) => {
    return (
        <div className={`flex flex-col justify-center items-center gap-3 sm:gap-5 ${isVisible ? Styles.skillVisible : ''}`}>
            <div className={`${Styles.skillEffect} w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] relative`}>
                <img
                    className={`${
                        title === "Tailwind" ? "object-contain" : "object-cover"
                    } bg-transparent w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] rounded-full transition-all duration-300 ease-in-out`}
                    src={src}
                    alt={title}
                />
                {/* Percentage Text */}
                <div className={`${Styles.percentage}`}>
                    {percentage}
                </div>
            </div>
            <div>
                <h1 className='sm:text-4xl text-xl text-white'>
                    {title}
                </h1>
            </div>
        </div>
    );
}

export default Skill;
