const Place = ({ id, name, rating }) => {
  const handleClick = () => {
    const output = `you clicked the remove button from id ${id}`;
    console.log(output);
  };
  return (
    <div className="p-3 outline outline-black/5 rounded-md shadow-lg mb-4">
      <h5 className="text-xl font-medium mb-2">{name}</h5>
      <button className='mt-6 py-2 px-2.5 rounded-md bg-blue-600 text-white' onClick={handleClick}>Verwijder</button>
    </div>
  );
};

export default Place;
