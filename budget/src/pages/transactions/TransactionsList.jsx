import { useState, useMemo, useCallback } from 'react';
import TransactionsTable from '../../components/transactions/TransactionsTable';
import useSWR from 'swr';
import { getAll, deleteById } from '../../api';
import AsyncData from '../../components/AsyncData';
import useSWRMutation from 'swr/mutation';
import { Link } from 'react-router';
import { IoAddOutline, IoSearchOutline } from 'react-icons/io5';

export default function TransactionList() {
  console.log('TransactionList: TODO: remove, logging for render learning...');
  const [text, setText] = useState('');
  const [search, setSearch] = useState('');

  const {
    data: transactions = [],
    isLoading,
    error,
  } = useSWR('transactions', getAll);

  const { trigger: deleteTransaction, error: deleteError } = useSWRMutation(
    'transactions',
    deleteById,
  );

  const filteredTransactions = useMemo(
    () =>
      transactions.filter((t) => {
        console.log('filteredTransactions: TODO: remove, logging for render learning...');
        return t.place.name.toLowerCase().includes(search.toLowerCase());
      })
    ,
    [search, transactions],
  );

  const handleDeleteTransaction = useCallback(
    async (id) => {
      await deleteTransaction(id);
      alert('Transaction is removed');
    },
    [deleteTransaction],
  );

  return (
    <>
      <h1>Transactions</h1>
      <div className='flex justify-between mb-3 gap-2'>   {/* 👈 */}
        <div className="w-1/2 flex gap-2">  {/* 👈 */}
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
            <IoSearchOutline />
          </button>
        </div>
        <Link to='/transactions/add' className='py-2 px-2.5 rounded-md text-white border border-blue-600 bg-blue-600'>
          <IoAddOutline />
        </Link>
      </div>

      <div className='mt-4'>
        <AsyncData loading={isLoading} error={error|| deleteError} what='transactions'>
          <TransactionsTable
            transactions={filteredTransactions}
            onDelete={handleDeleteTransaction}
          />
        </AsyncData>
      </div>

    </>
  );
}
