import {Feed} from "../components/feed/Feed";
import {Input} from "../components/input/Input";
import React from "react";

export function Home() {
    return (
        <div className="container mx-auto flex flex-col">
            <Input/>
            <Feed/>
        </div>
    )
}