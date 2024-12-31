import plactform from "/images/accounts.webp";

export default function Accounts() {

    return(<div className="overflow-hidden flex flex-col justify-evenly font-sans font-semibold rounded-2xl shadow-2xl row-span-1">
        <img className="mt-[0.75rem] relative left-[5rem] shadow-xl rounded-lg " src={plactform}></img>
        <h1 className="text-[4rem] leading-[4rem] mt-[1rem] ml-[3rem]"> Manage multiple accounts and platforms</h1>
    </div>)
}