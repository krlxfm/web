/*
About Header bar component
*/

import Link from 'next/link'

export default function AboutHeader() {
  return (
    <div className="text-xl overflow-hidden vertical-align">
    <Link as={`/about`} href="/about">
          <a  className="underline hover:no-underline">About</a>
      </Link>&nbsp;&nbsp;
      <Link as={`/board`} href="/board">
            <a  className="underline hover:no-underline">Board</a>
        </Link>&nbsp;&nbsp;
      <Link as={`/contact`} href="/contact">
        <a className="underline hover:no-underline">Contact</a>
      </Link>&nbsp;&nbsp;
      <Link as={`/history`} href="/history">
        <a className="underline hover:no-underline">History</a>
      </Link>&nbsp;&nbsp;
      <Link as={`/record-libe`} href="/record-libe">
        <a className="underline hover:no-underline">Record Libe</a>
      </Link>
      <br/>
    </div>
  )
}
