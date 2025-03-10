import memojiImage from '@/assets/images/memoji-computer.png';
import Image from 'next/image';
import ArrowDown from '@/assets/icons/arrow-down.svg';
import grainImage from '@/assets/images/grain.jpg';
import StarIcon from '@/assets/icons/star.svg';
import { HeroOrbit } from '@/components/HeroOrbit'; // Adjust the import path as necessary
import SparkleIcon from '@/assets/icons/sparkle.svg'; // Adjust the import path as necessary

export const HeroSection = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0 overflow-x-clip">
      <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_70%),transparent]'>
        <div className='absolute inset-0 -z-30 opacity-5' style={{
          backgroundImage: `url(${grainImage.src})`
        }}></div>
        <div className='absolute inset-0 size-[620px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
        <div className='absolute inset-0 size-[820px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
        <div className='absolute inset-0 size-[1020px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
        <div className='absolute inset-0 size-[1220px] border-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border-emerald-300/5 shadow-[0_0_80px_inset] shadow-emerald-300/5'></div>
        
        <HeroOrbit size={800} rotation={-72} speed={60} childSpeed={10}>
  <StarIcon className="size-28 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={550} rotation={20} speed={40} childSpeed={15}>
  <StarIcon className="size-12 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={590} rotation={98} speed={50} childSpeed={20}>
  <StarIcon className="size-8 text-emerald-300" />
</HeroOrbit>
<HeroOrbit size={430} rotation={-14} speed={30} childSpeed={12}>
  <SparkleIcon className="size-8 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={440} rotation={79} speed={35} childSpeed={14}>
  <SparkleIcon className="size-5 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={530} rotation={178} speed={45} childSpeed={18}>
  <SparkleIcon className="size-10 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={710} rotation={144} speed={55} childSpeed={25}>
  <SparkleIcon className="size-14 text-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={720} rotation={85} speed={25} childSpeed={8}>
  <SparkleIcon className="size-3 rounded-full bg-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={520} rotation={-41} speed={20} childSpeed={6}>
  <SparkleIcon className="size-2 rounded-full bg-emerald-300/20" />
</HeroOrbit>
<HeroOrbit size={650} rotation={-5} speed={30} childSpeed={12}>
  <SparkleIcon className="size-3 rounded-full bg-emerald-300/20" />
</HeroOrbit>

      </div>
      <div className="container relative z-20">
        <div className='flex flex-col items-center'>
          <Image src={memojiImage}
            className='size-[100px]' 
            alt="Person peeking from behind laptop" />
          <div className="bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg">
            <div className='bg-green-500 size-2.5 rounded-full
            relative'>
              <div className='bg-green-500 absolute inset-0 rounded-full
              animate-ping-large'></div>
            </div>
            <div className='text-sm font-medium'>Available for new projects</div>
          </div>
        </div>
        <div className='max-w-lg mx-auto'>
          <h1 className='font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide'>Building Exceptional User Experiences</h1>
          <p className='mt-4 text-center text-white/60 md:text-lg'>
            I specialize in transforming designs into functional, high-performing 
            web applications. Explore more about me!.
          </p>
        </div>
        <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
          <button className='inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl transition duration-300 ease-in-out hover:bg-white hover:text-gray-900'>
            <span className='font-semibold'>Explore My Work</span>
            <ArrowDown className="size-4"/>
          </button>
          <button className='inline-flex items-center gap-2 border-white bg-white text-gray-900 h-12 px-6 rounded-xl transition duration-300 ease-in-out hover:bg-white/75 hover:text-gray'>
            <span>👋</span>
            <span className='font-semibold'>Connect with me</span>
          </button>
        </div>
      </div>
    </div>
  );
};