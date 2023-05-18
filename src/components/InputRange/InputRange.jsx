import { toJalaali } from "jalaali-js";
import classes from "./InputRange.module.css";

const InputRange = ({ onChange, startTime, endTime, value }) => {
  // const jalaaliDate = toJalaali(date);
  // const year = jalaaliDate.jy;
  // const month = jalaaliDate.jm;

  const monthsArray = [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ];

  return (
    <div className={classes["input-range"]}>
      <input
        type="range"
        defaultValue={0}
        min={0}
        max={(endTime - startTime) * 12 - 1}
        step={1}
        onChange={onChange}
        onClick={(e) => {
          e.stopPropagation();
        }}
      />
      <div className={classes.xMonth}>
        {monthsArray.map((month, index) => (
          <div
            className={`${classes.month}  ${
              index === value ? classes.active : ""
            }`}
            key={index}
          >
            <div className={classes.tick}></div>
            <span>{month}</span>
          </div>
        ))}
      </div>

      {/* <div className={classes["date-track"]}>
        <span>{startTime}</span>
        <span>{endTime}</span>
      </div> */}
      {/* <div className={classes.content}>
        <p>
          محور زمان <br /> با این محور می‌توانیم در زمان سفر کنیم
        </p>
        <p>
          هم اکنون در زمان {year}-{month}
        </p>
      </div> */}
    </div>
  );
};

export default InputRange;
