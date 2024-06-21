import Hello from "./components/Hello";

function App() {
  const seatNumbers = [1, 4, 7];
  const person = {
    name: "Ray",
    message: "Hi",
    food: "noodles",
    seatNumbers: [1, 1, 1],
  };

  return (
    <div className="App">
      <Hello person={person} />
    </div>
  );
}

export default App;
