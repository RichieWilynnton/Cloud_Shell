import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

interface CmdProps {
    args: string[];
    code: string;
}
const Snake = ({ args, code }: CmdProps) => {
    const { fileSystemTree } = useAppContext();
    const dirName = args[0];

    const [data, setData] = useState<string>("Fetching data...");
    useEffect(() => {}, []);
    const fetchCompilerOutput = async (): Promise<void> => {
        try {
            const res = await fetch("http://127.0.0.1:5000/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    code: code
                }),
            });
            if (!res.ok) {
                setData("Network response was not ok");
            }
            const result = await res.json();
            setData(result.output);
        } catch (error) {
            setData("Network response was not ok");
            console.error("Network response was not ok", error);
        }
    };

    const execute = () => {
        fetchCompilerOutput();
    };
    useEffect(() => {
        execute();
    }, []);

    return <div><pre>{data}</pre></div>;
};

export default Snake;
