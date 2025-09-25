import Transaction from './components/transactions/Transaction';
import TRANSACTION_DATA from './api/mock_data';

function App() {
  return (
    <div>
      {TRANSACTION_DATA.map((trans) => (
        <Transaction
          key={trans.id}
          user={trans.user}
          place={trans.place}
          amount={trans.amount}
        />
      ))}
    </div>
  );
}

export default App;
