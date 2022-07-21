import React, { Component } from 'react';
import ExpenseItem from './chrisomponent/ExpenseItem';
import ExpenseForm from './chrisomponent/ExpenseForm';
import Blog from './chrisomponent/Blog';
import Entities from './chrisomponent/Entities';
import ErrorBoundary from './chrisomponent/ErrorBoundary';
import RefsDemo from './chrisomponent/hooks/RefsDemo';
import StyleSheet from './christyle/Stylesheet';
import Form from './chrisomponent/Form';
//import TwoSum from './Algo/TwoSum';
//import MaxWater from './Algo/MaxWater';
//import RainWater from './Algo/RainWater';
//import TypeOutString from './Algo/TypedOut';
//import ArrayPractice from './APractice/ArrayPractice';
//import SetPractice from './APractice/SetPractice';
//import MapPractice from './APractice/MapPractice';
import GeneralAlgo from './Algo/GeneralAlgo';
//import DynamicProg from './Algo/DynamicProg';


class App extends Component {

  getExpenseItem = () => {
    const names = ["Christo", "Abhinav"];
    return (
      <div>
        {
          names.map(name => { return <ExpenseItem first={name} /> })
        }
      </div>
    );
  }

  onFormSubmit = (param) => {
    console.log(param);
  }

  getForm = () => {
    return (
      <div>
        <ExpenseForm onSubmit={this.onFormSubmit} />
      </div>
    );
  }

  getBlogs = () => {
    const topics = ["Java", "Swift"];
    return (
      <ErrorBoundary>
        <div>
          {
            topics.map(topic => { return <Blog name={topic} /> })
          }
        </div>
      </ErrorBoundary>
    );
  }

  getEntities = () => {

    const entities = [
      {
        id: 1,
        name: 'Waadi'
      },
      {
        id: 2,
        name: 'Godhani'
      }
    ];

    return (

      <div>
        {
          entities.map(entity => { return <Entities key={entity.id} name={entity.name} /> })
        }
      </div>

    )
  }

  getLoginPage = () => {
    return (

      <RefsDemo />

    );
  }

  getLoginPage2 = () => {
    return (

      <Form />

    );
  }

  getStyleDemo = () => {
    return (
      <StyleSheet />
    );
  }
  render() {
    //MaxWater();
    //RainWater();
    GeneralAlgo();
    //SetPractice();
    //MapPractice();
    //ArrayPractice();
    //DynamicProg();
    return (
      <ErrorBoundary>
        <div className="App">
          <h1> Alg0rithm Practice </h1>
        </div>
      </ErrorBoundary>
    );
  }
}

export default App;
