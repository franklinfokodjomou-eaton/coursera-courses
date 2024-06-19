// function Btn() {
//   const handleClick = () => {
//     console.log("Button clicked");
//   };
//   return (
//     <button onClick={handleClick} className="btn">
//       Click me
//     </button>
//   );
// }

// export default Btn;

function Btn() {
    const handleClick = () => {
      console.log("Mouse Over");
    };
    return (
      <button onMouseOver={handleClick} className="btn">
        Click me
      </button>
    );
  }
  
  export default Btn;