import post from "/images/createpost.webp";
export default function CreatePost() {
  return (<div className="row-span-1 font-bold bg-yellow-300 flex flex-col justify-evenly text-center rounded-2xl">
    <h1 className="m-[50px]  text-[2rem] lg:text-[4rem] ">Create and schedule content Quicker</h1>
    <img className="m-[50px]" src={post}></img>
  </div>)
}

