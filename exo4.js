module.exports = function capitalize(str='', restToLoweropt=false){
    //strUcFirst('str');
    let result = '';
    let i = 1;
    result += str[0].toUpperCase();
    while (i < str.length ){
        if (restToLoweropt === true){
            result += str[i].toLowerCase();
        }
        else{
            result += str[i];
        }
        i = i + 1;
    }
    return result ;
}

