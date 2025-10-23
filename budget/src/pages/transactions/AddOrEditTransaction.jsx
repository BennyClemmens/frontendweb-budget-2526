import useSWR from 'swr';
import { getAll } from '../../api';
import TransactionForm from '../../components/transactions/TransactionForm';
import AsyncData from '../../components/AsyncData';
import { useParams } from 'react-router';

export default function AddOrEditTransaction() {
  const {
    data: places = [],
    error: placesError,
    isLoading: placesLoading,
  } = useSWR('places', getAll);

  const { id } = useParams();

  return (
    <div className='w-full max-w-sm'>
      <h1>{id ? 'Edit' : 'Add'} transaction</h1>

      <AsyncData error={placesError} loading={placesLoading}>

        <TransactionForm places={places} />
      </AsyncData>
    </div>
  );
}
