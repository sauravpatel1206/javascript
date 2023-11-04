//promises help to get rid off callback situiation and make code more readable and developer friendly.
// The Promise object represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// example of then and catch

const cart = ["shoes", "shirt", "belt", "glass"];

createOrder(cart).then((orderId) => {
    return payment(orderId)         //return required in promise chaning
}).catch((err) => {
    console.log("please avoid this error and continue to next line", err)
}).then((message) => {
    console.log("end message", message)
    return updateProfile(true);
}).then((data) => {
    console.log("data", data)
}).catch((err) => {
    console.log("error", err)
});


function createOrder(cart) {

    let pr = new Promise(function (resolve, reject) {
        //create order

        if (!validateCart(cart)) {
            const err = new Error("cart is invalid");
            reject(err);
        }

        resolve("1234");

    })

    return pr;
}

function validateCart(cart) {

    return false;
}


function payment(orderId) {

    let paymentPromise = new Promise((resolve, reject) => {
        resolve("Payment successfull")
    })

    return paymentPromise;
}

function updateProfile(data) {

    let pr = new Promise(function (resolve, reject) {
        //create order

        if (data) {
            resolve("suceessfully update but it is not required")
        } else {
            const err = new Error("something wrong");
            reject(err);
        }


    })

    return pr;

}


