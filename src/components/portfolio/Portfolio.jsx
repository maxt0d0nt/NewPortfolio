
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "United Robots",
        img:  "../../ur_img.png",
        desc: "This project was make on react, is resposive and use Bootstrap ",
        link: "https://ur-page.netlify.app"
    },
    {
        id: 2,
        title: "IPC",
        img: "../../ipc_img.png",
        desc: "This project was make on react, is resposive and use aos and leaflet",
        link: "https://ipc-controls.netlify.app"
    },
    {
        id: 3,
        title: "Medic Website",
        img: "../../doctor_img.png" ,
        desc: "This project was make on react, is resposive and use Bootstrap and slick-carousel",
        link: "https://consultorioyolanda.netlify.app/"
    },
    {
        id: 4,
        title: "expenses tracker",
        img: "../../tracker_img.png",
        desc: "Frontend web application using React, which allows you to record expenses and income, as well as a graph with more information using VICTORY, Vitejs, React API Context, LocalStorag",
        link: "https://max-expense-tracker.netlify.app"
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref, })

    const y= useTransform(scrollYProgress, [0, 1], [-200, 200])
    return(
        <section >
            <div className="container" id="portfolio">
                <div className="wrap">
                    <div className="imageContainer" ref={ref}>
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <a href={item.link} target="_blank"><button>See Demo</button></a>
                </motion.div>
                </div>
            </div>
        </section>
    )
}


const Portfolio = () => {

    const ref = useRef()

    const {scrollYProgress} = useScroll({target:ref, offset: ["end end", "start start"]})

const scaleX= useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
})

  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{ scaleX }} className="progressBar"></motion.div>
        </div>
        {items.map((item) => (
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}



export default Portfolio