import Link from 'next/link'
export default function PersonaItem({
name,
  image,
  id,
}){
  if(id) {
    return (
      <div className="pt-2" key={id}>
        <img
        src={image}
        className="w-12 h-12 rounded-full inline-block mr-3"
        />
          <Link as={`/personas/${id}`} href="/personas/[id]">
            <a
              className="text-2xl pt-4 hover:underline"
              dangerouslySetInnerHTML={{ __html: name }}
            ></a>
          </Link>
    </div>
    )
  }
  return ("")
}
