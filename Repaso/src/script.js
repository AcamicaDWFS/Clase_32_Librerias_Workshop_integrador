// 1.-
async function getData() {
    return await Promise.resolve('I made it!');
}

const data = getData();
console.log(data);

// 2.-
const myPromise = () => Promise.resolve('I have resolved!');

function firstFunction() {
    myPromise().then(res => console.log(res));
    console.log('second');
}

async function secondFunction() {
    console.log(await myPromise());
    console.log('second');
}

firstFunction();
secondFunction();

// 3. -
function loadJson(url) {
    return fetch(url)
        .then(response => {
            if (response.status == 200) {
                return response.json();
            } else {
                throw new Error(response.status);
            }
        });
}

loadJson('no-such-user.json')
    .catch(alert); // Error: 404

async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json();
        return json;
    }
    throw new Error(response.status);
}

loadJson('no-such-user.json')
    .catch(alert);

