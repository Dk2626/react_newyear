import "./App.css";
import "./script";

function App() {
  return (
    <div className="container">
      <div className="imgBx"></div>
      <div className="countdownBx">
        <h2>
          countdown to New Year
          <br />
          <span>
            20<i>20</i>
          </span>
        </h2>
        <div className="countdown">
          <div id="day">NA</div>
          <div id="hour">NA</div>
          <div id="minute">NA</div>
          <div id="second">NA</div>
        </div>
      </div>
    </div>
  );
}

export default App;
