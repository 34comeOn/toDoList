import React from "react";
import { StyledDaysList } from "./styledDaysList";
import { getCurrentCalendarWeek, sortingTasksByDate } from "../../utils/dateSorting";
import { DayCard } from "../dayCard";
import { mockData } from "../../mock/mockData";

export const DaysList = () => {
    return (
        <StyledDaysList>
            {getCurrentCalendarWeek().map((calendarDay, index) => {
                const arrayOfTasks = sortingTasksByDate(mockData).get(calendarDay);
                if (index === 0) {
                    calendarDay = 'Today';
                } else if (index === 1) {
                    calendarDay = 'Tommorow';
                }
                return <DayCard key={index} date={calendarDay} arrayOfTasks={arrayOfTasks}/>
            })}
        </StyledDaysList>
    )
}