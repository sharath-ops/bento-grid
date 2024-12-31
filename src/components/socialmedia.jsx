import stars from "/images/fivestars.webp";

export default function SocialMedia() { 
    return(
        <div className="bg-violet-500 text-center flex flex-col justify-center items-center text-white text-[4rem]  rounded-2xl">
              <h1 className="lg:m-[5rem] text-[4rem] font-serif">social media  10x Faster with AI</h1>
                <img className="m-[1rem] " src={stars}></img>
                <h2 className="text-[2rem] mb-[30px]">Over 4,000  5-star reviews </h2>
        </div>
    )

}