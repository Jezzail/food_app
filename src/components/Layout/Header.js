import { Fragment } from "react";

import HeaderCartButton from "./HeaderCartButton";
import HeaderOrderButton from "./HeaderOrderButton";
import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.title}>Sushi & Poke</h1>
        <h1 className={classes.titleSmall}>S&P</h1>
        <div className={classes.buttons}>
          <HeaderOrderButton onClick={props.onShowOrder} />
          <HeaderCartButton onClick={props.onShowCart} />
        </div>
      </header>
      <div className={classes["main-image"]}>
        <img
          src={"/assets/background.jpg"}
          alt="A table full of delicious food!"
        />
      </div>
    </Fragment>
  );
};

export default Header;
