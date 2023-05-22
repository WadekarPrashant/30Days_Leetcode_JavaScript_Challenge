var jsonStringify = function(object) {
    if(object===null){
        return 'null'
    }
    if(Array.isArray(object)){
       return '['+object.map(value => jsonStringify(value)).join()+']'
    }
    if(typeof object === 'object'){
        return '{'+Object.keys(object).map(key => '"'+key+'":'+jsonStringify(object[key])).join()+'}';
    }
    if(typeof object === 'string'){
        return '"'+object+'"'
    }
    return object+''
};