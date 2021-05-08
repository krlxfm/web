import Link from 'next/link'

export default function FeaturesHeader() {

  return (
    <h2 className="text-2xl content-center">
      <Link as={`/personas`} href="/personas">
        <a className="hover:underline">DJs</a>
      </Link>&nbsp;&nbsp;-&nbsp;&nbsp;
      <Link as={`/shows`} href="/shows">
            <a className="hover:underline">Shows</a>
        </Link>
    </h2>
  )
}
