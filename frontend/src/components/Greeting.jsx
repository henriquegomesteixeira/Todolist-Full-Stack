import React, { useState, useEffect } from 'react';

function Greeting() {
  function capitalizeFirstLetter(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
  }

  const [salutation, setSalutation] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {
    const currentTime = new Date().getHours();

    let newGreeting;
    if (currentTime >= 0 && currentTime < 12) {
      newGreeting = 'Good morning!';
    } else if (currentTime >= 12 && currentTime < 18) {
      newGreeting = 'Good afternoon!';
    } else {
      newGreeting = 'Good evening!';
    }

    setSalutation(newGreeting);

    const formattedDate = new Date().toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    }).replace(/,/g, '');

    const [weekday, month, day, year] = formattedDate.split(' ');

    setCurrentDate(capitalizeFirstLetter(
      `Today, ${weekday} ${day} ${month}, ${year}`,
    ));
  }, []);

  return (
    <div id="greeting-date">
      <h1>{salutation}</h1>
      <p>{currentDate}</p>
    </div>
  );
}

export default Greeting;
