import React from "react";
import classes from './ActiveQuiz.module.css'
import AnswersList from "./AnswersList/AnswersLiust";

const ActiveQuiz = props => {
    console.log(props)

    return (
        <div className={classes.ActiveQuiz}>
            <p className={classes.Question}>
                <span>
                    <strong>1.</strong>&nbsp;
                    {props.question}
                </span>
                <samll>{props.activeQuestion} из {props.questionLenght}</samll>
            </p>
            <AnswersList
            answers={props.answers}
            onAnswerClick={props.onAnswerClick}
            state={props.state}
       
            />
        </div>
    )
}
export default ActiveQuiz