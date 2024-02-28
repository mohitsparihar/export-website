import Header from '../components/Header'
import Footer from '../components/Footer'

const index = ({ children }) => {
  return (
    <div className='layout'>
        <Header />
        {children}
        <Footer />
    </div>
  )
}

export default index