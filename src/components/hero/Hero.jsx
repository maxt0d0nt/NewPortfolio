import "./hero.scss";
import { motion } from "framer-motion"

const textVariants = {
    initial: {
        x: -500, 
        opacity: 0,
    }, 

    animate: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1,
        },
    },
    scrollButton: {
        opacity: 0,
        y: 10,
        transition:{
            duration: 2,
            repeat: Infinity,
        },
    },
};

const sliderVariants = {
    initial: {
        x: 0,
    }, 

    animate: {
        x: "-220%",
        transition: {
            repeat: Infinity,
            repeatType:"mirror",
            duration: 20,
        },
    },
};

function Hero() {
  return (
    <div className="hero">
        <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
            <motion.h2 variants={textVariants}>MAX ASCANIO</motion.h2>
            <motion.h1 variants={textVariants}>Web developer and UX/UI designer</motion.h1>
            <motion.div variants={textVariants}className="buttons">
            
                <motion.button variants={textVariants}><a href="#portfolio">See the Latest Works</a></motion.button>
                <motion.button variants={textVariants}><a href="#mail">Contact Me</a></motion.button>
            </motion.div>
            <motion.img variants={textVariants} src="/scroll.png" alt="img" animate="scrollButton" />
        </motion.div>
        </div>
        <motion.div variants={sliderVariants} className="sliddingTextContainer" initial="initial" animate="animate">
            Writer Content Creator Influencer
        </motion.div>
        <div className="imageContainer">
            <img src="/hero.png" alt="img" />
        </div>
    </div>
  )
}

export default Hero