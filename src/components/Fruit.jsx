export default function Fruit({ name, price, sweetness, soldout }) {
  return (
    <div>
      {/* The fruit is {name} and it's ${price}, with {sweetness} sugar amount */}
      <h3>
        The fruit is {name} and it's ${price}, with {sweetness} sugar amount
        {soldout ? " and it is sold out" : ""}
      </h3>
    </div>
  );
}
