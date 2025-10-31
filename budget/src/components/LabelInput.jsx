import { useFormContext } from 'react-hook-form';

export default function LabelInput(
  {
    labelText,
    inputName,
    validationRules,
    inputId,
    inputType,
    inputPlaceholder,
    ...rest
  },
){
  const {
    register,
    formState: {
      errors,
      isSubmitting,
    },
  } = useFormContext();

  return (
    <div className='mb-3'>
      <label htmlFor='userId' className="block text-sm/6 font-medium text-gray-900">
        {labelText}
      </label>
      <input
        {...register(inputName, validationRules)}
        id={inputId}
        name={inputName}
        type={inputType}
        disabled={isSubmitting}
        className='rounded bg-white p-1 text-gray-900 placeholder:text-gray-400
        outline-1 outline-gray-300 focus:outline-blue-600 w-full dark:bg-gray-800
        dark:text-white'
        placeholder={inputPlaceholder}
        {...rest}
      />
      {errors[inputName] && <p className="text-red-500 text-sm mt-1">{errors[inputName].message}</p> }
    </div>
  );
}
