/*
Sort Personas alphabetically
import Personas
*/
import PersonaItem from '../components/personaItem'
export default function AlphaPersonas({ items }) {
  const allPersonas = items.sort(
  function(a, b) {
    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
    return 0;
  }
);
  return (
      <div>
        {allPersonas.map((item ) => (
          <div key={item.id}>
          <PersonaItem
            name={item?.name}
            image={item?.image}
            id={item?.id}
          />
          </div>
      ))}
      </div>
  )
}
