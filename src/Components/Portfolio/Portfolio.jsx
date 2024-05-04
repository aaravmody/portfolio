import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";



const items = [
  {
    id: 1,
    title: "PassGuard",
    img: '/passguard.jpeg',
    desc: `Designed a beautiful, user friendly password managing application which allows users to securely store website details along with their respective passwords. • Developed two versions, one leveraging local storage and the other employing a database for enhanced datasecurity and scalability.• Deployed the website online to ensure effortless accessibility for users.`,
    lin: "https://passkaguard.netlify.app/"
  },
  {
    id: 2,
    title: "ChatWell",
    img: "/chatwell.png",
    desc: "• Developed a chat website based on a server which allows users to join different rooms and chat with people sharing similar interests. • Utilized express.js to establish the server and implemented socket.io for efficient message transfer. Used Bootstrap to enhance the visual appeal and user-friendliness of the website. • Hosted the website on render which allows Chatwell to be accessed from anywhere in the world ensuring seamless chat experience",
    lin: "https://chat-site-7pl2.onrender.com/"
  },
  {
    id: 3,
    title: "ClipCraze",
    img: "/clipcraze.png",
    desc: "Crafted an immersive Video playing website using technologies like ReactJS, JavaScript, HTML, and CSS to deliver a seamless user experience. Integrated API to fetch and display video content, ensuring dynamic and up-to-date media offerings for user",
    lin: "https://github.com/aaravmody/ClipCraze"
  },
  {
    id: 4,
    title: "Project 4",
    img: "https://images.pexels.com/photos/18540208/pexels-photo-18540208/free-photo-of-wood-landscape-water-hill.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores ab id ad nesciunt quo aut corporis modi? Voluptate, quos sunt dolorum facilis, id eum sequi placeat accusantium saepe eos laborum.",
    lin: "https://passkaguard.netlify.app/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <>
    <Sidebar />
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => window.location.href = item.lin }>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
    </>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>My Projects</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;