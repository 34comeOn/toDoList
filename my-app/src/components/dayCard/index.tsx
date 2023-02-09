import React, { useState } from "react";
import { StyledDayCard } from "./styledDayCard";
import openCardButton from "../../assets/svg/openCardButton.svg";
import closeCardButton from "../../assets/svg/closeCardButton.svg";
import { CoveredButton } from "../coveredButton";
import { Indicator } from "../indicator";
import variables from '../../sass/variables.module.scss';
import "./style.scss";
import { CardDate } from "../cardDate";
import { TaskItem } from "../taskItem";
import { TmockDataList } from "../../mock/mockData";
import { TasksList } from "../tasksList";

export interface IisOpenedProps {
    isOpened: boolean;
};

export interface IisOpened extends IisOpenedProps{
    children: string;
}

export const DayCard = ({date, arrayOfTasks}: {date:string, arrayOfTasks: TmockDataList}) => {
    const [isOpened, setIsOpened] = useState(false);

    const toggleClickHandle = () => {
        setIsOpened(isOpened => !isOpened);
    }

    return (
        <StyledDayCard isOpened={isOpened}>
            {!isOpened && <Indicator backgroundColor={variables.colorIndicatorStock} />}
            <CardDate isOpened={isOpened}>
                {date}
            </CardDate>
            <CoveredButton width="25px" height="25px" onClick={toggleClickHandle} isOpened={isOpened} movable={true}>
                <>
                    {!isOpened && <img src={openCardButton} alt="Open task list button" />}
                    {isOpened && <img src={closeCardButton} alt="Close task list button" />}
                </>
            </CoveredButton>
            {isOpened && arrayOfTasks? <TasksList arrayOfTasks={arrayOfTasks}/> : false}
        </StyledDayCard>
    )
}