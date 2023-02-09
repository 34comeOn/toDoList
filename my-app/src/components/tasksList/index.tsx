import React from "react";
import { TmockDataList } from "../../mock/mockData";
import { TaskItem } from "../taskItem";
import { StyledTasksList } from "./styledTasksList";

export const TasksList = ({arrayOfTasks} : {arrayOfTasks: TmockDataList}) => {
    return(
        <StyledTasksList>
            {arrayOfTasks.map(task => <TaskItem key={task.id} task={task}/>)}
        </StyledTasksList>
    )
}