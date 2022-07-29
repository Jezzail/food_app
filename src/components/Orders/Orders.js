import React, { useState, Fragment, useEffect } from "react";

import OrderItem from "./OrderItem";
import Modal from "../UI/Modal";
import classes from "./Orders.module.css";

const Order = (props) => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchOrders = async () => {
      setIsLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND_URL}/orders.json`
      );
      if (!response.ok) {
        throw new Error(response.status);
      }

      const data = await response.json();
      const loadeddOrders = [];

      for (const key in data) {
        let orderItems = [];
        let totalPrice = 0;
        for (const keyItems in data[key].orderedItems) {
          orderItems.push({
            id: data[key].orderedItems[keyItems].id,
            name: data[key].orderedItems[keyItems].name,
            amount: data[key].orderedItems[keyItems].amount,
            price: data[key].orderedItems[keyItems].price,
          });
          totalPrice =
            totalPrice +
            data[key].orderedItems[keyItems].price *
              data[key].orderedItems[keyItems].amount;
        }
        loadeddOrders.push({
          id: key,
          city: data[key].user.city,
          name: data[key].user.name,
          postal: data[key].user.postal,
          street: data[key].user.street,
          date: data[key].user.date,
          totalPrice: totalPrice.toFixed(2),
          orderItems: orderItems,
        });
      }
      setOrders(loadeddOrders);
      setIsLoading(false);
    };

    fetchOrders().catch((error) => {
      setIsLoading(false);
      setError(error.message);
    });
  }, []);

  const ordersList = orders.map((order) => (
    <OrderItem
      key={order.id}
      id={order.id}
      name={order.name}
      city={order.city}
      postal={order.postal}
      street={order.street}
      date={order.date}
      totalPrice={order.totalPrice}
      orderItems={order.orderItems}
    />
  ));

  return (
    <Modal onClose={props.onClose}>
      <section className={classes.orders}>
        {error !== null && (
          <p className={classes.OrdersError}>ERROR: {error}</p>
        )}
        {isLoading && <p className={classes.OrdersLoading}>LOADING</p>}
        {ordersList.length !== 0 && (
          <Fragment>
            <ul>{ordersList}</ul>
            <div className={classes.actions}>
              <button
                className={classes["button--alt"]}
                onClick={props.onClose}
              >
                Close
              </button>
            </div>
          </Fragment>
        )}
      </section>
    </Modal>
  );
};

export default Order;
