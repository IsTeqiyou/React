// Soal 1 
import React from 'react';

const WelcomeMessage = ({ isLoggedIn }) => {
  if (isLoggedIn) {
    return <p>Welcome back, user!</p>;
  } else {
    return <p>Please log in to continue.</p>;
  }
};



// Soal 2

import React from 'react';

const DeliveryStatus = ({ status }) => {
  switch (status) {
    case 'processing':
      return <p>Your order is being processed.</p>;
    case 'shipped':
      return <p>Your order has been shipped.</p>;
    case 'delivered':
      return <p>Your order has been delivered!</p>;
    default:
      return <p>Unknown status</p>;
  }
};


<DeliveryStatus status="shipped" />

// Soal 3 //

import React from 'react';

const Notification = ({ priority }) => {
  switch (priority) {
    case 'low':
      return <p>No immediate action required.</p>;
    case 'medium':
      return <p>Please address this issue soon.</p>;
    case 'high':
      return <p>Immediate action required!</p>;
    default:
      return <p>Unknown priority</p>;
  }
};

    
<Notification priority="high" />

// Soal 4

import React from 'react';

const Greeting = ({ time }) => {
  if (time >= 5 && time <= 11) {
    return <p>Good Morning!</p>;
  } else if (time >= 12 && time <= 17) {
    return <p>Good Afternoon!</p>;
  } else if (time >= 18 && time <= 20) {
    return <p>Good Evening!</p>;
  } else if (time >= 21 || time <= 4) {
    return <p>Good Night!</p>;
  } else {
    return <p>Unknown time</p>;
  }
};

export default Greeting;
<Greeting time={10} />