// Styling JSX elements

function Promo() {
  return (
    <div className="promo-section">
      <div>
        <h1 style={{color:"tomato", fontSize:"40px", fontWeight:"bold"}} >Don't miss this deal!</h1>
      </div>
      <div>
        <h2>
          Subscribe to my newsletter and get all the shop items at 50% off!
        </h2>
      </div>
    </div>
  );
};

function Promo2() {

  const styles = {
    color: "tomato",
    fontSize: "40px",
    fontWeight: "bold",
  }

  return (
    <div className="promo-section">
      <div>
        <h1 style={styles} >Don't miss this deal!</h1>
      </div>
      <div>
        <h2>
          Subscribe to my newsletter and get all the shop items at 50% off!
        </h2>
      </div>
    </div>
  );
};

export default Promo;