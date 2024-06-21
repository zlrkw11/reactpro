export default function Fruits() {
  const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruit}>{fruit}</li>
      ))}
    </div>
  );
}
