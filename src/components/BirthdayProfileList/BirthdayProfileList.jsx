import classes from "./BirthdayProfileList.module.css";
import BirthdayProfile from "../BirthdayProfile/BirthdayProfile";
import { AnimatePresence, motion } from "framer-motion";

const BirthdayProfileList = ({ birthdayMonth }) => {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 4,
      },
    },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={container}
        hidden="hidden"
        animate="show"
        className={classes["birthday-list"]}
      >
        {birthdayMonth.map((birthday, index) => {
          if (Object.keys(birthday).length > 0)
            return (
              <BirthdayProfile
                key={index}
                innerKey={index}
                date={birthday.date}
                name={birthday.name}
                image={birthday.image}
              />
            );
          else return null;
        })}
      </motion.div>
    </AnimatePresence>
  );
};

export default BirthdayProfileList;
