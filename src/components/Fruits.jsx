export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  return (
    <div>
      {fruits.map((fruit) => (
        <h1>{fruit}</h1>
      ))}
    </div>
  );
}
