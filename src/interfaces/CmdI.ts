import { CmdProps } from "./CmdPropsI";

// Standard for commands entered by the user
export interface CmdI {
    cmd : string;
    Component: React.ComponentType<CmdProps>;
    props?: CmdProps;
    time : Date;
}