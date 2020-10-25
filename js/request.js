const urls = 'https://www.cbr-xml-daily.ru/daily_json.js';
const method = 'GET';
const isAsync = false;

main1()

function main() {
    const request = new XMLHttpRequest();
    request.open(method, urls, isAsync)
    request.send()

    console.log(request.response);
}

function main1() {
    const request = fetch(urls);

    const jsonStream = request.then(response => {
        return response.json()
    })

    jsonStream.then(data => {
        console.log(data);
    })
}

