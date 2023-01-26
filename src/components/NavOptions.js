import React, { useState, useEffect } from "react";
import NavCard from "./NavCard.js";
import "../NavOptions.css"
const NavOptions = ({
  miphones,
  redmiphones,
  tv,
  laptop,
  fitnessandlifestyle,
  home,
  audio,
  accessories,
}) => {
  const [miphonetoggle, setMiphonetoggle] = useState(false);
  const [redmiphonetoggle, setRedmiphonetoggle] = useState(false);
  const [tvtoggle, setTvtoggle] = useState(false);
  const [laptoptoggle, setLaptoptoggle] = useState(false);
  const [fitnessandlifestyletoggle, setFitnessandlifestyle] = useState(false);
  const [hometoggle, setHometoggle] = useState(false);
  const [audiotoggle, setAudiotoggle] = useState(false);
  const [accessoriestoggle, setAccessoriestoggle] = useState(false);
  useEffect(() => {
    if (window.location.pathname === "/miphones") return setMiphonetoggle(true);
    if (window.location.pathname === "/redmiphones")
      return setRedmiphonetoggle(true);
    if (window.location.pathname === "/tv") return setTvtoggle(true);
    if (window.location.pathname === "/laptops") return setLaptoptoggle(true);
    if (window.location.pathname === "/lifestyle")
      return setFitnessandlifestyle(true);
    if (window.location.pathname === "/audio") return setAudiotoggle(true);
    if (window.location.pathname === "/home") return setHometoggle(true);
    if (window.location.pathname === "/accessories")
      return setAccessoriestoggle(true);
  }, []);

  return (
    <div className="navOptions">
      {miphonetoggle
        ? miphones.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
              index={index}
            />
          ))
        : null}
      {redmiphonetoggle
        ? redmiphones.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {tvtoggle
        ? tv.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {laptoptoggle
        ? laptop.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {fitnessandlifestyletoggle
        ? fitnessandlifestyle.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {audiotoggle
        ? audio.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {hometoggle
        ? home.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
      {accessoriestoggle
        ? accessories.map((item, index) => (
            <NavCard
              name={item.name}
              price={item.price}
              image={item.image}
              key={item.image}
            />
          ))
        : null}
    </div>
  );
};

export default NavOptions;
