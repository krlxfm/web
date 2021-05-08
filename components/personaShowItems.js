import ShowItem from '../components/showItem'
export default function PersonaShowItems({
  allShows,
  persona,
}){
var selectShows = []
  for (var i = 0; i < persona?._links.shows.length; i++) {
    selectShows.push(parseInt(persona?._links.shows[i].href.substring(32)))
  }
var personaShows = []
if(allShows) {
  for (var i = 0; i < allShows.items.length; i++) {
    if(selectShows.indexOf(allShows.items[i].id)!==-1) {
      personaShows.push(allShows.items[i])
    }
  }
}

if(selectShows.length>0){
  return(
  <div>
    {personaShows.map((item) => (
      <div key={item.id}>
      <ShowItem
        title={item?.title}
        id={item?.id}
        image={item?.image}
        startTime={item?.start}
        endTime={item?.end}
        oneTime={item?.one_off}
      />
      </div>
  ))}
  </div>
)
}
return("") }
