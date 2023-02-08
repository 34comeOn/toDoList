import React, { useState } from "react";
import { StyledMain } from "./styledMain";
import "./style.scss";
import settingsButton from "../../assets/svg/settingsButton.svg";
import { DayCard } from "../dayCard";
import { CoveredButton } from "../coveredButton";

export const Main = () => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleClickHandle = () => {
        setIsOpened(isOpened => !isOpened);
    }

    return(
        <StyledMain >
            <div className="header__wrapper">
                <h1 className="header__title">To Do</h1>
                <CoveredButton width="35px" height="35px" onClick={toggleClickHandle} isOpened={isOpened}>
                    <img src={settingsButton} alt="app settings" />
                </CoveredButton>
            </div>
            <DayCard date={'some day'}/>
        </StyledMain >
    )
}