import React, { useEffect, useState } from "react";
import { Pacifico } from "next/font/google";
import WeatherIcon from "./WeatherIcon";

const pacifico = Pacifico({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font--pacifico",
});

const Header = () => {
    const [weather, setWeather] = useState<any>(null);
    const temp = weather ? weather!.main.temp : "";
    const iconCode = weather ? weather!.weather[0].icon : "";

    useEffect(() => {
        const fetchWeatherData = async (): Promise<void> => {
            try {
                const response = await fetch("/api/weather");
                if (!response.ok) {
                    throw new Error("Failed to fetch");
                }
                const data = await response.json();
                setWeather(data);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };
        fetchWeatherData();
    }, []);

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
