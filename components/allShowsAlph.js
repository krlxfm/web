/*
Sort Shows alphabetically
Importing PersonaShowItems
*/
import ShowItem from '../components/showItem'
export default function AlphShows({ allShows }) {
  if(!allShows){
    return "";
  }
  const sortedShows = allShows.sort(
  function(a, b) {
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
    return 0;
  }
);
  return (
      <div>
        {sortedShows.map((show) =>
          <div key={show.id}>
          <ShowItem
            title={show?.title}
            image={show?.image}
            dj={show?.since}
            id={show?.id}
            startTime={show?.start}
            endTime={show?.end}
            description={show?.description}
            oneTime={show?.one_off}
          />
          </div>
      )}
      </div>
  )
}
