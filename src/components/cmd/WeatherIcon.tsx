import React, { useEffect } from "react";

const WeatherIcon = ({
    temp,
    iconCode,
}: {
    temp: string;
    iconCode: string;
}) => {
    const imageUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    return (
        <div className="">
            <span>Hong Kong</span>
            <div className="flex items-center">
                <img
                    src={imageUrl}
                    alt="weather icon"
                    className="max-h-10 object-contain"
                />
                <div>{temp}°C</div>
            </div>
        </div>
    );
};

export default WeatherIcon;
