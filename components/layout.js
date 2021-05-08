import Footer from '../components/footer'
import Meta from '../components/meta'

export default function Layout({ preview, children, pageTitle }) {
  return (
    <>
      <Meta pageTitle={pageTitle}/>
      <div className="min-h-screen">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}
