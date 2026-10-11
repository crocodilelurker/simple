export default function HomePage()
{
    return(
        <div className="flex flex-col  h-screen w-screen p-10 gap-4">
            <div className=" p-4  text-4xl" id="hello-box">
                Hello Coleman, Welcome to Simple Studio
            </div>
            <div className="text-lg p-4">
                Did you know about Leonardo's Mechanical Knight Design ?
            </div>
            <div className="flex flex-col gap-2 items-center justify-center h-screen" id="search-box-start">
                <div className="flex flex-row gap-2 " id="search-bar">  
                    <input className="border border-gray-400 rounded-md p-2 w-[600px]" placeholder="Find your topic or go random" type="text" />
                    <button className="border border-gray-500 rounded-xl cursor-pointer pl-3 pr-3 pt-1 pb-1">Random</button>
                    <button className="border border-gray-500 rounded-xl cursor-pointer pl-3 pr-3 pt-1 pb-1"> Search</button>
                </div>
                <div className="flex flex-row justify-center items-center gap-2" >
                   <button className="border border-gray-500 rounded-xl cursor-pointer pl-3 pr-3 pt-1 pb-1">AddFiles</button>
                   <button className="border border-gray-500 rounded-xl cursor-pointer pl-3 pr-3 pt-1 pb-1">AddLinks</button>
                   <button className="border border-gray-500 rounded-xl cursor-pointer pl-3 pr-3 pt-1 pb-1">AddText</button>
                </div>
            </div>
            <div className="">
                C
            </div>
        </div>
    )
}