import React,{Component} from "react";
import classes from './QuizList.module.css'
import { Link } from 'react-router-dom'

export default class QuizList extends Component {

    renderQuiz=()=>{
        return [1,2,3].map((quiz,index)=>{
            return(
                <li
                key={index}
                >
                    <Link to={'/quiz/' + quiz}>
                        Тест {quiz}
                    </Link>
                </li>
            )
        })
    }

    render(){
        return(
            <div className={classes.QuizList}>
                <h1>QuizList</h1>
                <ul>
                    {this.renderQuiz()}
                </ul>
            </div>
        )
    }
}