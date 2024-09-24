export default function CardBalance() {
    return(
        <div className="w-11/12 md:w-10/12 md:h-40 2xl:w-4/12 h-24 bg-orange-400 rounded-3xl p-8 flex justify-between items-center">
            <div>
                <p className="text-white text-sm md:text-2xl">My balance</p>
                <p className="text-white font-semibold text-3xl md:text-5xl">$921.48</p>
            </div>
            <div className="flex justify-center items-center">
                <div className="w-10 md:w-20 md:h-20 h-10 border-2 border-white rounded-full z-10"></div>
                <div className="w-10 md:w-20 md:h-20 h-10 border-2 border-amber-950 bg-amber-950 rounded-full -translate-x-6"></div>
            </div>
        </div>
    )
}