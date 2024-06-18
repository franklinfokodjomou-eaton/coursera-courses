// function declaration
function Nav(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// function expression
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// arrow function
const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// Ternary operators and functions in JSX
let name = "John";
name == "John" ? console.log("Hello John") : console.log("Hello Stranger");

function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    )
}

// Expressions as props
const bool = false

function Example(props) {
    return (
        <h2>The value of the toggleBoolean prop is: {props.toggleBoolean.toString()}</h2>
    )
}

export default function App() {
    return (
        <div className="App">
            <Example toggleBoolean={!bool} />
        </div>
    )
}