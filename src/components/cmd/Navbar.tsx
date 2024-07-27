import React from "react";

const Navbar = () => {
    return (
            <div className=""> 
                <div className="text-gray-300 max-w-4xl mx-auto border-x-2 border-t-2 border-slate-800 rounded-t-md bg-slate-800 p-2 flex items-center justify-between">
                    <div className="flex">
                        <div className="h-3 w-3 rounded-full bg-gray-700"></div>
                        <div className="ml-1 h-3 w-3 rounded-full bg-gray-700"></div>
                        <div className="ml-1 h-3 w-3 rounded-full bg-gray-700"></div>
                    </div>
                    <div className="text-base italic font-bold"> Terminal </div>
                    <div className="flex">
                        <div className="h-3 w-3 rounded-full bg-red-500"></div>
                        <div className="ml-1 h-3 w-3 rounded-full bg-yellow-500"></div>
                        <div className="ml-1 h-3 w-3 rounded-full bg-green-500"></div>
                    </div>
                </div>
            </div>
    );
};

export default Navbar;
