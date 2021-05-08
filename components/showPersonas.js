import ShowPersona from '../components/showPersona'
export default function ShowPersonas({
  allPersonas,
  show,
}){
var selectPersonas = []
  for (var i = 0; i < show?._links.personas?.length; i++) {
    if(148107!==parseInt(show?._links.personas[i].href.substring(35))) {
      selectPersonas.push(parseInt(show?._links.personas[i].href.substring(35)))
    }
  }
var showPersonas = []
for (var i = 0; i < allPersonas?.items.length; i++) {
  if(selectPersonas.indexOf(allPersonas?.items[i].id)!==-1) {
    showPersonas.push(allPersonas?.items[i])
  }
}
if(showPersonas.length>0){
  return(
  <div>
    {showPersonas.map((item) => (
      <div key={item.id}>
      <ShowPersona
        name={item?.name}
        id={item?.id}
        image={item?.image}
        bio={item?.bio}
      /> </div>
  ))}
  </div>
)
}
return(<h4 className="text-l">
    Looking to edit your show page? Create a Spinitron Account to edit your show page.
    </h4>)
}
