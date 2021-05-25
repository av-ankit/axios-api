console.log('Welcome to Axios Lesson');

//simple axios request
// const callApi = () => {
//     axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {

//         if (response.request.readyState === 4) {
//             console.log('response recorded')
//         }
//         console.log('response fetched', response);
//         // console.log('data fetched', response.data);
//     })
// }


//Async-Await get request with axios  -  reducing code to 2 lines

// const callApi = async() => {
//     const response = await axios('https://jsonplaceholder.typicode.com/users');
//     console.log('response with async await', response)

// }


//axios with config --- modernizing

const callApi = async() => {

    config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users'
    }

    const response = await axios(config);
    console.log('response with axios config', response);
}









document.getElementById('myButton').addEventListener('click', callApi);