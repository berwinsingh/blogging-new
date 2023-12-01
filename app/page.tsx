import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import { titillium_web } from '@/components/font'

export default function Home() {
  return (
    <main className="">
        <Header />
        <HeroSection/>
        <h2 className={`${titillium_web.className} font-bold text-2xl p-4`}>Recent blog posts</h2>
        <div id="blog-posts" className="p-4 mt-2">
            
        </div>
    </main>
  )
}
