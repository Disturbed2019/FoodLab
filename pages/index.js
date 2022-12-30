import Head from 'next/head'
import Hero from "../components/Hero";
import HeadlineCards from "../components/HeadlineCards";
import Food from "../components/Food";
import Category from "../components/Category";


export default function Home() {
  return (
    <>
      <Head>
        <title>FoodLab</title>
        <meta name="description" content="FoodLab" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <HeadlineCards />
      <Food />
      <Category />
    </>
  )
}
