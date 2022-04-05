import React from "react";

/** Component */
import NavbarSide from "../../components/NavbarSide";

/** Style */
import style from "./style.module.css";

const AboutApp = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <NavbarSide />
      </div>
      <div className={style.right}>
        <h1>About The App</h1>
        <p>
          in this app, you can add, delete, submit, and edit item. To edit item
          simpy dobule click on it. Once you are done. press the enter key to
          resubmit. THis app will persist your data in the broweser local
          storage. So wheteher you reload. close your app or reoppende ti you
          still have accsess to your to dos items.
        </p>
      </div>
    </div>
  );
};

export default AboutApp;
