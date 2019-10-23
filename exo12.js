module.exports = function substr(str = '', start,len = str.endOfString){
    let result = '';
    let i = 0;
        if ( i!= start){
            i=i+1;
        }
        else 
            ( i < len)
                result+= str.charAt(i);
                i = i+1 ;
            
             
           
    return result
}
