import Hero from '@/components/Hero'
import QuickInfo from '@/components/QuickInfo'
import FeaturedServices from '@/components/FeaturedServices'
import LatestNews from '@/components/LatestNews'
import LibraryStats from '@/components/LibraryStats'

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <LibraryStats />
      <FeaturedServices />
      <LatestNews />
    </>
  )
}