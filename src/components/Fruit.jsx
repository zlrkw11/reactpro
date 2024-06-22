export default function Fruit({ name, price, sweetness }) {
  return (
    <div>
      The fruit is {name} and it's ${price}, with {sweetness} sugar amount
    </div>
  );
}
