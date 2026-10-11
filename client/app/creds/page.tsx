export default function CredsPage()
 {
    return (
        <div className="flex items-center justify-center flex-col h-screen">
            <div className= "flex flex-col gap-3 p-6 w-80 border border-gray-200 rounded-lg">
                <span>Enter your code</span>
                <input className="border border-gray-400 rounded-md p-2" type="text" />
                <button className="cursor-pointer hover:bg-red-500 transition-all delay-100 bg-green-500 p-2 rounded-md ">Submit</button>
            </div>
        </div>
    )
}