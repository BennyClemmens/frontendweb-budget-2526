import { IoStarSharp } from 'react-icons/io5';

const Star = () => <IoStarSharp color='gold' />;

export default function StarRating() {
  const stars = [...new Array(5)];
  return (
    <div className="flex">
      {stars.map((_, i) => (
        <Star key={i} />
      ))}
    </div>
  );
}
