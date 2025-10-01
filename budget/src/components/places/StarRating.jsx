import { IoStarSharp } from 'react-icons/io5';

const Star = ({ selected = false, index }) => {
  const handelClick = () => {
    console.log(`you clicked star with index ${index}`);
  };
  return (
    <IoStarSharp color={selected ? 'gold' : 'grey'} onClick={handelClick} />
  );
};

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  const stars = [...new Array(totalStars)];
  return (
    <>
      <div className="flex">
        {stars.map((_, i) => (
          <Star key={i} selected={selectedStars > i} index={i}/>
        ))}
      </div>
      <p className="text-gray-700 mt-2">
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
