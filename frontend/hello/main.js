let message = document.querySelector('#message')
let pingButton = document.querySelector('#pingButton')

pingButton.addEventListener('click', getPingFromWebServices)

function getPing() {
    console.log('pong')
    message.innerHTML = 'pong'
}

function getPingFromWebServices() {
    const url = 'http://localhost:3000/ping'

    fetch(url).then((response) => {
        return response.json()
    }).then((data) => {
        console.log(data)
        message.innerHTML = data.message
    }).catch(function(error) {
        console.log(error)
        message.innerHTML = `Cannot connect to server ${url}`
    })
}