import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import img from '../assets/EduPro.png'
import Devfinder from '../assets/Github.png'
import ImageHover from '../assets/ImageHover.png'
import { useTheme } from '@mui/material/styles';
import Styles from './About.module.css';
import { Button, CardActions } from '@mui/material';

const services = [{
  name: "Edusity",
  img: img,
  link: "https://school-ten-taupe.vercel.app/",
  dis: "Edusity is a responsive React-based school webpage with a dynamic Hero section, program details, authentic testimonials, an engaging About Us section, and a Contact area, offering a seamless user experience."
}, {
  name: "Dev Finder",
  img: Devfinder,
  link: "https://guruprasad403.github.io/Github/",
  dis: "Dev Finder, built with React, lets users search GitHub profiles and view key details like username, bio, repositories, followers, and profile links, offering a fast and user-friendly developer overview."
}, {
  name: "Snap & Shift",
  img: ImageHover,
  link: "https://guruprasad403.github.io/imagePopUpOnMouseOver/",
  dis: "Designed an interactive Image Hover Effect with HTML, CSS, and JavaScript, displaying a secondary image on hover, often used in e-commerce to enhance user experience with dynamic product previews."
}];

function Projects() {
  const theme = useTheme();
  return (
    <div id="Project" className='flex flex-col pl-[15px] sm:pl-[250px] sm:my-48 w-[98vw] h-[210vh] sm:h-[70vh]'>
      <div className="flex justify-start items-start">
        <div className='flex flex-col items-start sm:py-2'>
          <h2 className='sm:text-6xl text-4xl text-yellow-500 my-2'>
            Discover
          </h2>
          <h1 className='sm:text-8xl text-5xl relative text-white'>
            <span className={Styles.parent}>My </span><span>Projects </span>
          </h1>
        </div>
      </div>
      <div className='my-28 flex sm:flex-row justify-around items-center flex-col'>
        {services.map((service, index) => (
          <MediaCard
            key={index}
            link={service.link}
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

function MediaCard({ name, dis, wed, theme, link }) {
  return (
    <Card sx={{
      width: '500px',
      height: "500px",
      marginRight: "100px",
      backgroundColor: '#212121',
      borderRadius: '3',
      transition: 'transform 0.3s, box-shadow 0.3s',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 10px 20px rgba(0,0,0,0.5)'
      },
      [theme.breakpoints.down('sm')]: {
        width: '90%',
        height: '510px',
        marginBottom: 5,
        marginRight: "10px"
      }
    }}>
      <CardMedia
        sx={{ height: 250 }}
        image={wed}
        title={name}
      />
      <CardContent sx={{ color: "#fff" }}>
        <Typography gutterBottom variant="h4" className="text-4xl" component="div">
          {name}
        </Typography>
        <Typography variant="p" sx={{ color: '#fff', textAlign: "justify" }}>
          {dis}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" href={link}>Navigate to Site</Button>
      </CardActions>
    </Card>
  );
}

export default Projects;
