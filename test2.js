axios.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response1) {
  if (err) {
    console.error(err);
  } else {
    axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + response1.data.id, function (err, response2) {
      if (err) {
        console.error(err);
      } else {
        axios.get('https://jsonplaceholder.typicode.com/users/' + response2.data[0].userId, function (err, response3) {
          if (err) {
            console.error(err);
          } else {
            axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + response3.data.id, function (err, response4) {
              if (err) {
                console.error(err);
              } else {
                // Do something with the data
                const data1 = response1.data;
                const data2 = response2.data;
                const data3 = response3.data;
                const data4 = response4.data;
                const allData = [data1, data2, data3, data4];
                localStorage.setItem('allData', JSON.stringify(allData));
              }
            });
          }
        });
      }
    });
  }
});


// Promise 写法
new Promise((resolve, reject) => {
    return axios.get('https://jsonplaceholder.typicode.com/posts/1')
}).then((response1) => {
    return axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + response1.data.id)
}).then((response2) => {
    return axios.get('https://jsonplaceholder.typicode.com/users/' + response2.data[0].userId)
}).then((response3) => {
    return axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + response3.data.id)
}).then((response4) => {
    // Do something with the data
    const data1 = response1.data;
    const data2 = response2.data;
    const data3 = response3.data;
    const data4 = response4.data;
    const allData = [data1, data2, data3, data4];
    localStorage.setItem('allData', JSON.stringify(allData));
}).catch((err) => {
  console.log(err)
})


// async/await 优化
async function fn() {
  try {
    const response1 = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
    const response2 = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + response1.data.id);
    const response3 = await axios.get('https://jsonplaceholder.typicode.com/users/' + response2.data[0].userId);
    const response4 = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + response3.data.id);
    
    const data1 = response1.data;
    const data2 = response2.data;
    const data3 = response3.data;
    const data4 = response4.data;
    const allData = [data1, data2, data3, data4];
    localStorage.setItem('allData', JSON.stringify(allData));
  } catch(err) {
    console.log(err)
  }
}