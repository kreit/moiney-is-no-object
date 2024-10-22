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
    if(homeworkArr.length === 0){
        return ""
    }
    let lowestScore = homeworkArr[0]
    for(let i = 0; i < homeworkArr.length; i++){
        if(homeworkArr[i].averageScore < lowestScore.averageScore){
            lowestScore = homeworkArr[i]
        }
    }
    return lowestScore.name
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