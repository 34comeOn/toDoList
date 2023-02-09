import React from "react";
import { StyledDaysList } from "./styledDaysList";
import { getCurrentCalendarWeek } from "../../utils/dateSorting";
import { DayCard } from "../dayCard";

export const DaysList = () => {
    return (
        <StyledDaysList>
            {getCurrentCalendarWeek().map(calendarDay => 
                <DayCard date={calendarDay} />
            )}
        </StyledDaysList>
    )
}