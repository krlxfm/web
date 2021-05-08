import { getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"
import AboutHeader from "../components/about"
import Head from 'next/head'
import Container from '../components/container'

export default function RecordLibe({data, sidePage}) {
  return (
    <Container>
    <Head>
    <title>
    Record Libe - KRLX 88.1 FM
    </title>
    </Head>
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
    <SideBar data={sidePage} />
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
        <AboutHeader />
        <div className="text-xl" dangerouslySetInnerHTML={{ __html: data.title }} />
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
  </div>
  </Container>
  )
}

export async function getStaticProps() {
  const data = await getPageByUri("/record-libe/")
  const sidePage = await getPageByUri("/side-bar/")
  if (!data) {
      return {
        notFound: true,
      }
    }
  return {
    props: {
    data,
    sidePage
    },
  }
}
