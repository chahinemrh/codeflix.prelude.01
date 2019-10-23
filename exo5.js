module.exports = function decapitalize(str=''){
    //strLcFirst('str');

    let result = '';
    let i = 1;
    result += str[0].toLowerCase();

    while (i != str.length ){
        if (str[i]=== ' ')
            {
                result += str[i];
                result += str[++i].toLowerCase()
            }
            else
                result +=  str[i]
            i = i + 1;
  
        }
    return result ;
}