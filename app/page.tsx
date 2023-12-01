import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import { titillium_web } from '@/components/font'
import BlogPreviewCard from '@/components/blog-preview'

export default function Home() {
  return (
    <main className="">
        <Header />
        <HeroSection/>
        <h2 className={`${titillium_web.className} font-bold text-2xl p-4`}>Recent blog posts</h2>
        <div id="blog-posts" className="p-4 mt-2 flex flex-wrap">
            <BlogPreviewCard />
        </div>
    </main>
  )
}
