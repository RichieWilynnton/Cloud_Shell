import React from "react";

interface CmdProps {
    args: string[];
    directory: string;
}
const Pwd = ( {args, directory} : CmdProps  ) => {
    return <div>{directory}</div>;
};

export default Pwd;
