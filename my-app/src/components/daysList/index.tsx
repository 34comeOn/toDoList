import React from "react";
import { StyledDaysList } from "./styledDaysList";
import { getCurrentCalendarWeek, sortingTasksByDate } from "../../utils/dateSorting";
import { DayCard } from "../dayCard";
import { mockData } from "../../mock/mockData";

export const DaysList = () => {
    console.log(sortingTasksByDate(mockData))
    return (
        <StyledDaysList>
            {getCurrentCalendarWeek().map((calendarDay, index) => {
                const arrayOfTasks = sortingTasksByDate(mockData).get(calendarDay);

                return <DayCard key={index} date={calendarDay} arrayOfTasks={arrayOfTasks}/>
            })}
        </StyledDaysList>
    )
}