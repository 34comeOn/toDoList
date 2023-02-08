import React from "react";
import { StyledMain } from "./styledMain";
import "./style.scss";
import settingsButton from "../../assets/svg/settingsButton.svg";

export const Main = () => {
    return(
        <StyledMain >
            <div className="header__wrapper">
                <h1 className="header__title">To Do</h1>
                <img src={settingsButton} alt="app settings" />
            </div>
        </StyledMain >
    )
}