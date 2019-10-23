module.exports = function first(str = '', len=1){
    let result = '';
    let i = 0 ;
    while( i < len){
       result+= str.charAt(i);
       i = i+1 ;
    }
return result;
}