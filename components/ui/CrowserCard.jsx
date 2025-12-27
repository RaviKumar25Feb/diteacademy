import Image from "next/image"

function CrowserCard({ company, img, name }) {
  return (
    <div
      className="
        bg-white rounded-xl shadow-sm flex flex-col justify-around items-center
        shrink-0
        w-[140px] h-[120px] text-[10px] 
        sm:w-[180px] sm:h-[160px] sm:text-xs
        md:w-[220px] md:h-[240px] md:text-sm
        p-3
        "
    >
      <p className="text-gray-500 text-xl font-semibold">{company}</p>
      <Image
        loading="lazy"
        width={50}
        height={50}
        src={img}
        alt={name}
        className="sm:w-15 sm:h-15 md:w-20 md:h-20 object-cover rounded-full"
      />
      <p className="font-semibold">{name}</p>
    </div>
  )
}

export default CrowserCard
