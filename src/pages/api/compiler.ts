import type { NextApiRequest, NextApiResponse } from 'next';

type CompilerApiResponse = {
  cod?: string;
  message?: string;
  [key: string]: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CompilerApiResponse>
) {
  const city = req.query.city as string || 'hongkong'; 
  const apiKey = process.env.WEATHER_API_KEY;
  const metric = req.query.metric as string || 'metric'; // Celcius

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${metric}`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("There was a problem with your fetch operation:", error);

    res.status(500).json({ message: "Error fetching weather data" });
  }
}
