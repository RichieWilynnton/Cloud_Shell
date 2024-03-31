import React from "react";

const Navbar = () => {
    return (
        <div>
            <div>
                <div className="flex justify-between items-center bg-gray-800 p-2">
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
        </div>
    );
};

export default Navbar;
