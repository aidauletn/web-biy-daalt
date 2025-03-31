'use client'
import React,{ useState } from "react"; 
import { useRouter } from "next/navigation";
const useStateTask = () => {
    const router = useRouter();
    const [firstName, setFirstName] = useState("Suragch");
    return(
        <div className="bg-white h-screen flex justify-center">
            <a href="/"><div className="bg-black text-white absolute top-2 left-2 p-4 rounded-lg">BACK</div></a>
        <div className="mt-10 w-96 bg-white h-screen flex flex-row justify-center justify-evenly">
            <p className="text-black">Name:</p>
            <div className="p-0 border-2 border-black h-7 rounded-md w-29">
                <input placeholder="Name" className="text-black" onChange={e => setFirstName(e.target.value)}/>
            </div> 
            <p className="text-black">Hi?</p>
            {firstName == '' ? (
            <p className="text-black">Suragch?</p>
            ) : (
            <p className="text-black">{firstName}?</p>
            )} 
        </div>
        </div>
    );
};
export default useStateTask;
