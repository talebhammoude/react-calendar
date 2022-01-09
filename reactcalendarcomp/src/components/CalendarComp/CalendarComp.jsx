import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './CalendarComp.css';


function CalendarComp() {
    const [value, onChange] = useState(new Date());
  
    return (
      <div>
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    );
  }

export default CalendarComp;