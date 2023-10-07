// async function loopWithAsync() {
//   for (let i = 0; i < 5; i++) {
//     const result = await
//   someAsyncFunction(i);
//   console.log(result);
//   }
// };

// Random Resolve

const randomResolve = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;

  const randomDelayInSeconds = Math.floor(Math.random() * 5) + 1;
  const delayMilliseconds = randomDelayInSeconds * 1000;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (randomNumber % 2 === 0) {
        resolve(randomNumber);
      } else {
        reject(`Odd number: ${randomNumber}`);
      }
    }, delayMilliseconds);
  });
};

randomResolve()
  .then((result) => {
    console.log(`Resolved with even number: ${result}`);
  })
  .catch((error) => {
    console.error(`Rejected with error: ${error}`);
  });

  // --------------------------------------------------------

  // Promise API

  const createPromiseArr = (n) => {
    const promises = [];

    for (let i = 0; i < n; i++) {
      const promise = randomResolve()
      .then(() => {
        console.log('🥳 Yasss');
      })
      .catch(() => {
        console.log('🫠🫡 ok');
      });

      promises.push(promise);
    }

    return Promise.all(promises);
  };

  createPromiseArr(5)
  .then(() => {
    console.log('All promises have settled');
  })
  .catch((error) => {
    console.error(`Error in Promise.all: ${error}`);
  });


  // -----------------------------------------------------------

  // Async/Await

  const printResponse = async (n) => {
    try{
      const promises = [];

      for (let i = 0; i < n; i++) {
        const promise = randomResolve();
        promises.push(promise);
      }

      const results = await Promise.all(promises);

      result.forEach(() => {
        console.log('🥳 Yasss')
      });

      console.log('All promises have settles');
    } catch (error) {
      console.error(`Error in printResponse: ${error}`);
    }
  };

  // ----------------------------------------------------------

