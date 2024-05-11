import Image from 'next/image'
import Link from 'next/link'

const Home = async () => {
  return (
    <div className="grid max-h-[860px] grid-cols-9 grid-rows-6 gap-6">
      <Link
        href="/"
        className="group relative col-span-6 row-span-6 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/shirts/moletom-ia-p-devs.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-14 right-14 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex justify-center items-center h-full rounded-full bg-violet-500 px-4 font-semibold">
            R$150
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/shirts/moletom-java.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-4 right-4 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex justify-center items-center h-full rounded-full bg-violet-500 px-4 font-semibold">
            R$150
          </span>
        </div>
      </Link>

      <Link
        href="/"
        className="group relative col-span-3 row-span-3 flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
      >
        <Image
          src="/shirts/mouse-razer.png"
          className="group-hover:scale-105 transition-transform duration-500"
          width={920}
          height={920}
          quality={100}
          alt=""
        />

        <div className="absolute bottom-4 right-4  h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
          <span className="text-sm truncate">Moletom Never Stop Learning</span>
          <span className="flex justify-center items-center h-full rounded-full bg-violet-500 px-4 font-semibold">
            R$150
          </span>
        </div>
      </Link>
    </div>
  )
}

export default Home
