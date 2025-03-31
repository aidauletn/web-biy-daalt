"use client";
import { serializeUseCacheCacheStore } from "next/dist/server/resume-data-cache/cache-store";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

const data = [
  {
    id:1,
    firstName:"Aidaulet",
    lastName:"Nurka",
    job: "Boss",
    image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQJe8Jlo65oJeaQ2e9U0x3Hyao-SqMMNr2o-R1c-a7bTKapg8P0uOSb5586lSGmOBbgK1_NB50jPUKqTscGB1ISc6clvm_HB_qlirO-Eg",
    items: [{id:0, name:"No1"},{id:1, name:"all good"}]
  },
  {
    id:2,
    firstName:"ayden-anand",
    lastName:"medku",
    job: "coffee zoogch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ3ne14YOXuuFUP8xH9YgoK0Wz4GVKOSbJ9g&s",
    items: [{id:2, name:"furry costume"},{id:3, name:"20$"}]
  },
  {
    id:3,
    firstName:"anduul",
    lastName:"batsukh",
    job: "jolooch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCaHs6C-gpXL5ioN7wQLzYT-lCdYEZ4Uck_A&s",
    items: [{id:0, name:"meth"},{id:1, name:"lighter"}]
  },
  {
    id:4,
    firstNamee:"Serjee",
    lastName:"omgd",
    job: "coder",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8e7PU8iIGiGjpxLzMWjgDH-63M4Rt43TnQQ&s://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"code"},{id:1, name:"goth"}]
  },
  {
    id:5,
    firstName:"Telmuun",
    lastName:"Tserenbajir",
    job: "hacker",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzV3z0P97taBKjxcEzSR6foZD7-SmxTdxIzA&s://i.pinimg.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"cool"},{id:1, name:"pretty"}]
  },
  {
    id:6,
    firstName:"ysui",
    lastName:"medku",
    job: "nygtlan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqbkrgPgfJALt66EV7wH8OSjLsPE--cEOdA&s.com/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"Nomoi"},{id:1, name:"dancer"}]
  },
  {
    id:7,
    firstName:"anand",
    lastName:"martcce",
    job: "jolooch",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMRMNNN2jsfkmKXpep9ogCVWBPbxx6nzyaSg&s/originals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"cool"},{id:1, name:"Basketball"}]
  },
  {
    id:8,
    firstName:"hulan",
    lastName:"bas medku",
    job: "nygtlan",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrsNEwBtV4Gh99eWaXrBPol47kaN29pj57CA&s/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"good"},{id:1, name:"dancer"}]
  },
  {
    id:9,
    firstName:"Khantushig",
    lastName:"Ujinguud",
    job: "didy",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHkaRH9qOoJTINwXxv7M-wp_kwcepY2Mpe7w&siginals/41/f7/dd/41f7dd66257ec0914e9267e4dcbc76ed.jpg",
    items: [{id:0, name:"hagii"},{id:1, name:"buiglegc"}]
  },
  {
    id:10,
    firstName:"Naranerdene",
    lastName:"sanlaa",
    job: "baruun hol",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG6IalmIySIOfNHwuhdO-k233TkxlIH3_12g&s",
    items: [{id:0, name:"MAth"},{id:1, name:"Gomo"}]
  },
]
export default function Home() {
        const router = useRouter()
  const [val, setVal] = useState(" ");
  const [togle, setTogle] = useState(true);
  const searchFilter =(array) =>{
    return array.filter(
      (el) => (el.firstName+el.lastName).toLowerCase().includes(val.toLocaleLowerCase())
    )
  }
  const filtered = searchFilter(data)
  const handleSearch = (e) =>{
    setVal(e.target.value);
  };
  return (
<div className="p-10 bg-grey w-screen h-screen">
      <div className="flex flex-row w-full mx-auto mb-5 justify-between">
        <input
            type="text"
            placeholder="Search users..."
            value={val}
            onChange={handleSearch}
            className="w-1/4 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none placeholder-black text-black focus:ring-2 focus:ring-blue-500"
          />
          <button className="" onClick={() => setTogle(!togle)}>Toggle</button>
          <button onClick={()=> router.back() }>Back</button>
      </div>
      {togle ? (<div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-24">
      {filtered.length >0 ? (
      filtered.map((element) => (
          <div
            key={element.id}
            className="w-84 h-84 flex flex-col p-5 rounded-lg text-black shadow-xl border-black bg-slate-200 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110"
          >
            <div
            className="w-full h-1/2">
<img
              src={element.image}
              className=" w-full h-full" 
            />
            </div>

            <div className="text-black ml-2">
              <p className="text-black">Firstname: {element.firstName}</p>
            </div>
            <p className="text-black ml-2">Lastname: {element.lastName}</p>
            <p className="text-blue-700 ml-2">Job: {element.job}</p>
            <div className="mt-2 ml-2">
              <p className="text-green-400 font-bold">Items:</p>
              <ul className="list-disc ml-5 text-black">
                {element.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))):(<p className="text-red-500 text-center text-xl col-span-full">Can't find the user</p>)}
      </div>): (<div className="grid grid-cols-2   w-full">
      {filtered.length >0 ? (
      filtered.map((element) => (
          <div
            key={element.id}
            className="w-full h-60 flex flex-row p-5 text-black  shadow-md border-black border-2 bg-slate-200 "
          >
            <div
            className="w-1/2 h-full">
<img
              src={element.image}
              className=" w-full h-full" 
            />
            </div>
            <div className="flex flex-col">
            <div className="text-black mb-2 ml-2">
              <p className="text-black">Firstname: {element.firstName}</p>
            </div>
            <p className="text-black ml-2">Lastname: {element.lastName}</p>
            </div>
            <p className="text-blue-700 ml-3">Job: {element.job}</p>
            <div className=" ml-5">
              <p className="text-green-400 font-bold">Items:</p>
              <ul className="list-disc ml-5 text-black">
                {element.items.map((item) => (
                  <li key={item.id}>{item.name}</li>
                ))}
              </ul>
            </div>
          </div>
        ))):(<p className="text-red-500 text-center text-xl col-span-full">Can't find the user</p>)}
      </div>)}
      </div>
      
  );
}
