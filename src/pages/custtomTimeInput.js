import React from 'react';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

const CustomTimeInput = ({ value, onClick }) => (
  <div style={{ position: 'relative' }}>
    <input
      type="text"
      value={value}
      onClick={onClick}
      style={{ paddingRight: '30px' }} // Adjust the padding to make room for the clock icon
    />
    <span
      style={{
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        right: '10px', // Adjust the right position as needed
        cursor: 'pointer',
      }}
    >
      {/* Insert your clock icon here */}
      {/* ⏰ */}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="black" d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10a10 10 0 0 0 10-10A10 10 0 0 0 12 2m4.2 14.2L11 13V7h1.5v5.2l4.5 2.7z"/></svg>
    </span>
  </div>
);



export default CustomTimeInput;
