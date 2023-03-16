function NumbersList({ limit }) {
  const numbers = [];

  for (let i = 0; i <= limit; i++) {
    numbers.push(i);
  }

  return (
    <div className="NumbersList">
      <table>
        <tbody>
          {numbers.map((number) => (
            <tr key={number}>
              <td
                style={{ backgroundColor: number % 2 === 0 ? 'red' : 'white' }}
              >
                {number}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default NumbersList;
