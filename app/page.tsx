import Hero from '@/components/Hero'
import QuickInfo from '@/components/QuickInfo'
import FeaturedServices from '@/components/FeaturedServices'
import LatestNews from '@/components/LatestNews'
import LibraryStats from '@/components/LibraryStats'
import fs from 'fs/promises'; // <--- PASTIKAN ADA
import path from 'path'; 

export default function Home() {
  return (
    <>
      <Hero />
      <QuickInfo />
      <FeaturedServices />
      <LatestNews />
    </>
  )
}