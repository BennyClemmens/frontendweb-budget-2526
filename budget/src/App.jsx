import Transaction from './components/transactions/Transaction';

function App() {
  const user = 'Benjamin';
  const amount = 200;
  const place = 'Dranken Geers';
  return (
    <div>
      <Transaction user={user} place={place} amount={amount} />
    </div>
  );
}

export default App;
