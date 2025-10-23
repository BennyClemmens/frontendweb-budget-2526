import { useParams } from 'react-router';
import useSWR, { mutate } from 'swr';
import useSWRMutation from 'swr/mutation';
import { getById, deleteById } from '../../api';
import AsyncData from '../../components/AsyncData';
import TransactionsTable from '../../components/transactions/TransactionsTable';

const PlaceDetail = () => {
  const { id } = useParams();
  const idAsNumber = Number(id);

  const {
    data: place,
    error: placeError,
    isLoading: placeLoading,
  } = useSWR(id ? `places/${idAsNumber}` : null, getById);

  const { trigger: deleteTransaction, error: deleteError } = useSWRMutation(
    'transactions',
    deleteById,
    {
      onSuccess: () => mutate(`places/${idAsNumber}`),
    },
  );

  if (!place) {
    return (
      <div>
        <h1>Plaats niet gevonden</h1>
        <p>Er is geen plaats met id {id}.</p>
      </div>
    );
  }

  return (
    <div>
      <AsyncData loading={placeLoading} error={placeError || deleteError}>
        <h1>Place {place.name}</h1>
        <TransactionsTable
          transactions={place.transactions}
          onDelete={deleteTransaction}
        />
      </AsyncData>
    </div>
  );

};

export default PlaceDetail;
