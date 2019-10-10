
// callback approack
const runLaterCallback = (callback) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            callback("try again", undefined)
        } else {
            callback(undefined, 42)
        }
    }, 1000)
}

// convention: first argument is error, second is the operation result
runLaterCallback((error, result) => {
    if (error) {
        return console.log('Callback error:', error)
    }
    console.log('Callback success:', result)
})


// Promise approach
// resolve is called when success, reject when there's an error
const runLaterPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() < 0.5) {
            reject("try again")
        } else {
            resolve(42)
        }
    }, 2000)
})

// then => success, catch => error
runLaterPromise.then((result) => {
    console.log('Promise success:', result)
}).catch((reason) => {
    console.error('Promise failed:', reason)
})


