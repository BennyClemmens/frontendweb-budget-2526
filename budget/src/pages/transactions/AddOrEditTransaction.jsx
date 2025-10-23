import useSWR from 'swr';
import { getAll, save } from '../../api';
import TransactionForm from '../../components/transactions/TransactionForm';
import AsyncData from '../../components/AsyncData';
import { useParams } from 'react-router';
import useSWRMutation from 'swr/mutation';

export default function AddOrEditTransaction() {
  const {
    data: places = [],
    error: placesError,
    isLoading: placesLoading,
  } = useSWR(
    'places',
    getAll,
  );

  const {
    trigger: saveTransaction,
    error: saveError,
  } = useSWRMutation(
    'transactions',
    save,
  );

  const { id } = useParams();

  return (
    <div className='w-full max-w-sm'>
      <h1>{id ? 'Edit' : 'Add'} transaction</h1>

      <AsyncData
        error={saveError || placesError}
        loading={placesLoading}>

        <TransactionForm
          places={places}
          saveTransaction={saveTransaction}
        />

      </AsyncData>
    </div>
  );
}
