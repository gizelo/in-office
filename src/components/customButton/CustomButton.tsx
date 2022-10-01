import React from "react";
import {IconType} from "react-icons";

interface IProps {
    name: string;
    onClick?: (params?: any) => void;
    Icon: IconType;
}

export function CustomButton({name, onClick, Icon}: IProps) {
    return (
        <button
            className="p-4 rounded-xl bg-indigo-200 dark:bg-indigo-600 dark:text-neutral-50"
            aria-label={name}
            onClick={onClick}
        >
            <Icon/>
        </button>
    )
}