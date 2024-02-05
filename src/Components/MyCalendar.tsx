import React, { useState } from 'react';
import Calendar from 'react-calendar';

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const MyCalendar: React.FC = () => {
  const [value, onChange] = useState<Value>(new Date());

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const tileContentStyle = {
    color: 'white',
    backgroundColor:"#36A2EB", // Change this to your desired color
    padding: '2px',
  };
  

  const tileContent = ({ date, view }: any) => {
    if (view === 'month' && isToday(date)) {
      return <div style={tileContentStyle}>Today</div>;
    }
    return null;
  };

  return (
    <div className='p-4 bg-[#FF6384]'>
      <Calendar onChange={onChange} value={value} tileContent={tileContent} />
    </div>
  );
};

export default MyCalendar;
