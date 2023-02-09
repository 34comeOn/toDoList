import React from "react";
import { IisOpened } from "../dayCard";
import { StyledCardDate } from "./styledCardDate";
import { mockData } from "../../mock/mockData";
import { collectsDates, getCurrentCalendarWeek } from "../../utils/dateSorting";

export const CardDate = ({isOpened, children}: IisOpened) => {

    console.log(collectsDates(mockData))
    console.log(getCurrentCalendarWeek())
    return(
        <StyledCardDate isOpened={isOpened}>
            {children} Tasks
        </StyledCardDate >
    )
}