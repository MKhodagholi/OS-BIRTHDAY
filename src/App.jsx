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
import { useAudio } from "./hook/useAudio";

import music1 from "./assets/music/19 Finesse (Recorded at Metropolis Studios, London) (Pheelz).mp3";

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

  // const [isPlaying, toggle, audio] = useAudio(music1);

  const [audio] = useState(new Audio(music1));
  // const [isPlaying, setIsPlaying] = useState(false);

  const musicClickHandler = () => {
    audio.play();
  };

  const offMusicHandler = () => {
    audio.pause();
  };

  return (
    <div className="app">
      <div className="about-site">
        <h3>درباره طرح:</h3>
        <p>
          ایده اولیه این بود که با تغییر زمان شب و روز هم تغییر کنند. ولی
          متاسفانه به دلیل فیلتر بودن بیشتر منابع همچین کاری برام ممکمن نبود.
        </p>
        <p>
          اگر ایده‌ای برای بهتر شدن یا با حال تر شدن سایت دارید لطفا از طریق
          تلگرام به من پیام بدید.
        </p>
        <p>اگر هم تایم اسلپ صبح تا شب دارید برای من بفرستید خیلی عالی میشه.</p>
        <p>
          و در آخر اگر مشکلی دیدید ممنون میشم از طریق لینک زیر بهم بگید.
          <br />
          <a href="https://github.com/MKhodagholi/OS-BIRTHDAY/issues">
            لینک ایشو های پروژه
          </a>
        </p>
        <p>آیدی تلگرام من: mdkhodagholi@</p>
        <button onClick={musicClickHandler}>موزیک</button>
        <button onClick={offMusicHandler}>قطع موزیک</button>
      </div>
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
