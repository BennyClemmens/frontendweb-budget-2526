import { PLACE_DATA } from '../../api/mock_data';
import Place from './Place';

const PlacesList = () => {
  const places = PLACE_DATA;
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-3">
      {places
        .sort((a, b) =>
          a.name.toUpperCase().localeCompare(b.name.toUpperCase()),
        )
        .map((p) => (
          <div key={p.id}>
            <Place {...p} /> // id, name, rating
          </div>
        ))}
    </div>
  );
};

export default PlacesList;
