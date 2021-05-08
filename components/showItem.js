import Link from 'next/link'
import ShowTime from '../components/showTime'

export default function ShowItem({
  title,
  image,
  dj,
  id,
  startTime,
  endTime,
  description,
  oneTime,
  showDayOfWeek=true,
  showDate=false,
  showTimeZone=false,
  s=true
}){
  if(id) {
    return (
      <div className="pt-2">
        <img
        src={image}
        className="w-12 h-12 inline-block mr-3"
        />
        <Link as={`/shows/${id}`} href="/shows/[id]">
          <a
            className="text-2xl pt-4 hover:underline"
            dangerouslySetInnerHTML={{ __html: title }}
          ></a>
        </Link>
        <h2>
        <ShowTime
          startTime={startTime}
          endTime={endTime}
          oneTime={oneTime}
          showDayOfWeek={showDayOfWeek}
          showDate={showDate}
          showTimeZone={showTimeZone}
          s={s}
          />
          </h2>
        <h4 dangerouslySetInnerHTML={{ __html: description }} >
        </h4>
    </div>
    )
  }
  return ("")
}
