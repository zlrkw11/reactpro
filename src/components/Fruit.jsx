export default function Fruit({ name, price, sweetness }) {
  return (
    <li>
      {/* The fruit is {name} and it's ${price}, with {sweetness} sugar amount */}
      {price > 10 ? (
        <h3>
          The fruit is {name} and it's ${price}, with {sweetness} sugar amount
        </h3>
      ) : (
        ""
      )}
    </li>
  );
}
