import React, { useEffect, useState } from 'react';
import { useAppContext } from './context/AppContext';

// Display the command inputted by user
const CmdTextDisplay = ({ cmd, date }: { cmd: string, date: Date }) => {
  const [currentDir, setCurrentDir] = useState('');
  const appContext = useAppContext();

  // Display the directory where the command was entered, instead of the current active directory
  useEffect(() => {
    setCurrentDir(appContext.fileSystemTree.getCurrentDirectory());
  }, []);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dateForComparison = new Date(date.getTime());
  dateForComparison.setHours(0, 0, 0, 0);

  const isToday = dateForComparison.getTime() === today.getTime();

  const displayDate = isToday ? date.toLocaleTimeString() : date.toLocaleDateString();


  return (
    <div className='flex justify-between items-center '>
      <div className='text-gray-300 text-xl'>
          <span className='text-green-400'>richie@cloud_terminal:</span><span className='text-blue-500'>{currentDir}</span>${cmd}
      </div>
      <div className='text-gray-300 text-xl'>{displayDate}</div>
    </div>
  );
}

export default CmdTextDisplay;
