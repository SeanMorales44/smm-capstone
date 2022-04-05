import React from "react";

export const DuckQuestions = props => {
    return (
        <div>
            <h1>{props.answer}</h1>
            <p>{props.content}</p>
        </div>
    );
};