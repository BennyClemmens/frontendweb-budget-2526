import Transaction from './components/transactions/Transaction';
import { TRANSACTION_DATA } from './api/mock_data';
import PlacesList from './components/places/PlacesList';

function App() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-4">
        Mijn Budget App
      </h1>
      {TRANSACTION_DATA.map((trans) => (
        <Transaction
          key={trans.id}
          user={trans.user}
          place={trans.place}
          amount={trans.amount}
        />
      ))}
      <PlacesList />
    </div>
  );
}

export default App;
