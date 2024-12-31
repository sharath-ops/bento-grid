import consistent from '/images/consistant.webp';

export default function Maintain(){
    return <div className="flex flex-col items-center overflow-y-hidden bg-yellow-300">
        <h1 className='text-[3rem] font-bold m-[2rem] text-center'>Maintain a consistent posting schedule</h1>
        <img className='relative top-[5rem]' src={consistent}></img>    
    </div>
}