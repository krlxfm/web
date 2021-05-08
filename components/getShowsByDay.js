import ShowItem from '../components/showItem'
export default function GetShowsByDay({ shows, day }) {
  const allShows = shows?.items.sort(function(a,b){
  // Turn your strings into dates, and then subtract them
  // to get a value that is either negative, positive, or zero.
  return new Date(a.start) - new Date(b.start);
});
if(allShows) {
  return (
      <div>
        {allShows.map((item ) =>
          <div key={item.id}>
          <ShowItem
            title={item?.title}
            image={item?.image}
            dj={item?.since}
            id={item?.id}
            startTime={item?.start}
            endTime={item?.end}
            description={item?.description}
            oneTime={item?.one_off}
            s={false}
            showDate={true}
          />
        </div>
      )}
      </div>
  )
}
return ("")
}
