console.log('Welcome to Axios Post Method Api');

//axios POST basic syntax
// axios.post('url','{data come in}' , 'config')


// simple basic Post request 

// const postToApi = () => {
//     axios.post('https://reqres.in/api/users', { "name": "ankit", "job": "react developer" })
//         .then((response) => {
//             console.log('response from basic post request \n', response.data)
//         })
// }


//axios POST with config , data , url
// const postToApi = async() => {
//     console.log('button clicked')
//     try {
//         let data = '{ "name": "Ankit Verma ", "job": "React Developer" }';
//         const url = 'https://reqres.in/api/users';

//         const config = {
//                 // method: 'POST',
//                 // url: 'https://reqres.in/api/users',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 // data :'{ "name": "Ankit Verma ", "job": "React Developer" }'
//             }
//             //remove .post from below if want to use config only
//         const response = await axios.post(url, data, config);

//         console.log('reponse from Async-Await Config \n', response.data);
//     } catch {
//         (error) => {
//             console.log('catch block \n', error)
//         }
//     }
// }

//clean with config
const postToApi = async() => {
    console.log('button clicked')
    try {

        const response = await axios('https://api.covid19india.org/data.json');
        const data = response.data.statewise;
        console.log('reponse from Async-Await Config \n', data);
    } catch {
        (error) => {
            console.log('catch block \n', error)
        }
    }
}


document.getElementById('myButton').addEventListener('click', postToApi)