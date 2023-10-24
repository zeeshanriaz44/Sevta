import classes from "./Main.module.css";
import React from "react";
import Images from "../../utilities/Images";

const Main = () => {
  return (
    <div className={classes.box}>
      <div className={classes.upp}>
        <p className={classes.para}>Recommended</p>
        <hr className={classes.hrz} />
        <div className={classes.box2}>
          <div className={classes.cont}>
            <img src={Images.Img1} alt="" />
          </div>
          <p className={classes.paras}>Hamdullah</p>
        </div>
        <div>
          <p className={classes.hist}>Our history</p>
          <p className={classes.paragraph}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo alias
            at adipisci velit quos, neque, voluptatibus vero et, eius est
            quisquam perferendis. Eaque voluptatum, fugiat esse quam provident
            dolore reprehenderit?
          </p>
        </div>
        <div className={classes.btn}>
          <button className={classes.check}>Nov 12, 2021</button>
          <button>5 mint read</button>
          <button>selected for you</button>
        </div>
        <hr className={classes.hrz} />
      </div>
      <div className={classes.bott}></div>
    </div>
  );
};

export default Main;
