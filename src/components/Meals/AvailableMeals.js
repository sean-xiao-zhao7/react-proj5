import { useEffect, useState } from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const AvailableMeals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [errors, setErrors] = useState();

    useEffect(() => {
        const getMeals = async () => {
            try {
                const res = await fetch(process.env.REACT_APP_FB);
                if (!res) {
                    console.log(res);
                    throw new Error("Server error.");
                }
                const resData = await res.json();
                const resDataMeals = [];
                for (const key in resData) {
                    resDataMeals.push({
                        id: key,
                        name: resData[key]["name"],
                        description: resData[key]["description"],
                        price: resData[key]["price"],
                    });
                }
                setMeals(resDataMeals);
            } catch (err) {
                setErrors("Server error.");
            }
        };
        getMeals();
        setIsLoading(false);
    }, [setMeals]);

    if (isLoading) {
        return (
            <section className={classes.meals}>
                <Card>Loading.</Card>
            </section>
        );
    }

    if (errors) {
        return (
            <section className={classes.meals}>
                <Card>{errors}</Card>
            </section>
        );
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
