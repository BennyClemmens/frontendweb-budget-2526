import { useState, useMemo, useEffect } from 'react';
import TransactionsTable from '../../components/transactions/TransactionsTable';
import * as transactionsApi from '../../api/transactions';
import AsyncData from '../../components/AsyncData';

export default function TransactionList() {
  const [transactions, setTransactions] = useState([]);
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await transactionsApi.getAll();
        setTransactions(data);
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, []);

  const filteredTransactions = useMemo(
    () =>
      transactions.filter((t) => {
        console.log('filtering, TODO: remove, logging for render learning...');
        return t.place.name.toLowerCase().includes(search.toLowerCase());
      })
    ,
    [search, transactions],
  );

  return (
    <>
      <h1>Transactions</h1>
      <div className='flex mb-3 w-1/2 gap-2 mx-4'>
        <input
          type='search'
          id='search'
          className='rounded grow-1 bg-white p-1 text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300
          focus:outline-gray-600'
          placeholder='Search'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type='button'
          className='py-2 px-2.5 rounded-md text-blue-600 border border-blue-600'
          onClick={() => setSearch(text)}
        >
          Search
        </button>
      </div>

      <div className='mt-4'>
        <AsyncData loading={loading} error={error} what='transactions'>
          {!error ? (
            <TransactionsTable transactions={filteredTransactions} />
          ) : null}
        </AsyncData>
      </div>

    </>
  );
}
