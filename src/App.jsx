import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];
  return (
    <div className="App">
      <Hello name="ZL" message="Wind" emoji="😎" seatNumber={seatNumbers} />
    </div>
  );
}

export default App;
