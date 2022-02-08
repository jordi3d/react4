export default function Garage({ cars }) {
  return num2 === 0 ? (
    <div className="Divisio">
      <h2>Divisió per 0</h2>
    </div>
  ) : (
    <div className="Divisio">
      <h2>{num1 / num2}</h2>
    </div>
  );
}
