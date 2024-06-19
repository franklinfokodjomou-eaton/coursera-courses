// Parent-child data flow
// The data flow starts at the root and can flow to multiple levels of nesting,
// from the root component (parent component) to the child component,
// then the grandchild component, and further down the hierarchy.

// Parent component:
// function Dog() {
//     return (
//         <Puppy name="Max" bowlShape="Square" bowlStatus="full" />
//     )
// }

// Child component:
// function Puppy(props) {
//     return (
//         <div>
//             {props.name} has <Bowl bowlShape="Square" bowlStatus="full" />
//         </div>
//     )
// }

// Grandchild component:
// function Bowl(props) {
//     return (
//         <span>
//             {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
//         </span>
//     )
// }

// Using hooks

import { useState, useRef } from "react";

// export default function InputComponent() {
//     const [inputText, setText] = useState('hello');

//     function handleChange(e) {
//         setText(e.target.value);
//     }

//     return (
//         <>
//           <input value={inputText} onChange={handleChange} />
//           <p>You typed: {inputText}</p>
//           <button onClick={() => setText('hello')}>
//             Reset
//           </button>
//         </>
//     )
// }

// export default function RegisterForm() {
//   const [form, setForm] = useState({
//     firstName: "Luke",
//     lastName: "Jones",
//     email: "lukejones@sculpture.com",
//   });

//   return (
//     <>
//       <label>
//         First Name:
//         <input
//           value={form.firstName}
//           onChange={(e) => setForm({ ...form, firstName: e.target.value })}
//         />
//       </label>
//       <label>
//         Last Name:
//         <input
//           value={form.lastName}
//           onChange={(e) => setForm({ ...form, lastName: e.target.value })}
//         />
//       </label>
//       <label>
//         Email:
//         <input
//           value={form.email}
//           onChange={(e) => setForm({ ...form, email: e.target.value })}
//         />
//       </label>
//       <p>
//         {form.firstName} {form.lastName} {form.email}
//       </p>
//     </>
//   );
// }


// useRef
// function TextInputWithFocusButton() {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     // `current` points to the mounted text input element
//     inputEl.current.focus();
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// }

// export default TextInputWithFocusButton;


// Prop drilling
// function Main(props) {
//   return <Header msg={props.msg} />;
// }

// function Header(props) {
//   return (
//     <div style={{ border: "10px solid whitesmoke"}}>
//       <h1>Header here</h1>
//       <Wrapper msg={props.msg} />
//     </div>
//   )
// }

// function Wrapper(props) {
//   return (
//     <div style={{ border: "10px solid lightgray"}}>
//       <h2>Wrapper here</h2>
//       <Button msg={props.msg} />
//     </div>
//   )
// }

// function Button(props) {
//   return (
//     <div style={{ border: "20px solid orange"}}>
//       <h3>This is the Button component</h3>
//       <button onClick={() => alert(props.msg)}>Click me</button>
//     </div>
//   )
// }

// function MyApp() {
//   return <Main msg="I passed through the Header and the wrapper and i reached the Button component" />;
// }

// export default MyApp;


// Reduce Hook
import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === 'ride') return {money: state.money + 10};
  if (action.type === 'fuel') return {money: state.money - 50};
  return new Error();
}

function MyApp() {
  
  const initialState = { money: 100 };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <h1>Wallet: {state.money}</h1>
      <div>
        <button onClick={() => dispatch({type: 'ride'})}>
          A new customer
        </button>
        <button onClick={() => dispatch({type: 'fuel'})}>
          Refill the thank!
        </button>
      </div>
    </div>
  )
}

export default MyApp;
