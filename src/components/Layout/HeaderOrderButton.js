import { useContext, useEffect, useState } from "react";

import OrderIcon from "../Orders/OrderIcon";
import CartContext from "../../store/cart-context";
import classes from "./HeaderOrderButton.module.css";

const HeaderOrderButton = (props) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);
  const cartCtx = useContext(CartContext);

  const { items } = cartCtx;

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ""
  }`;

  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  return (
    <button className={btnClasses} onClick={props.onClick}>
      <span className={classes.icon}>
        <OrderIcon />
      </span>
      <span className={classes.text}>Past Orders</span>
    </button>
  );
};

export default HeaderOrderButton;
