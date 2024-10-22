// ┌─────────────────┐
// │ Your code here! │	
// └─────────────────┘

const isAdmin = function(userObj){
    if(userObj.userRole === "ADMIN"){
        return true
    }else{
        return false
    }
}


const getHardestHomework = function(homeworkArr){
    // how do we access all of the values in an array? 
    for(let i = 0; 1 < homeworkArr.length; i++){
        // access avg score
        console.log(homeworkArr[i])
        // check to see if avg score is less than the other score
        
        // if ism, save that hw name
    }
}


// ┌─────────────────────────────────────┐
// │ Do not modify code below this line. │
// └─────────────────────────────────────┘

if (typeof isAdmin === 'undefined') {
    isAdmin = undefined;
}
if (typeof getEmail === 'undefined') {
    getEmail = undefined;
}
if (typeof getPlaylistLength === 'undefined') {
    getPlaylistLength = undefined;
}
if (typeof getHardestHomework === 'undefined') {
    getHardestHomework = undefined;
}
if (typeof createPhonebook === 'undefined') {
    createPhonebook = undefined;
}

module.exports = {
    isAdmin,
    getEmail,
    getPlaylistLength,
    getHardestHomework,
    createPhonebook
};