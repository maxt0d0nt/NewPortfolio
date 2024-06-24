
import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";


const items = [
    {
        id: 1,
        title: "React Commerce",
        img: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        desc: "lorem ipsum dolor dndjdj nfjndjsk jdjdksk"
    },
    {
        id: 2,
        title: "NextJS Commerce",
        img: "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "lorem ipsum dolor dndjdj nfjndjsk jdjdksk"
    },
    {
        id: 3,
        title: "Vanilla JS Commerce",
        img: "https://images.pexels.com/photos/1906658/pexels-photo-1906658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" ,
        desc: "lorem ipsum dolor dndjdj nfjndjsk jdjdksk"
    },
    {
        id: 4,
        title: "music app",
        img: "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        desc: "lorem ipsum dolor dndjdj nfjndjsk jdjdksk",
    },
];

const Single = ({item}) => {

    const ref = useRef();

    const {scrollYProgress} = useScroll({target:ref, })

    //const y= useTransform(scrollYProgress, [0, 1], [-300, 300])
    return(
        <section ref={ref}>
            <div className="container">
                <div className="wrap">
                    <div className="imageContainer">
                <img src={item.img} alt="" />
                </div>
                <motion.div className="textContainer" >
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
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