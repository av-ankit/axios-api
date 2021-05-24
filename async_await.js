console.log('1--Hi from Async-Await Lesson');

async function myFunc() {
    console.log('2--inside the function');

    const result = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('3--after fetch await', result);

    const data = await result.json();
    console.log('4--after the response await')
    console.log(data);

    console.log('5--exiting the function');
}

console.log('6--before calling function');
myFunc();
console.log('7--outside the function');