import scheduleimage from "/images/schedule.webp";

export default function Schedule(){
    return <div className="overflow-x-hidden flex flex-col justify-between font-serif hover:font-sans rounded-2xl bg-blue-400 row-span-2">
        <h1 className="text-[4rem] font-semibold mt-[2rem] ml-[2rem]">Schedule to social media</h1>
        <img className="relative left-[110px]" src={scheduleimage}></img>
        <h2 className="text-[2rem] font-medium m-[2rem]">Optimise post timings to publish content at the perfect time for your audience</h2>
    </div>
}