import PlacesList from './pages/places/PlacesList';
import TransactionList from './pages/transactions/TransactionsList';

function App() {
  return (
    <div className="bg-amber-600 text-gray-900">
      <TransactionList />
      <PlacesList />
    </div>
  );
}

export default App;
