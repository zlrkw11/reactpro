import Fruit from "./Fruit";
export default function Fruits() {
  // const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
  const fruits = [
    {
      name: "Apple",
      price: 10,
      sweetness: "medium",
      soldout: false,
    },
    {
      name: "Mango",
      price: 25,
      sweetness: "high",
      soldout: false,
    },
    {
      name: "Banana",
      price: 5,
      sweetness: "high",
      soldout: true,
    },
    {
      name: "Orange",
      price: 15,
      sweetness: "medium",
      soldout: false,
    },
    {
      name: "Pineapple",
      price: 15,
      sweetness: "low",
      soldout: true,
    },
  ];
  return (
    <div>
      {fruits.map((fruit) => (
        <Fruit
          key={fruit.name}
          name={fruit.name}
          price={fruit.price}
          sweetness={fruit.sweetness}
          soldout={fruit.soldout}
        />
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
