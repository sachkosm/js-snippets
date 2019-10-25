    function exLog(obj) {
        var result = [];
        for (var prop in obj) {
            let type = typeof(obj[prop])
            if (!obj.hasOwnProperty(prop)) {
                result.push('inheritedProperty ' + prop + '  ' + type)
            }else{
                result.push('ownProperty ' + prop + '  ' + type)
            }
        }
        console.dir(result.sort())
        console.trace(obj)
    }
