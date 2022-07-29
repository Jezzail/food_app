import { Fragment, useState } from "react";

import classes from "./OrderItem.module.css";

const OrderItem = (props) => {
  const [showItem, setShowItem] = useState(false);

  const showItemHandler = () => {
    setShowItem(!showItem);
  };

  return (
    <li className={classes.meal}>
      <div>
        <div className={classes.actions}>
          <h3>{props.name}</h3>
        </div>
        <div className={classes.price}>
          ${props.totalPrice} <span>- {props.date || "2022-01-01"}</span>
        </div>
        {showItem && (
          <Fragment>
            <div className={classes.address}>
              <p>{props.street}</p>
              <p>
                {props.postal} {props.city}
              </p>
            </div>
            <ul>
              {props.orderItems.map((item) => (
                <li className={classes.description}>
                  {item.amount} x {item.name} @ ${item.price}
                </li>
              ))}
            </ul>
          </Fragment>
        )}
      </div>
      <div className={classes.actions}>
        <button className={classes.button} onClick={showItemHandler}>
          Show
        </button>
      </div>
    </li>
  );
};

export default OrderItem;
