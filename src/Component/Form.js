import React, { useState } from "react";
import "./Form.css";
import Weather from "./Weather";

const API_KEY = "39e7b0fd80b363037dc25861695e26cd";

const Form = () => {
  const [state, setState] = useState({
    city: "",
    country: "",
    temp: "",
    humidity: "",
    description: "",
    error: "",
  });

  const onSubmit = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
      );
      const data = await response.json();
      if (data.cod === "404") {
        setState({
          city: "",
          country: "",
          temp: "",
          humidity: "",
          description: "",
          error: "City not found",
        });
      } else {
        setState({
          city: data.name,
          country: data.sys.country,
          temp: data.main.temp,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
        });
      }
    } catch (error) {
      setState({
        city: "",
        country: "",
        temp: "",
        humidity: "",
        description: "",
        error: "Something went wrong. Please try again later.",
      });
    }
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" required name="city" placeholder="Enter Your City" />
        <input
          type="text"
          required
          name="country"
          placeholder="Enter Your Country"
        />
        <input type="submit" value="Get Weather" />
      </form>
      <Weather
        city={state.city}
        country={state.country}
        temp={state.temp}
        humidity={state.humidity}
        description={state.description}
        error={state.error}
      />
    </>
  );
};

export default Form;
