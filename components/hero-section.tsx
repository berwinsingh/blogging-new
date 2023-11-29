import { titillium_web } from './font';

const HeroImage = {
    backgroundImage: `url("/Woman Yellow Shirt Couch.jpg")`, 
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    backgroundPosition:"center",
}

export default function HeroSection() {
  return (
    <div className='h-hero mx-2 rounded-xl mt-2' style={HeroImage}>
        <div className="w-full bg-black bg-opacity-10 flex h-full p-4 rounded-xl">
            <h1 className={`${titillium_web.className} text-white text-8xl`}>Start you journey!</h1>
        </div>
    </div>
  )
}