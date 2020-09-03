function Stopwatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function() {
        if (running)
            throw new Error('Start method already called!')
        running = true;
        startTime = new Date();
    }
    this.stop = function() {
        if (!running)
            throw new Error('Stop method already called!')
        running = false;
        endTime = new Date();

        const seconds = (endTime.getTime() - startTime.getTime())/1000
        duration += seconds
    }
    this.reset = function() { 
        running = False, 
        startTime, endTime, duration = 0;
    }
    Object.defineProperty(this, 'time', {
        get: function() {
            return time;
        }
    });
}

const stopwatch = new Stopwatch();

