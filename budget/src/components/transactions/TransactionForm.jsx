import { useForm } from 'react-hook-form';

const EMPTY_TRANSACTION = {
  id: undefined,
  amount: undefined,
  date: new Date(),
  user: {
    id: '',
    name: '',
  },
  place: {
    id: '',
    name: '',
  },
};

const toDateInputString = (date) => {
  // ISO String without the trailing 'Z' is fine 🙄
  // (toISOString returns something like 2020-12-05T14:15:74Z,
  // datetime-local HTML5 input elements expect 2020-12-05T14:15:74, without the (timezone) Z)
  //
  // the best thing about standards is that we have so many to chose from!
  if (!date) return null;
  if (typeof date !== Object) {
    date = new Date(date);
  }
  let asString = date.toISOString();
  return asString.substring(0, asString.indexOf('T'));
};

export default function TransactionForm({ places = [] }) {
  const transaction = EMPTY_TRANSACTION;

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      date: toDateInputString(transaction?.date),
      placeId: transaction?.place.id,
      amount: transaction?.amount,
      userId: transaction?.user.id,
    },
  });

  const onSubmit = (values) => {
    console.log(JSON.stringify(values));
    // Nieuwe transactie moet nog worden opgeslagen
    reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mb-3'>
          <label htmlFor='userId' className="block text-sm/6 font-medium text-gray-900">
            User id
          </label>
          <input
            {...register('userId')}
            id='userId'
            name='userId'
            type='number'
            className='rounded bg-white p-1 text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300
          focus:outline-blue-600 w-full'
            placeholder='userid'
            required
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='date' className="block text-sm/6 font-medium text-gray-900">
            Date
          </label>
          <input
            {...register('date')}
            id='date'
            name='date'
            type='date'
            className='rounded bg-white p-1 text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300
          focus:outline-blue-600 w-full'
            placeholder='date'
          />
        </div>

        <div className='mb-3'>
          <label htmlFor='places' className="block text-sm/6 font-medium text-gray-900">
            Place
          </label>
          <select
            {...register('placeId')}
            id='placeId'
            name='placeId'
            className="w-full appearance-none
           rounded-md bg-white py-1.5 pr-8 pl-3 text-base text-gray-900
           outline-1 -outline-offset-1 outline-gray-300 focus:outline-2
           focus:-outline-offset-2 focus:outline-blue-600 sm:text-sm/6"
            required>
            <option value='' disabled>
              -- Select a place --
            </option>
            {places.map(({ id, name }) => (
              <option key={id} value={id}>
                {name}
              </option>
            ))}
          </select>
        </div>

        <div className='mb-3'>
          <label htmlFor='amount' className="block text-sm/6 font-medium text-gray-900">
            Amount
          </label>
          <input
            {...register('amount')}
            id='amount'
            name='amount'
            type='number'
            className='rounded bg-white p-1 text-gray-900 placeholder:text-gray-400 outline-1 outline-gray-300
          focus:outline-blue-600 w-full'
            required
          />
        </div>

        <div className='flex justify-end'>
          <button type='submit' className='py-2 px-2.5 rounded-md text-white bg-blue-600'>
            Add/edit transaction
          </button>
        </div>
      </form>
    </>
  );
}
