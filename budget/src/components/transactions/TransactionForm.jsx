import {
  useForm,
  FormProvider,
} from 'react-hook-form';
import {
  useNavigate,
  Link,
} from 'react-router';
import LabelInput from '../LabelInput';
import SelectList from '../SelectList';

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

const validationRules = {
  userId: {
    required: 'User is required',
    min: { value: 1, message: 'UserId must be minimum 1' },
    valueAsNumber:true,
  },
  date: {
    required: 'Date is required',
    valueAsDate: true,
    validate: (value) => {
      if (value >new Date()) return 'Date cannot be in the future';
      return null;
    },
  },
  placeId: {
    valueAsNumber: true,
    required: 'Place is required',
  },
  amount: {
    required: 'Amount is required',
    valueAsNumber: true,
    validate: (value) => {
      if (value === 0) return '0 is not a valid amount';
      return null;
    },
  },
};

export default function TransactionForm({
  places = [],
  transaction = EMPTY_TRANSACTION,
  saveTransaction,
}) {
  const navigate = useNavigate();

  // const { register, handleSubmit, formState: { errors, isValid } } = useForm({
  const methods = useForm({
    mode: 'onBlur',
    defaultValues: {
      date: toDateInputString(transaction?.date),
      placeId: transaction?.place.id,
      amount: transaction?.amount,
      userId: transaction?.user.id,
    },
  });

  const { handleSubmit, formState: { isValid, isSubmitting } } = methods;

  const onSubmit = async (values) => {
    if (!isValid) return;
    console.log(JSON.stringify(values));

    await saveTransaction({
      id: transaction?.id,
      ...values,
    }, {
      throwOnError: false,
      onSuccess: () => navigate('/transactions'),
    });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <LabelInput
          labelText="UserId"
          inputName="userId"
          validationRules={validationRules.userId}
          inputId="userId"
          inputType="number"
          inputPlaceholder="userid"
          data-cy="user_input"
        />
        <LabelInput
          labelText="Date"
          inputName="date"
          validationRules={validationRules.date}
          inputId="date"
          inputType="date"
          inputPlaceholder="date"
          data-cy="date_input"
        />
        <SelectList
          label='Place'
          name='placeId'
          placeholder='---select a place---'
          items={places}
          validationRules={validationRules.placeId}
          data-cy="place_input"
        />
        <LabelInput
          labelText="Amount"
          inputName="amount"
          validationRules={validationRules.amount}
          inputId="amount"
          inputType="number"
          inputPlaceholder="amount"
          data-cy="amount_input"
        />

        <div className='flex justify-end'>
          <button
            type='submit'
            disabled={isSubmitting}
            className='primary'
            data-cy="submit_transaction"
          >
            {transaction?.id ? 'Save' : 'Add'} transaction
          </button>
          <Link
            disabled={isSubmitting}
            className='secondary ml-2'
            to='/transactions'
          >
            Cancel
          </Link>
        </div>
      </form>
    </FormProvider>
  );
}
