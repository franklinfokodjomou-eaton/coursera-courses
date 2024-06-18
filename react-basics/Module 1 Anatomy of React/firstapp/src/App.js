import logo from './logo.svg';
import './App.css';
import Heading from './components/Heading';
import Header from './components/Header';
import Main from './components/Main';
import Siderbar from './components/Sidebar';
import Bag from './components/Bag';
import Apples from './components/Apples';
import Pears from './components/Pears';
import Card from './components/Card';

function App() {
  return (
    <div>
      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3"/>
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />
      {/* <Header />
      <div>
        <Main userName="Mack" num={5} />
        <Siderbar />
      </div> */}

      {/* <Bag>
        <Apples color="yellow" number="5" />
      </Bag>
      <Bag>
        <Pears friend="Peter" />
      </Bag> */}

      {/* <Heading firstName="Anna" />
      <Header name="Anna" color="purple"/>
      <Main greet="Hello" />
      <Siderbar greet="Bonjour" /> */}
    </div>
  );
}

export default App;
