let isRunning = false

self.onmessage = function(e) {
    if(isRunning) return;

    isRunning = true;

    const state = e.data;
    const { activeTask, secondsRemaning } = state;

    const endDate = activeTask.startDate + secondsRemaning * 1000;
    const now = Date.now();
    let secondsLeft = Math.ceil((endDate - now) / 1000);

    function tick() {
        self.postMessage(secondsLeft);
       
        const now = Date.now();
        secondsLeft = Math.floor((endDate - now) / 1000);

        setTimeout(tick, 1000);
    }
    tick();
};        
