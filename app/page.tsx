import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import ScrollVelocity from "@/components/ScrollVelocity";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">

      {/* ini cursor*/}
      <SplashCursor />

      <div className="absolute top-0 right-0 left-0 left-0 bottom-0 w-full h-full">
      <Squares 
      speed={0.5} 
      squareSize={50}
      direction='diagonal' // up, down, left, right, diagonal
      borderColor='#F1FFB2'
      hoverFillColor='#C6F10E'
      />
      </div>
      <div className="w-full h-screen">
        <div className="grid grid-cols-12 h-full">

          {/* Bagian teks kiri */}
          <div className="col-span-6 flex flex-col justify-center gap-6 pl-4">
  
  {/* Judul kecil + rotating text */}
  <AnimatedContent
    distance={150}
    direction="horizontal"
    reverse={false}
    duration={1.2}
    ease="bounce.out"
    initialOpacity={0.2}
    animateOpacity
    scale={1.1}
    threshold={0.2}
    delay={0.3}
  >
    <h1 className="text-2xl text-white font-bold">I'm Ready For Job</h1>
    <RotatingText
      texts={[
        "Web Development",
        "Web Design",
        "Web Programing",
        "Ai Development",
        "Akuntansi",
      ]}
      mainClassName="px-2 sm:px-2 md:px-3 bg-[#A0CF26] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
      staggerFrom={"last"}
      initial={{ y: "100%" }}
      animate={{ y: 0 }}
      exit={{ y: "-120%" }}
      staggerDuration={0.025}
      splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
      transition={{ type: "spring", damping: 30, stiffness: 400 }}
      rotationInterval={2000}
    />
  </AnimatedContent>

  {/* Nama & posisi */}
  <div className="flex flex-col items-start gap-2">
    <SplitText
      text="I'm Fransico Gilbert"
      className="text-6xl font-semibold text-left-[#A0CF26] text-white"
      delay={150}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      threshold={0.2}
      rootMargin="-50px"
    />
    <SplitText
      text="Full Stack Developer"
      className="text-6xl font-semibold text-left text-[#A0CF26]"
      delay={75}
      ease="power3.out"
      splitType="chars"
      from={{ opacity: 0, transform: "translate3d(0,50px,0)" }}
      to={{ opacity: 1, transform: "translate3d(0,0,0)" }}
      threshold={0.2}
      rootMargin="-50px"
    />
    </div>

    {/* Deskripsi */}
    <BlurText
      text="A highly motivated student of Accounting Information Systems with a strong passion for combining financial accuracy and modern technology. Proficient in financial reporting, accounting software, data analysis, and full-stack web development. Experienced in designing and building web-based financial systems using tools such as Accurate, Zahir, MySQL, HTML, CSS, PHP, and Laravel. Eager to contribute innovative digital solutions in the field of accounting and finance."
      delay={50}
      animateBy="words"
      direction="top"
      className="text-xl text-white max-w-2xl"
      />
    </div>


          {/* Bagian kanan */}
          <div className="col-span-6 flex items-center justify-center">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
          </div>
        </div>
        <div className="w-full min-h-screen text-[#A0CF26] text-white">
        <ScrollVelocity
          texts={['Saya Fransisco Gilbert', 'Mari Kita Belajar Bareng Tentang React']}
        />
        </div>
      </div>
    </div>
  );
}
