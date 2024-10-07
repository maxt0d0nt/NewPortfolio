
import "./services.scss"
import {motion, useInView} from "framer-motion";
import { useRef } from "react";


const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    staggerChildren: 0.1,
    },
  },
};

const Services = () => {

  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px"})
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move foward
        </p>
        <hr />
      </motion.div>
      <motion.div className='titleContainer'variants={variants}>
      <div className='title'>
        <img src="/people.webp" alt="" />
        <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> ideas</h1>
      </div>
      </motion.div>
      <motion.div className='titleContainer'variants={variants}>
      <div className='title'>
        <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b > Business</h1>
        <button>WHAT WE DO</button>
      </div>
      </motion.div>
      <motion.div className='listContainer'variants={variants}>
        <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
          <h2>Experience and technical knowledge</h2>
          <p>Our experience in web development allows us to offer customized and efficient solutions,using the most suitable technologies for each project. This ensure high-quality resukts tailored to the needs of the client.</p>
        </motion.div>
        <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
          <h2>Focus on optimization and performance</h2>
          <p>We specialize in creating websites that are not only visually appealing but also optimized for fast performance, excellent user experience, and better search engine ranking.</p>
        </motion.div>
      <motion.div className="box" whileHover={{background:"lightgray", color: "black"}}>
      <h2>Personalized support and attention</h2>
          <p>We provide close and personalized service, working closely with clients to understand their needs and goals. This ensures smooth communication and solutions that meet the client's expectations.</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Services