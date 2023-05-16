var timeLimit = function(fn, t) {
	return async function(...args) {
        const fns=fn(...args);
        const p=new Promise((res,rej)=>{
            setTimeout(()=>{
                rej('Time Limit Exceeded')
            },t);

        })

        return Promise.race([fns,p]);
        
    }
};