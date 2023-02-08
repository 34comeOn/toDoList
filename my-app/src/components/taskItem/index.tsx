import React from "react";
import { Indicator } from "../indicator";
import { StyledTaskItem } from "./styledTaskItem";
import Switch from '@mui/material/Switch';
import "./style.scss";

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
            <Switch />
        </StyledTaskItem>
    )
}