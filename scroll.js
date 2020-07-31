steps.scroll = () => {
    
    let scrolled = new Promise((resolve, reject) => {
        const targetNode = document.querySelector('body');
        const config = { attributes: false, childList: true, subtree: true };
        const callback = function(mutationsList, obs) {
            observer.disconnect();
            resolve();
        };
        const observer = new MutationObserver(callback);
        observer.observe(targetNode, config);
        window.scrollTo(0,1000000000);
        setTimeout(reject,10000);
    });
    
    scrolled
        .then(()=>{
            next('','scroll');
            done();
        })
        .catch(()=>{
            next('','cats');
            done();
        });
};
