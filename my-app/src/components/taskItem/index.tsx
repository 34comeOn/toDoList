import React, { useState } from "react";
import { Indicator } from "../indicator";
import { StyledTaskItem } from "./styledTaskItem";
import "./style.scss";
import { CustomSwitch } from "../customSwitch";

export const TaskItem =  () => {
    const [isTaskDone, setIsTaskDone] = useState(false);

    const taskDoneStatusHandler = () => {
        setIsTaskDone(isTaskDone => !isTaskDone);
    }

    return(
        <StyledTaskItem>
            <Indicator backgroundColor={'red'}/>
            <div className={'taskItem__text-wrapper'}>
                <span className={`taskItem__title ${isTaskDone? 'taskItem__title--done':''}`}>
                    title
                </span>
                <p className={'taskItem__text'}>
                    a lot of text
                </p>
            </div>
            <CustomSwitch onChange={taskDoneStatusHandler} aria-label="Switch your task done or to do"/>
        </StyledTaskItem>
    )
}