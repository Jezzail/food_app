import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Good Tastes Good</h2>
      <p>
        For the <span className={classes.name}>SUSHI</span> enthusiast you can
        choose your favorite meal from our broad selection and enjoy a delicious
        lunch or dinner at home.
      </p>
      <p>
        We highly recommend also to try our{" "}
        <span className={classes.name}>POKE BOWLS!</span> A Hawaiian dish that
        is deeply rooted in Japanese cuisine full of the best fresh ingredients.
      </p>
    </section>
  );
};

export default MealsSummary;
