import Button from '@mui/material/Button';
import Hero from '../assets/Chandu.jpeg';
import Styles from '../Components/About.module.css';
import Doc from '../assets/Guru Prasad G.pdf';

const info = [
    [
        {
            title: "Name",
            value: "Guruprasad G"
        },
        {
            title: "Phone",
            value: "+91 8951657957"
        },
        {
            title: "Experience",
            value: "1 year"
        }
    ],
    [
        {
            title: "Age",
            value: "20"
        },
        {
            title: "Address",
            value: "Vishal Nagar 8th cross"
        },
        {
            title: "Freelance",
            value: "Available"
        }
    ]
];

function About() {
    return (
        <div id='About' className="grid place-content-center border-solid border-5 px-2 h-[180vh] sm:h-[120vh] transition-all duration-500 ease-in-out">
            <div className="flex flex-col sm:flex-row sm:justify-center sm:items-center">
                <div className='sm:my-2 my-3 sm:h-full'>
                    <img 
                        src={Hero} 
                        alt="Guruprasad G" 
                        className='sm:w-[600px] w-96 h-[500px] sm:h-[800px] rounded-3xl shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105'
                    />
                </div>
                <div className='flex flex-col justify-start sm:px-10'>
                    <div className='flex flex-col justify-center items-start sm:py-2'>
                        <h2 className='sm:text-6xl text-4xl text-yellow-500 my-2'>
                            Discover
                        </h2>
                        <h1 className='sm:text-8xl text-5xl relative text-white'>
                            <span className={Styles.parent}>Abo</span><span>ut Me</span>
                        </h1>
                    </div>
                    <div className='sm:w-[800px] w-92 mt-10'>
                        <p className='text-justify px-4 text-md sm:text-2xl text-white' style={{ lineHeight: "30px" }}>
                            I am Guru Prasad G, a BCA student at Shree Medha Degree College with a strong background in web development
                            (ReactJS, Tailwind CSS, NodeJS) and experience in customer service and backend operations. I have worked at
                            Trendypaper.com and Conneqt Business Solutions, focusing on problem-solving and order management.
                            Fluent in multiple languages, I am adaptable, a quick learner, and committed to personal and professional growth.
                        </p>
                    </div>
                    <div className='flex sm:flex-row flex-col w-92 h-full justify-between sm:justify-between items-center my-10 border-solid sm:w-[800px]' style={{ border: "solid 2px #efa22d", borderRadius: "10px", backgroundColor: "#1b1b1b", padding: "20px" }}>
                        <div>
                            {
                                info[0].map((ele, index) => <Info key={index} title={ele.title} value={ele.value} />)
                            }
                        </div>
                        <div>
                            {
                                info[1].map((ele, index) => <Info key={index} title={ele.title} value={ele.value} />)
                            }
                        </div>
                    </div>
                    <div className='mb-5'>
                        <Button sx={{
                            background: "#efa22d",
                            '&:hover': {
                                background: "#d59c1c"
                            },
                            transition: "background 0.3s ease"
                        }} variant="contained">
                            <a href={Doc} download={true}> Download CV</a>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}

const Info = ({ title, value }) => {
    return (
        <div className='flex flex-row w-72 justify-between sm:justify-between items-center sm:w-[400px] p-2 sm:px-6'>
            <h1 className='text-md sm:text-xl text-white my-1 text-right'>{title} :</h1>
            <h1 className='text-md sm:text-xl text-white my-1 text-right'>{value}</h1>
        </div>
    );
}

export default About;
