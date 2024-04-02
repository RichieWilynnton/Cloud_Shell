import React from 'react';

// Display the current directory + command + date or time
const CmdTextDisplay = ({ cmd, date }: { cmd: string, date: Date }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const dateForComparison = new Date(date.getTime());
  dateForComparison.setHours(0, 0, 0, 0);

  const isToday = dateForComparison.getTime() === today.getTime();

  const displayDate = isToday ? date.toLocaleTimeString() : date.toLocaleDateString();

  return (
    <div className='flex justify-between items-center '>
      <div className='text-gray-300 text-xl'>{`<C:\\users\\richie> ${cmd}`}</div>
      <div className='text-gray-300 text-xl'>{displayDate}</div>
    </div>
  );
}

export default CmdTextDisplay;
