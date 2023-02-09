import React from "react";
import { StyledCoveredButton } from "./styledCoveredButton";

export interface ICoveredButtonProps {
    width: string;
    height: string;
    children: JSX.Element;
    onClick: ()=> void;
    isOpened: boolean;
    movable: boolean;
}

export const CoveredButton = ({width, height, children, onClick, isOpened, movable}: ICoveredButtonProps) => {
    return (
        <StyledCoveredButton width={width} height={height} onClick={onClick} isOpened={isOpened} movable={movable}>
            {children}
        </StyledCoveredButton>
    )
}