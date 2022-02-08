export default function Garage({ cars }) {
  return cars.length > 0 ? (
    <div className="Garage">
      <ul>
        {cars.map((n) => (
          <li key={n}>{n}</li>
        ))}
      </ul>
    </div>
  ) : (
    <div className="Garage">
      <h2>Buit!</h2>
    </div>
  );
}
