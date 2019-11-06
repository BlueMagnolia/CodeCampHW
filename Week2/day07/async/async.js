
async function work() {
    var request = require('request')
    var authorize = {Authorization: 'Bearer someToken'}

    request({


    //     url: "https://reqres.in/api/users",
    //     type: "POST",
    //     data: {
    //         name: "paul rudd",
    //         movies: ["I Love You Man", "Role Models"]
    //     },
    //     success: function (response) {
    //         console.log(response);
    //     }
    // });

    
        url: 'https://reqres.in/api/users',
        headers: authorize,
        method: 'PUT', // Create - [POST] | Read - [GET] | Update - [PUT] | Delete || CRUD
        body: {
            name: 'morpheus',
            job: 'leader'
        },
        json: true
    }, (error,res,body) => {
        // console.log(error)
        // console.log(res)
        console.log(body)
    }) 
}

new Promise(async(resolve) => {
    resolve(await work())
}).then ( () => {
    console.log('Successful')
})

