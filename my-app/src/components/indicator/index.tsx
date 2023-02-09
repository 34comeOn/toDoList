import React from "react";
import { StyledIndicator } from "./styledIndicator";

export interface IbackgroundColor {
    backgroundColor: string,
}

export const Indicator = ({backgroundColor}: IbackgroundColor) => (
    <StyledIndicator backgroundColor={backgroundColor}/>
)