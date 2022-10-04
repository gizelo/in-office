import React, {useEffect, useState} from "react";

import {CustomButton} from "../customButton/CustomButton";

import {BsMoonFill, BsSunFill} from "react-icons/bs";
import {RiComputerFill} from "react-icons/ri"

interface IProps {
    theme: string;
    setTheme: (theme: string) => void
}

export function ThemeSwitcher({theme, setTheme}: IProps) {
    const [showIcons, setShowIcons] = useState(false)

    useEffect(() => {
        if (!localStorage.theme || localStorage.theme === 'system') {
            if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.classList.add('dark')
            } else {
                document.documentElement.classList.remove('dark')
            }
            setTheme('system')
        } else if (localStorage.theme === 'dark') {
            document.documentElement.classList.add('dark')
            setTheme('dark')
        } else if (localStorage.theme === 'light') {
            document.documentElement.classList.remove('dark')
            setTheme('light')
        }
    }, [theme, setTheme])

    const changeTheme = (theme: string) => {
        localStorage.theme = theme
        setTheme(theme)
    }

    return (
        <div className="absolute top-6 right-6">
            <div
                className="absolute top-0 right-0"
                onClick={() => setShowIcons(prev => !prev)}
            >
                <CustomButton
                    name={`Theme: ${theme}`}
                    Icon={theme === 'system' ? RiComputerFill : theme === 'dark' ? BsMoonFill : BsSunFill}
                />
            </div>
            {showIcons && (
                <div className="absolute top-14 -right-2 bg-neutral-200 dark:bg-neutral-800 px-2 rounded-xl">
                    {theme !== 'system' && (
                        <div className="my-2">
                            <CustomButton
                                name={'Theme: system'}
                                onClick={() => changeTheme('system')}
                                Icon={RiComputerFill}
                            />
                        </div>
                    )}
                    {theme !== 'dark' && (
                        <div className="my-2">
                            <CustomButton
                                name={'Theme: dark'}
                                onClick={() => changeTheme('dark')}
                                Icon={BsMoonFill}
                            />
                        </div>
                    )}
                    {theme !== 'light' && (
                        <div className="my-2">
                            <CustomButton
                                name={'Theme: light'}
                                onClick={() => changeTheme('light')}
                                Icon={BsSunFill}
                            />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}