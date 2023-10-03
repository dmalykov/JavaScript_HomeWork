// Timeout

const printNumber = () => {
	let number = 1;
 
	const printNextNumber = () => {
	  if (number <= 5) {
		 console.log(number);
		 number++;
		 setTimeout(printNextNumber, 1000);
	  }
	};
 
	printNextNumber();
 };
 
 printNumber();

//  -------------------------------------------------------

// Delayed loop 

const delayedLoop = (i) => {
	if (i <= 5) {
	  console.log(i);
	  setTimeout(() => {
		 delayedLoop(i + 1);
	  }, 1000);
	}
 };
 
 delayedLoop(1);

// ---------------------------------------------------------

// Random

const randomPromise = () => {
	return new Promise((resolve, reject) => {
	  const randomNumber = Math.random();
 
	  if (randomNumber >= 0.5) {
		 resolve(randomNumber);
	  } else {
		 reject(new Error('Random number is less than 0.5'));
	  }
	});
 };

 randomPromise()
  .then((result) => {
    console.log('Resolved with random number:', result);
  })
  .catch((error) => {
    console.error('Rejected with error:', error.message);
  });

//   --------------------------------------------------------
 