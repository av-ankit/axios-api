//a function which will call call the api with fetch() method 

//GET method
// const callAPI = () => {
//     fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
//         .then((data) => {
//             return console.log(data);
//         }).catch((error) => {
//             console.log('ERROR:', error)
//         })
// }


//POST Method
const callAPI = () => {
    data = { userID: 3212, id: 3212, body: 'this is my body', title: 'this is my title' };
    params = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    fetch('https://jsonplaceholder.typicode.com/posts', params)
        .then(response => response.json())
        .then((data) => {
            return console.log('Post API Data:---', data)
        }).catch((error) => {
            console.log('ERROR:', error)
        })
}

//function calling callAPI after a timeout
const call = () => {
    setTimeout(() => {
        return callAPI();
    }, 1000);
}

call();