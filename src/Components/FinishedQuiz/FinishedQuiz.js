import React from 'react'
import classes from './FinishedQuiz.module.css'
import Button from '../../UI/Button/Button'
import { Link } from 'react-router-dom'

const FinishedQuiz = props => {
    console.log(props)

    const successCount = Object.keys(props.result).reduce((total,key)=>{
        if(props.result[key] === 'success'){
            total++
        }
        return total
    },0)

  return (
    <div className={classes.FinishedQuiz}>
      <ul>
          {props.quiz.map((quizItem,index)=>{
              const cls =[
                  'fa',
                  // props.result[quizItem.id] - здесь ледит success or error
                  props.result[quizItem.id] === 'error'? 'fa-times':'fa-check',
                  classes[ props.result[quizItem.id]]
              ]
              return(
                  <li  key={index}>
                      <strong>{index +1}</strong>.&nbsp;
                      {quizItem.currentQuestion}
                      <i className={cls.join(' ')}></i>
                  </li>
              )
          })}
        {/* <li>
          <strong>1. </strong>
          How are you
          <i className={'fa fa-times ' + classes.error} />
        </li>
        <li>
          <strong>2. </strong>
          How are you
          <i className={'fa fa-check ' + classes.success} />
        </li> */}
      </ul>

      <p>Правильно {successCount} из {props.quiz.length}</p>

      <div>
        <Button onClick={props.onRetry} type="primary">Повторить</Button>
        <Link to='/'>      <Button type="success">Перейти в список тестов</Button></Link>
  
      </div>
    </div>
  )
}

export default FinishedQuiz