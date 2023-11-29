import { titillium_web } from "./font";
import { Button } from "./ui/button";
import Link from "next/link";

const HeroImage = {
  backgroundImage: `url("/Woman Yellow Shirt Couch.jpg")`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

export default function HeroSection() {
  return (
    <div className="h-hero mx-2 rounded-xl mt-2" style={HeroImage}>
      <div className="w-full bg-black bg-opacity-40 flex flex-col justify-end items-start h-full p-4 rounded-xl gap-4 pb-10">
        <h3 className={`${titillium_web.className} text-white text-lg font-semibold`}>
          Featured
        </h3>
        <h1 className={`${titillium_web.className} text-white text-6xl`}>
          From Thought to Impact: <br /> The Creative Process Unveiled
        </h1>
        <p className="text-white">
          Every writer's study is a realm where ideas come to life, transforming
          into stories that resonate and inspire. In this feature <br /> on
          ContentCanvas, we explore the journey from thought to impact,
          revealing how each keystroke weaves narratives that <br /> move hearts
          and stir minds. Join us in the art of turning fleeting thoughts into
          lasting impressions, one word at a time.
        </p>
        <div className="flex gap-4">
            <Link href="/sign-in">
                <Button className="bg-blue-700 hover:bg-blue-800">Get Started</Button>
            </Link>
            <Link href={"/about"}>
                <Button className="border-blue-700 border-2 bg-transparent hover:bg-blue-800">Learn More</Button> 
            </Link>
        </div>
      </div>
    </div>
  );
}