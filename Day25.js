
var checkIfInstanceOf = function(obj, classFunction) {
    if (obj === null || obj === undefined || typeof(classFunction) !== "function") return false;
    if (typeof(obj) !== "object") obj = Object(obj);
    return obj instanceof classFunction;
};