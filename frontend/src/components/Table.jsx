import "../css/table.css";

const Table = () => {
  return (
    <div className="card-table-container">
      <table className="table">
        <thead>
          <tr>
            <th>Set</th>
            <th>Name</th>
            <th>Card Number</th>
            <th>Quantity</th>
            <th>Market Value</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S&V</td>
            <td>Pikachu</td>
            <td>25</td>
            <td>1</td>
            <td>$3.00</td>
            <td className="actions">
              <ion-icon name="pencil"></ion-icon>
              <ion-icon name="trash"></ion-icon>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
