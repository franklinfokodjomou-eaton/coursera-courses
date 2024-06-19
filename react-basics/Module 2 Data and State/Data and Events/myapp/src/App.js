import React from 'react';
import './App.css';
import Child from './components/Child'
import InputComponent from './components/Notes'
import TextInputWithFocusButton from './components/Notes'
import Heading from './components/Heading'
import MyApp from './components/Notes';
import Mealsprovider from './providers/MealsProvider';
import MealsList from './components/MealsList';
import Counter from './components/Counter';


function App() {
  const date = new Date();
  const [word, setWord] = React.useState('Eat');


  return (
    <div>
      {/* <Mealsprovider>
        <MealsList />
        <Counter />
      </Mealsprovider> */}
      <MyApp />
      {/* <Heading message={word + " at Little Lemon"} />
      <button onClick={() => setWord('Sleep')}>Sleep</button>   */}
      {/* <Child message={date.toLocaleTimeString()} /> 
      <InputComponent />
      <TextInputWithFocusButton /> */}
    </div>
  );
}

export default App;
