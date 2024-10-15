import React from "react";

import { styles } from "../styles"

export default function Hero() {
    return (
        <div className="w-full flex flex-col items-center justify-center font-bold mt-auto p-6">
            <h1 className="text-4xl">Tom Charpentier</h1>
            <p className="text-lg text-secondary">Third year student in Computer Science</p>
        </div>
    );
}