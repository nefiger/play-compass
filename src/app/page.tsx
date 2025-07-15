import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="bg-cream text-forest flex flex-col min-h-screen">
      <Image
        src="/assets/grass.svg"
        alt=""
        width={1440}
        height={120}
        className="w-full h-auto"
        priority
      />
      <section className="flex flex-col items-center py-12 text-center flex-grow gap-4">
        <Image
          src="/assets/logo.svg"
          alt="Play Compass"
          width={300}
          height={150}
          className="w-48 md:w-[300px] h-auto"
        />
        <Image
          src="/assets/tagline.svg"
          alt="Helping grown-ups find their way back to wonder"
          width={400}
          height={80}
          className="w-72 md:w-[400px] h-auto"
        />
      </section>
      <div className="flex justify-center">
        <Image
          src="/assets/dotted-arrow.svg"
          alt="decorative arrow"
          width={200}
          height={100}
          className="w-32 md:w-48 h-auto"
        />
      </div>
      <Image
        src="/assets/grass.svg"
        alt=""
        width={1440}
        height={120}
        className="w-full h-auto rotate-180 mt-auto"
      />
    </div>
  )
}
