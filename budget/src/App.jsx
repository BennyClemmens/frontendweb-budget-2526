import Transaction from './components/transactions/Transaction';
import TRANSACTION_DATA from './api/mock_data';

function App() {
  const {user, amount, place} = TRANSACTION_DATA[0];
  return (
    <div>
      <Transaction user={user} place={place} amount={amount} />
    </div>
  );
}

export default App;
