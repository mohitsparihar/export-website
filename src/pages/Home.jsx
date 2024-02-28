import Layout from '../Layout'
import Hero from '../components/Hero'
import ProductRow from '../components/ProductRow';

const Home = () => {
  return <>
   <Layout>
    <Hero />
    <ProductRow category="smartphones" />
    <ProductRow category="laptops" />
   </Layout>
  </>
}

export default Home;