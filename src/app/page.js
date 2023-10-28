import Hero from './components/Hero'
import NextTopLoader from 'nextjs-toploader';


export default function Home() {
  return (
    <>
      <NextTopLoader />
      <Hero title={"LET'S NETFLIX AND CHILL"} imageUrl={"/home.svg"} />
    </>
  )
}
