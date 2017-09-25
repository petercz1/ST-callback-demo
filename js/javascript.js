console.log('loaded');


// global variable​
var allUserData = [];


function logstuff(data){
    console.log('Inside logstuff');
    console.log(data);
}

function getInput(user, callback){
    // console.log('options are:');
    // console.log(user);
    // console.log('callback is: ');
    // console.log(callback);

    allUserData.push(user);
    callback(allUserData);
}

getInput({user: 'bill'}, logstuff);
getInput({user: 'bob'}, logstuff);
getInput({user: 'bertie'}, logstuff);





// generic logStuff function that prints to console​
// function logStuff(data) {
//   console.log('incoming data is:');
//   console.log(data);
// }
//
// // A function that takes two parameters, the last one a callback function
// function getInput(options, callback) {
//   console.log('options are: ');
//   console.log(options);
//   console.log('callback function is: ');
//   console.log(callback);
//
//   allUserData.push(options);
//   callback(allUserData);
//
// }
//
// getInput({name: "Alex",speciality: "JavaScript"}, logStuff);
// getInput({name: "bertie",speciality: "html"}, logStuff);
// getInput({name: "carrie",speciality: "css"}, logStuff);
//
