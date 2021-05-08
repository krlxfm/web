import { getPageByUri } from '../lib/api'
import SideBar from "../components/sideBar"
import Head from 'next/head'
import Container from '../components/container'

export default function PublicFile({data, sidePage}) {
  return (
    <Container>
    <Head>
    <title>
    Public File - KRLX 88.1 FM
    </title>
    </Head>
    <div className="grid grid-cols-4 gap-4">
    <div className="col-span-4 md:col-span-1">
    <SideBar data={sidePage}/>
    </div>
  <div className="col-span-4 md:col-span-3 p-3">
  <br/>
    <div className="text-xl">{data.title}</div>
        <div dangerouslySetInnerHTML={{ __html: data.content }} />
  </div>
  </div>
  </Container>
  )
}

export async function getStaticProps() {
  const data = await getPageByUri("/public-file/")
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
