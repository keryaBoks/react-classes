import React, { Component } from 'react';
import classes from './Quiz.module.css'
import ActiveQuiz from '../../Components/ActiveQuiz/ActiveQuiz';
import FinishedQuiz from '../../Components/FinishedQuiz/FinishedQuiz';

class Quiz extends Component {

    state = {
        results: {},  // {[id]: success error}
        activeQuestion: 0,
        isFinished: false,
        answerState: null, //{ [id]: 'success' 'error' }
        quiz: [
            {
                currentQuestion: 'Какого цвета небо',
                rightAnswerID: 4,
                questionID: 1,
                answers: [
                    { text: 'Чёрный', id: 1 },
                    { text: 'Красный', id: 2 },
                    { text: 'Белый', id: 3 },
                    { text: 'Синий', id: 4 }
                ]
            },
            {
                currentQuestion: 'Куда лучше сделать релокейт',
                rightAnswerID: 1,
                questionID: 2, //question.id
                answers: [
                    { text: 'Северная Корея', id: 1 },
                    { text: 'Грузия', id: 2 },
                    { text: 'Россия', id: 3 },
                    { text: 'Литва', id: 4 }
                ]
            }
        ]


    }

    onAnswerClickHandler = (answerID) => {
   
        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0]
            if (this.state.answerState[key] === 'success') {
                return
            }
        }

        const question = this.state.quiz[this.state.activeQuestion]
        const result = this.state.results

        if (question.rightAnswerID === answerID) {
            //если ничего не лежит в result[answerID](лежать атм может только ошибка)(если первый раз нажали и ответили правильно)
            if (!result[question.id]) {
                result[question.id] = 'success'
            }

            this.setState({
                answerState: { [answerID]: 'success' },
                results: result
            })

            const time = window.setTimeout(() => {
                if (this.isQuizFinised()) {
                    this.setState({
                        isFinished: true
                    })
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1,
                        answerState:null
                    })
                }
                window.clearTimeout(time)
            }, 1000)


        } else {
            result[question.id] = 'error'
            this.setState({
                answerState: { [answerID]: 'error' },
                results: result
            })
        }

    }

    isQuizFinised = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length
    }
    retryHandler=()=>{
        this.setState({
            results:{},
            activeQuestion:0,
            answerState:null,
            isFinished:false

        })
    }

    render() {
        return (
            <div className={classes.Quiz}>
                <div className={classes.QuizWrapper}>
                    <h1>Quiz</h1>
                    {this.state.isFinished
                        ?
                        <FinishedQuiz
                            result={this.state.results}
                            quiz={this.state.quiz}
                            onRetry={this.retryHandler}
                        />
                        :
                        <ActiveQuiz
                            answers={this.state.quiz[this.state.activeQuestion].answers}
                            question={this.state.quiz[this.state.activeQuestion].currentQuestion}
                            questionLenght={this.state.quiz.length}
                            onAnswerClick={this.onAnswerClickHandler}
                            activeQuestion={this.state.activeQuestion + 1}
                            state={this.state.answerState}

                        />
                    }

                </div>
            </div>
        )
    }
}

export default Quiz
