function judge(target){
    return target === '[object Object]'?Object.prototype.toString().call(target).splice(8,-1):typeof target
    
    // if(typeof target === '[object Object]'){
    //     return Object.prototype.toString().call(target).splice(8,-1);
    // }else{
    //     return typeof target;
    // }
};