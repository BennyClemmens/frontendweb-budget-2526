import { IoTrashOutline } from 'react-icons/io5';
import StarRating from './StarRating';
import { Link } from 'react-router';
import { memo } from 'react';

const MemoizedPlace = memo(function Place({ id, name, rating, onDelete = (f) => f, onRate = (f) => f }) {

  const handleRate = (newRating) => {
    // console.log(`rating was clicked with ${newRating}`);
    onRate({id, rating: newRating});
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <div className="p-3 outline outline-black/5 rounded-md shadow-lg mb-4">
      <h5 className="text-xl font-medium mb-2">
        <Link className="text-blue-600 underline" to={`/places/${id}`}>{name}</Link>
      </h5>
      <button className='mt-6 py-2 px-2.5 rounded-md bg-blue-600 text-white' onClick={handleDelete}><IoTrashOutline />
      </button>
      <StarRating
        selectedStars={rating}
        onRate={handleRate}
      />
    </div>
  );
});

export default MemoizedPlace;
