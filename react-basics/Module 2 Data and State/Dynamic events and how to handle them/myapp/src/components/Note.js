// Event handling and embedded expressions
// the different ways to embed expressions in event handlers in React:
// 1. With an inline anonymous ES5 function
// 2. With an inline anonymous ES6 arrow function (an arrow function)
// 3. Using a separate function declaration
// 4. Using a separate function expression

// Handling events using inline anonymous ES5 functions
{/* <button onClick={function() {console.log("Button clicked")}}>
An inline anonymous ES5 function event handler
</button> */}

// Handling events using inline anonymous ES6 functions (arrow functions)
<button onClick={() => console.log("Button clicked")}>
An inline anonymous ES6 function event handler
</button>

// Handling events using separate function declarations
// function App() {
//     function thirdExample() {
//       console.log("Button clicked");
//     }
//     return (
//       <button onClick={thirdExample}>
//         using a separate function declaration
//       </button>
//     );
// }

// export default App;

// Handling events using separate function expressions
function App() {
    const fourthExample = () => console.log("Button clicked");

    return (
      <button onClick={fourthExample}>
        using a separate function expression
      </button>
    );
  }

export default App;