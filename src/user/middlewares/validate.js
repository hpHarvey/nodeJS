function validateUser(request, response, next) {
    const user = request.body;
    let errorA = [];
    
    if (user.age < 10) {
        errorA.push("nho tuoi qua");
    }

    if (user.name.length < 2) {
        errorA.push("Ten ngan qua");
    }

    if ( errorA.length !== 0){
        response.send(errorA);
        return
    }

    next();
}

function capitalizeName(request, response, next) {
    //const newName = Request.body.name;
    // for( let i = 0; i < Request.length; i++){
    //     Request[i].name.toUpperCase();
    // }
    request.body.name = request.body.name.toUpperCase();
    next();
}

// module.exports.validateUser = validateUser;
// module.exports.capitalizeName = capitalizeName;

module.exports = {
    validateUser: validateUser,
    capitalizeName: capitalizeName
}