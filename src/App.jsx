import React, { useRef, useState } from "react";
import InputRange from "./components/InputRange/InputRange";

import { birthdayData } from "./data/data";
import BirthdayProfileList from "./components/BirthdayProfileList/BirthdayProfileList";

import { motion } from "framer-motion";

import {
  dayToNightSlider,
  nightToDaySlider,
  sliderContainer,
} from "./animation/animation";
import { toGregorian } from "jalaali-js";

function App() {
  const startYear = 1380;
  const endTime = 1381;

  const timerRef = useRef(null);

  const [value, setValue] = useState(startYear);
  const [nightToDayActive, setNightToDayActive] = useState(false);
  const [dayToNightActive, setDayToNightActive] = useState(false);

  const changeHandler = (e) => {
    // its startYear + 12x

    const latestValue = e.target.value;
    const actualValue = +latestValue + startYear;
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    timerRef.current = setTimeout(() => {
      if (actualValue > +value) {
        setDayToNightActive((prev) => !prev);
      } else {
        setNightToDayActive((prev) => !prev);
      }
    }, 500);

    setValue(actualValue);
  };

  const birthdayYearsArray = birthdayData;

  const year = startYear + Math.floor((value - startYear) / 12);

  const currentMonth =
    (value + 1 - startYear) % 12 === 0 ? 12 : (value + 1 - startYear) % 12;

  return (
    <div className="app">
      <InputRange
        startTime={startYear}
        endTime={endTime}
        onChange={changeHandler}
        year={year}
        month={currentMonth}
        value={value - startYear}
      />
      {birthdayYearsArray.map((birthdayYear, index) => {
        if (birthdayYear.length < 1) return;
        // ok go loop the month to get birthdays
        // how to detect its the same year?
        // current year === year
        // current year in loop? value is the start year + x
        // value - start year = x
        const yearIndex = Math.floor((value - startYear) / 12);
        if (index === yearIndex) {
          return birthdayYear.map((birthday, index) => {
            // index + 1 is month
            const birthdayMonth = index + 1;
            if (currentMonth === birthdayMonth) {
              return (
                <BirthdayProfileList key={index} birthdayMonth={birthday} />
              );
            } else return null;
          });
        } else return null;
      })}
      <motion.div
        className={`bg day-night`}
        variants={sliderContainer}
        initial="hidden"
        animate="show"
        key={`${dayToNightActive}-1`}
      >
        <motion.div
          variants={dayToNightSlider}
          className="frame frame1"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame2"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame3"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame4"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame5"
        ></motion.div>
        {/* <motion.div
          variants={dayToNightSlider}
          className="frame frame6"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame7"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame8"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame9"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame10"
        ></motion.div>
        <motion.div
          variants={dayToNightSlider}
          className="frame frame11"
        ></motion.div> */}
      </motion.div>

      <motion.div
        className={`bg night-day`}
        variants={sliderContainer}
        initial="hidden"
        animate="show"
        key={`${nightToDayActive}-2`}
      >
        <motion.div
          variants={nightToDaySlider}
          className="frame frame1"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame2"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame3"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame4"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame5"
        ></motion.div>
        {/* <motion.div
          variants={nightToDaySlider}
          className="frame frame6"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame7"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame8"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame9"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame10"
        ></motion.div>
        <motion.div
          variants={nightToDaySlider}
          className="frame frame11"
        ></motion.div> */}
      </motion.div>
    </div>
  );
}

export default App;
