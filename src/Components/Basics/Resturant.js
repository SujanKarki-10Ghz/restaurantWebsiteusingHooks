import React, { useState } from "react";
import "./style.css"; //we can pass it as inline css or external css as in HTML
// we can pass inline css and pass CSS code as object or create a object and pass it
import Menu from "./menuApi";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";
const uniquelist = [
  ...new Set( //...spread operator allows us to quickly copy all or part of an existing array or object into another array or object.
    //new Set() is used to remove duplicate elements from the array
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniquelist);
const Resturant = () => {
  //according to rules, write the hooks at top hierarchy
  //const [state_variable, updated_function] = useState(intialdata); we use useState to manage the state same as Redux
  const [menuData, setMenuData] = useState(Menu); //data in Menu is stored in menuData which is passed as props to MenuCard.
  const [menuList, setMenuList] = useState(uniquelist); //unique list data is stored in menuList which is passed as props to Navbar.
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu); // data in updated_function will be current value of state_variable
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenuData(updatedList);
  };
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}></Navbar>
      <MenuCard menuData={menuData}></MenuCard>
    </>
  );
};

export default Resturant;
