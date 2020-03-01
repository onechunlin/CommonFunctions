(function(window){
    window.fun = {
        add(a, ...b){
            let res = a;
            b.forEach((val) => {
                res += val;
            })
            return res;
        }
    }
})(window)