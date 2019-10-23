module.exports = function last(str = '', len=1){
    let result = '';
    let i = str.length - 1;
    while( i > (str.length - 1) - len){
       result+= str.charAt(i);
       i = i-1 ;
    }
    return result
}
