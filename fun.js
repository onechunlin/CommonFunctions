(function(window){
    window.fun = {
        /**
         * 数字的求和
         *
         * @param {*} a
         * @param {*} b
         * @returns 结果
         */
        add(a, ...b) {
            let res = a;
            b.forEach((val) => {
                res += val;
            })
            return res;
        },

        /**
         * 对象的深度拷贝
         * 
         * @param {*} obj 原始对象
         * @returns 对象的拷贝
         */
        deepClone(obj) {  
            function isClass(o) {    
                if (o === null) return "Null";    
                if (o === undefined) return "Undefined";    
                return Object.prototype.toString.call(o).slice(8, -1);  
            }  
            var result;  
            var oClass = isClass(obj);  
            if (oClass === "Object") {    
              result = {};  
            } else if (oClass === "Array") {
              result = [];  
            } else {    
              return obj;  
            }  
            for (var key in obj) {    
              var copy = obj[key];    
              if (isClass(copy) == "Object") {      
                result[key] = arguments.callee(copy);//递归调用    
              } else if (isClass(copy) == "Array") {      
                result[key] = arguments.callee(copy);    
              } else {      
                result[key] = obj[key];    
              }  
            }  
            return result;
        },
        /**
         * 防抖函数:非立即执行版的意思是触发事件后函数不会立即执行，
         * 而是在 n 秒后执行，如果在 n 秒内又触发了事件，则会重新计算函数执行时间。
         *
         * @param {*} func 需要防抖的函数
         * @param {*} wait  
         * @returns
         */
        debounce(func, wait) {
            let timer;
            return function () {
                let context = this;
                let args = arguments;
        
                if (timer) clearTimeout(timer);
                
                timer = setTimeout(() => {
                    func.apply(context, args)
                }, wait);
            }
        },
        /**
         * 节流函数：所谓节流，就是指连续触发事件但是在 n 秒中只执行一次函数。节流会稀释函数的执行频率。
         *
         * @param {*} func 
         * @param {*} wait
         * @returns
         */
        throttle(func, wait) {
            let previous = 0;
            return function() {
                let now = Date.now();
                let context = this;
                let args = arguments;
                if (now - previous > wait) {
                    func.apply(context, args);
                    previous = now;
                }
            }
        }
    }
})(window)