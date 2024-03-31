// Renders the execution of each command 

const processCMD = (cmd : string) => {
    const cmdArr = cmd.split(' ');
    const cmdName = cmdArr[0];
    const args = cmdArr.slice(1);

    // Maybe have a command checker function
    
    switch (cmdName) {
        case 'ls':
            return {cmd: 'ls', component: 'CmdTextDisplay', time: new Date() };
        // case 'cd':
        //     return {};
        // case 'clear':
        //     return {};
        // case 'help':
        //     return {};
        default:
            return {cmd: cmdName, component: 'Error', time: new Date()};
    }
}