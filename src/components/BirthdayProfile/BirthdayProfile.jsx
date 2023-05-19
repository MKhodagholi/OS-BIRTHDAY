import { toJalaali } from "jalaali-js";
import classes from "./BirthdayProfile.module.css";

import { motion } from "framer-motion";

const BirthdayProfile = ({ name, date, image, innerKey }) => {
  const jalaaliDate = toJalaali(date);

  const day = jalaaliDate.jd;
  const month = new Intl.DateTimeFormat("fa-IR", { month: "long" }).format(
    date
  );

  const item = {
    hidden: { opacity: 0, x: -1500, rotate: 0 },
    show: { opacity: 1, x: 0, rotate: 10 },
    hover: { rotate: 0, transition: { duration: 0.3 }, zIndex: 1 },
    exit: { x: -200, y: 1000, rotate: 45 },
  };

  return (
    <motion.div
      variants={item}
      initial="hidden"
      animate="show"
      whileHover="hover"
      exit={{ x: -200, y: 1000, rotate: 45 }}
      key={innerKey}
      layout
      drag
      dragConstraints={{
        left: 100,
        bottom: 0,
        top: 100,
        right: 0,
      }}
      dragElastic={0.7}
      transition={{
        duration: 1,
      }}
      className={classes["birthday-card"]}
    >
      <img src={image} alt="" />
      <div className={classes.content}>
        <p className={classes.name}>{name}</p>
        <div className={classes.date}>
          <p>{day}</p>
          <span>{month}</span>
        </div>
      </div>
    </motion.div>
  );
};

export default BirthdayProfile;
