import growth from "/images/growth.webp";   

export default function Grow() {
    return <div className="flex col-span-2 bg-violet-500 text-center  justify-center items-center text-white text-[4rem]  rounded-2xl">
        <img className="m-[2rem]" src={growth}></img>
        <h1 className="leading-[4rem] font-serif">Grow follower with non-stop content.</h1>
    </div>
}