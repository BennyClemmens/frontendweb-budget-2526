import Transaction from './Transaction';
import { TRANSACTION_DATA } from '../../api/mock_data';

export default function TransactionList() {
  return (
    <>
      <h1 className="text-4xl mb-4">Transactions</h1>
      {TRANSACTION_DATA.map((trans) => (
        <Transaction
          key={trans.id}
          user={trans.user}
          place={trans.place}
          amount={trans.amount}
        />
      ))}
    </>
  );
}
