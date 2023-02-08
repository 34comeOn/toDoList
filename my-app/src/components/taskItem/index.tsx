import React from "react";
import { Indicator } from "../indicator";
import { StyledTaskItem } from "./styledTaskItem";
import "./style.scss";
import { CustomSwitch } from "../customSwitch";

export const TaskItem =  () => {
    return(
        <StyledTaskItem>
            <Indicator backgroundColor={'red'}/>
            <div className={'taskItem__text-wrapper'}>
                <span className={'taskItem__title'}>
                    title
                </span>
                <p className={'taskItem__text'}>
                    a lot of text
                </p>
            </div>
            <CustomSwitch />
        </StyledTaskItem>
    )
}