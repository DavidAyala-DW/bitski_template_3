import {useEffect} from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Main from "../components/Main";
import ProductsGrid from "../components/Grid";
import Contact from "../components/Contact";
import { assignColors } from "../helpers";



const Home = ({products}) => {

  useEffect(() => {
    assignColors();
  }, []);

  return (
    <>

      <Head>
        <title>{process.env.NEXT_PUBLIC_SITE_TITLE}</title>
        <link rel="shortcut icon" href={`/${process.env.NEXT_PUBLIC_FAVICON}`} />
      </Head>
      
      <Hero />

      <ProductsGrid products={products}/>
      
      <Main />

      <Contact />
      
    </>
  );

};

export const getServerSideProps = async () => {

  const res = await fetch(process.env.NEXT_PUBLIC_API_KEY+"?all=true&limit=12&offset=0");
  const data = await res.json();

  return {
    props: {
      products: data.products
    },
  };
};


export default Home;
