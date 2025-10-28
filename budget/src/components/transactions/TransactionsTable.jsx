import Transaction from './Transaction';
import { useContext } from 'react';
import { ThemeContext } from '../../main';

function TransactionsTable({ transactions, onDelete }) {
  const { darkmode } = useContext(ThemeContext);
  if (transactions.length === 0) {
    return (
      <div className='p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50'>There are no transactions yet.</div>
    );
  }

  return (
    <table className={`${darkmode?'dark ':''}table-auto w-full border-collapse mb-4 dark:bg-black dark:text-white`}>
      <thead>
        <tr className="border-b-2 border-gray-300">
          <th className="text-start py-2">Date</th>
          <th className="text-start py-2">User</th>
          <th className="text-start py-2">Place</th>
          <th className='text-end py-2'>Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((trans) => (
          <Transaction
            key={trans.id}
            id={trans.id}
            amount={trans.amount}
            date={trans.date}
            place={trans.place}
            user={trans.user}
            onDelete={onDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default TransactionsTable;
