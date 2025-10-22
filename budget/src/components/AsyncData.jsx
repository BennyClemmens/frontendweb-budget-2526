import Loader from './Loader';
import Error from './Error';

export default function AsyncData({
  loading,
  error,
  children,
  what= 'something',
}) {
  if (loading) {
    return <Loader what={what} />;
  }

  return (
    <>
      <Error error={error} />
      {children}
    </>
  );
}
