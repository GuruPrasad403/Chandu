import Styles from './About.module.css'
import Stack from '@mui/material/Stack';
import CircularProgress from '@mui/material/CircularProgress';
import { Card } from '@mui/material';
const exprience =[{
    title:"Trendypaper",
    position:"Backend Operator",
    link:"https://trendypaper.com",
    date:{
        start:"15 June 20023",
        end:"30 April 2024",
    },
    points :["Efficiently list and describe new products on the website.", "Manage end-to-end order processing and fulfillment.","Collaborate cross-functionally to optimize backend operations."]
},
{title:"Conneqt Bussiness Solutions",
position:"CCE",
link:"https://www.conneqtcorp.com/",
date:{
    start:"11 June 20024",
    end:"Present",
},
points :["Customer Support & Issue Resolution.", "Sales & Upselling.","Efficient Problem Solving & Communication."]
}
]
function Exprience (){
    return (
        <>
            <div className='pl-[15px] sm:pr-[100px] sm:pl-[250px] flex flex-col justify-around sm:gap-20 sm:my-18 w-[98vw] h-[160vh] sm:h-[60vh]'>
                <div className="flex justify-between items-start">
                    <div className='flex flex-col   items-start  sm:py-2'>
                            <h2 className='sm:text-6xl text-4xl text-yellow-500 my-2'>
                             My
                            </h2>
                            <h1 className='sm:text-8xl text-5xl  relative text-white'>
                            <span className={Styles.parent}>Exp</span><span>erience</span>
                            </h1>
                    </div>
                </div>
                <div className='flex flex-col sm:flex-row justify-around gap-10 items-center sm:gap-2'>
                {
                        exprience.map((ele,i)=> <Cards title={ele.title} position={ele.position} start={ele.date.start} end={ele.date.end} points={ele.points} />)
                    }
                 
                </div>
            </div>
        </>
    )
}


const Cards=({title,position,start,end,points})=>{
    return(
        <div class="flex flex-col rounded-2xl w-92 sm:w-[700px] bg-[#212121] shadow-xl">
        
        <div class="flex flex-col w-full p-8">
        <div class="sm:text-3xl text-xl  font-bold uppercase  text-[#f4f8ff] sm:pb-2">{`${position} | ${title}`} </div>
        <p className='pb-5 text-yellow-500' >{start}  |  {end}</p>
        <div class=" sm:text-xl text-md  p-5 text-[#ffffff]">
            <ul className=" list-disc">
                {
                    points.map((ele,i)=> <li className='py-2' key={i}>{ele}</li>)
                }
            </ul>
        </div>
    </div>
</div>
    )
}

export default Exprience;

