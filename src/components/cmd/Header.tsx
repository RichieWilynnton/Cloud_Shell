import React from "react";
import { Pacifico } from "next/font/google";
import WeatherIcon from "./WeatherIcon";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font--pacifico",
});

interface WeatherData {
    main: {
        temp: string;
    };
    weather: {
        icon: string;
    }[];
}

const Header = ({ weather }: { weather: WeatherData }) => { // Receive weather as a prop
    const temp = weather ? weather.main.temp : "";
    const iconCode = weather ? weather.weather[0].icon : "";

    return (
        <div className={pacifico.className}>
            <div className="flex justify-between">
                <span className="text-6xl">Welcome</span>
                {/* Render weather data if available */}
                {weather && (
                    <div>
                        <WeatherIcon temp={temp} iconCode={iconCode} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default Header;
