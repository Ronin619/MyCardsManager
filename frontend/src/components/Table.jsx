const Table = () => {
  return (
    <div>
      <table>
        <tr>
          <th>Set</th>
          <th>Name</th>
          <th>Card Number</th>
          <th>Quantity</th>
          <th>Market Value</th>
          <th>Action</th>
        </tr>
      </table>
      <tbody>
        <tr>
          <td>S&V</td>
          <td>Pikachu</td>
          <td>25</td>
          <td>1</td>
          <td>$3.00</td>
          <td>
            <ion-icon name="create"></ion-icon>
            <ion-icon name="trash"></ion-icon>
          </td>
        </tr>
      </tbody>
    </div>
  );
};

export default Table;
