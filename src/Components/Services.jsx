import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from '../assets/Web.jpg'
import UIUX from '../assets/ux-ui.webp'
import { useTheme } from '@mui/material/styles';
import Styles from './About.module.css';

const services = [{
  name: "Web Development",
  img: img,
  dis: "I build responsive, user-friendly websites using ReactJS and Tailwind CSS, with backend experience in NodeJS. My focus is on clean code, performance, and seamless user experiences."
}, {
  name: "UI & UX",
  img: UIUX,
  dis: "I design clean, intuitive interfaces focused on usability and user experience, creating seamless, engaging interactions."
}];

function Services() {
  const theme = useTheme();
  return (
    <div id="Services" className='flex flex-col pl-[15px] sm:pl-[250px] sm:my-48 w-[98vw] h-[180vh] sm:h-[70vh]'>
      <div className="flex justify-start items-start">
        <div className='flex flex-col items-start sm:py-2'>
          <h2 className='sm:text-6xl text-4xl text-yellow-500 my-2'>
            What I Do 
          </h2>
          <h1 className='sm:text-8xl text-5xl relative text-white'>
            <span className={Styles.parent}>MY </span><span>Services </span>
          </h1>
        </div>
      </div>
      <div className='my-28 flex sm:flex-row justify-around items-center flex-col'>
        {services.map((service, index) => (
          <MediaCard
            key={index}
            theme={theme}
            className="w-[400px]"
            name={service.name}
            wed={service.img}
            dis={service.dis}
          />
        ))}
      </div>
    </div>
  );
}

function MediaCard({ name, dis, wed, theme }) {
  return (
    <Card sx={{
      width: '500px',
      height: "430px",
      marginRight: "10px",
      backgroundColor: '#212121',
      borderRadius: '3',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: '530px',
        marginBottom: 12,
      }
    }}>
      <CardMedia
        sx={{ height: 250 }}
        image={wed}
        title={name}
      />
      <CardContent sx={{ color: "#fff" }}>
        <Typography gutterBottom variant="h4" className="text-5xl" component="div">
          {name}
        </Typography>
        <Typography variant="p" sx={{ color: '#fff' }}>
          {dis}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default Services;
