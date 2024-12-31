import usingai from '/images/usingai.webp';
export default function WriteUrContent() {
    return <div className='text-[2rem] font-serif flex-col flex rounded-2xl items-center justify-between bg-yellow-400 row-span-1'>
        <h1 className='m-[2rem]'>write your content using AI</h1>
        <img className="m-[1rem] w-[70%]"src={usingai}></img>
    </div>
}