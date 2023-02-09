import React from "react";
import { IisOpened } from "../dayCard";
import { StyledCardDate } from "./styledCardDate";

export const CardDate = ({isOpened, children}: IisOpened) => {
    return(
        <StyledCardDate isOpened={isOpened}>
            {children} Tasks
        </StyledCardDate >
    )
}