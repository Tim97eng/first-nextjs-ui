import Footer from '../Footer'
import Navbar from '../Nabvar'


export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  )
}