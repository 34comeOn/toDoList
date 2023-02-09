import React, { useState } from "react";
import { Indicator } from "../indicator";
import { StyledTaskItem } from "./styledTaskItem";
import "./style.scss";
import { CustomSwitch } from "../customSwitch";
import { TmockDataItem } from "../../mock/mockData";

export const TaskItem = ({task} : {task: TmockDataItem}) => {
    const [isTaskDone, setIsTaskDone] = useState(false);

    const taskDoneStatusHandler = () => {
        setIsTaskDone(isTaskDone => !isTaskDone);
    }

    return(
        <StyledTaskItem>
            <Indicator backgroundColor={task.color || 'transparent'}/>
            <div className={'taskItem__text-wrapper'}>
                <span className={`taskItem__title ${isTaskDone? 'taskItem__title--done':''}`}>
                    {task.title}
                </span>
                <p className={'taskItem__text'}>
                    {`${task.task.slice(0,29)}...`}
                </p>
            </div>
            <CustomSwitch onChange={taskDoneStatusHandler} aria-label="Switch your task done or to do"/>
        </StyledTaskItem>
    )
}