import React,{Component} from 'react'
import Layout from './hoc/Layout/Layout'
import Quiz from './Containers/Quiz/Quiz';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import QuizCreator from './Containers/QuizCreator/QuizCreator';
import Auth from './Containers/Auth/Auth';
import QuizList from './Containers/QuizList/QuizList';


class App extends Component{
    render(){
        return(
          
            <Layout>
                <Routes>
                    <Route path='/auth' element={<Auth/>}></Route>
                    <Route path='/' element={<QuizList/>}></Route>
                    <Route path='/quiz-creator' element={<QuizCreator/>}></Route>
                    <Route path='/quiz/:id' element={<Quiz/>}></Route>
                </Routes>
           </Layout>
      
        )
    }
}

export default App;
