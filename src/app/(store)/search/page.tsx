import Image from 'next/image'
import Link from 'next/link'

const Search = () => {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm">
        Resultados para: <span className="font-semibold">moletom</span>
      </p>

      <div className="grid grid-cols-3 gap-6">
        <Link
          href={`/product/moletom-never-stop-learning`}
          className="group relative flex justify-center items-end rounded-lg bg-zinc-900 overflow-hidden"
        >
          <Image
            src="/products/mouse-razer.png"
            className="group-hover:scale-105 transition-transform duration-500"
            width={480}
            height={480}
            quality={100}
            alt=""
          />

          <div className="absolute bottom-4 right-4 h-12 flex items-center gap-2 max-w-[280px] rounded-full border-2 border-zinc-500 bg-black/60 p-1 pl-5">
            <span className="text-sm truncate">MouseRazer</span>
            <span className="flex justify-center items-center h-full rounded-full bg-violet-500 px-4 font-semibold">
              {Number(129).toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
                minimumFractionDigits: 0,
                maximumFractionDigits: 0,
              })}
            </span>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Search
