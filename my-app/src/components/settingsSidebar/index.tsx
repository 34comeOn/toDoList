import React from "react";
import { StyledSettingsSidebar } from "./styledSettingsSidebar";
import { CustomSwitch } from "../customSwitch";

export const SettingsSidebar = ({onChange}: {onChange: ()=> void}) => {

    return (
        <StyledSettingsSidebar>
            <span>
                News off/on
            </span>
            {<CustomSwitch onChange={onChange}/>}
        </StyledSettingsSidebar>
    )
}