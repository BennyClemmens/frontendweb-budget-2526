export default function Transaction() {
  const user = 'Benjamin';
  const amount = 200;
  const place = 'Dranken Geers';
  return (
    <div>
      {user} gaf €{amount} uit bij {place}
    </div>
  );
}
