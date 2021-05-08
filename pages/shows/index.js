import { useRouter, Link } from 'next/router'
import ErrorPage from 'next/error'
import { getShows, getPageByUri} from '../../lib/api'
import AlphShows from '../../components/allShowsAlph'
import FeaturesHeader from '../../components/features'
import SideBar from "../../components/sideBar"
import Head from 'next/head'
import Container from '../../components/container'

export default function listOfShows({ items, sidePage }) {
  return (
    <Container>
    <Head>
    <title>
    Shows - KRLX 88.1 FM
    </title>
    </Head>
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
      <SideBar data={sidePage} />
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
  <FeaturesHeader />
    <AlphShows
      items={items}
    />
</div>
</div>
</Container>
  )
}
export async function getStaticProps({ params, preview = false, previewData }) {
  const allShows = await getShows()
  const sidePage = await getPageByUri("/side-bar/")
  if (!allShows) {
      return {
        notFound: true,
      }
    }
  return {
    props: {
      preview,
      items: allShows?.items,
      sidePage
    },
  }
}
