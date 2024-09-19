import React from "react";
import Button from "./Button";
import BUTTON_NAME from "../constants/buttonsList";

const ButtonList = () => {
  return (
    <div className="flex overflow-x-scroll scrollbar-custom">
      {BUTTON_NAME.map((Bt_name) => {
        return <Button key={Bt_name} name={Bt_name} />;
      })}
    </div>
  );
};

export default ButtonList;
