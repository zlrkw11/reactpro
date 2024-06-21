export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      sweetness: "medium",
    },
    {
      name: "Mango",
      price: 25,
      sweetness: "high",
    },
    {
      name: "Banana",
      price: 5,
      sweetness: "high",
    },
    {
      name: "Orange",
      price: 15,
      sweetness: "medium",
    },
    {
      name: "Pineapple",
      price: 15,
      sweetness: "low",
    },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <li key={fruit.name}>
          {fruit.name} is ${fruit.price} and is {fruit.sweetness} in sugar
        </li>
      ))}
    </div>
    /*     <div>
      {fruits.map((fruit) => (
        <li key={fruit.name}>
          name: {fruit.name} price: {fruit.name} sweetness: {fruit.sweetness}
        </li>
      ))}
    </div> */
  );
}
