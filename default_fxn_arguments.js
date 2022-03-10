// function makeAjaxRequest(url, method){
//     if(!method){
//         method = 'GET'
//     }

//     // logic
// }

function makeAjaxRequest(url, method='GET'){
    return method;
    // logic
}

console.log(makeAjaxRequest('google.com'));
console.log(makeAjaxRequest('google.com', null));
console.log(makeAjaxRequest('google.com', undefined));
makeAjaxRequest('facebook.com', 'GET');


