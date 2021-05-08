import Link from 'next/link'
export default function ShowPersona({
  name,
  image,
  id,
  bio,
}) {
    return (
      <div className="pt-2">
        <img
        src={image}
        className="w-12 h-12 inline-block mr-3"
        />
        <Link as={`/personas/${id}`} href="/personas/[id]">
          <a
            className="text-2xl pt-4 hover:underline"
            dangerouslySetInnerHTML={{ __html: name }}
          ></a>
        </Link>
        <h4 dangerouslySetInnerHTML={{ __html: bio }} >
        </h4>
    </div>
    )
  }
