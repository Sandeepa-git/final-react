import StarIcon from '@/assets/icons/star.svg';

const words = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className='py-16 lg:py-24 overflow-x-hidden overflow-y-visible'>
      {/* Rotated container with overflow handling */}
      <div className='bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3 -mx-1 overflow-hidden'>
        {/* Mask for fading edges */}
        <div className='flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
          {/* First set of words */}
          <div className='flex flex-none gap-4 py-3 animate-marquee whitespace-nowrap'>
            {words.map((word) => (
              <div key={word} className='inline-flex gap-9 items-center'>
                <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
          {/* Second set of words (duplicate for seamless looping) */}
          <div className='flex flex-none gap-4 py-3 animate-marquee whitespace-nowrap'>
            {words.map((word) => (
              <div key={word} className='inline-flex gap-9 items-center'>
                <span className='text-gray-900 uppercase font-extrabold text-sm'>{word}</span>
                <StarIcon className="size-6 text-gray-900 -rotate-12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};