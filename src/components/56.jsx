import audience from '/images/audience.webp'; 
export default function FiftySix() {
    return <div className='flex flex-col justify-between font-serif rounded-2xl bg-green-400 row-span-1 shadow-2xl'>
       <h1 className='text-[5rem] font-bold text-center'> {`>56%`}  </h1>
       <h2 className='font-semibold text-gray-700 text-center relative bottom-[1rem]'>faster audience growth </h2>
       <img className="m-[2rem]"src={audience}></img>
    </div>
}