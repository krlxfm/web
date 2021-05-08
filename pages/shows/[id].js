import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows, getShowByID, getPersonas, getPageByUri } from '../../lib/api'
import ShowPersonas from '../../components/showPersonas'
import ShowTime from '../../components/showTime'
import SideBar from "../../components/sideBar"
import Head from 'next/head'
import Container from '../../components/container'

export default function Show({ show, allPersonas, sidePage}) {
  const router = useRouter();
  if (!router.isFallback && !show?.id) {
    return <ErrorPage statusCode={404} />
  }
  return (
    <Container>
    <Head>
      <title>
        {show?.title} - KRLX 88.1 FM
      </title>
      <meta
        property="og:image"
        content={show?.image}
      />
    </Head>
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar data={sidePage} />
    </div>
  <div className="col-span-4 md:col-span-3 p-3" >
  <h1 className="text-2xl">{show?.title}</h1>
  <img
  src={show?.image}
  />
  <ShowTime
    startTime={show?.start}
    endTime={show?.end}
    oneTime={show?.one_off}
    showDayOfWeek={true}
  />
  <h1 className="text-xl" dangerouslySetInnerHTML={{ __html: show?.description }}></h1>
    <ShowPersonas
      show={show}
      allPersonas={allPersonas}
    />
</div>
</div>
</Container>
  )
}
export async function getStaticProps({ params}) {
  const data = await getShowByID(params.id)
  const allPersonas = await getPersonas()
  const sidePage = await getPageByUri("/side-bar/")
  if (!data) {
      return {
        notFound: true,
      }
    }
  return {
    props: {
      show: data,
      allPersonas,
      sidePage,
    },
  }
}

export async function getStaticPaths() {
  const allShows = await getShows()
  const showPaths = []
  var statement = ""
  for (var i = 0; i < allShows.items.length; i++) {
    statement = `/shows/${allShows.items[i].id}`
    showPaths.push({ params: { id: statement} } || [])
  }
  return {
    paths: showPaths,
    fallback: true,
  }
}
