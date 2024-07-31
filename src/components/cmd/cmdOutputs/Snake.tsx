import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
}
const Snake = ({ args }: CmdProps) => {
    const { fileSystemTree } = useAppContext();
    const dirName = args[0];
    const [data, setData] = useState<string>("");
    useEffect(() => {}, []);
    const fetchCompilerOutput = async (): Promise<void> => {
        try {
            const res = await fetch("http://127.0.0.1:5000/", {
                method: "GET",
                // headers: {
                //     "Content-Type": "application/json",
                // },
                // body: JSON.stringify({
                //     name: "John Doe",
                //     email: "john@example.com",
                // }),
            });
            if (!res.ok) {
                throw new Error("Network response was not ok");
            }
            const result = await res.json();
            setData(result.output);
        } catch (error) {
            console.error("Error fetching weather data:", error);
        }
    };

    const execute = () => {
        fetchCompilerOutput();
    };
    useEffect(() => {
        execute();
    }, []);

    return <div>{data === "" ? "Fetching data..." : <pre>{data}</pre>}</div>;
};

export default Snake;
