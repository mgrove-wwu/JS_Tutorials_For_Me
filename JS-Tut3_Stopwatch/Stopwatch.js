function Stopwatch() {
    this.begin = null;
    this.end = null;
    let time = 0;
    this.start = function() {
        if (this.begin !== null)
            throw new Error('Start method already called!')
        this.begin= new Date()
    }
    this.stop = function() {
        if (this.end !== null)
            throw new Error('Stop method already called!')
        this.end = new Date()
        time = (this.end - this.begin) / 1000
    }
    this.reset = function() {
        this.begin = null;
        this.end = null;
        this.time = 0;
    }
    Object.defineProperty(this, 'time', {
        get: function() {
            return time;
        }
    });
}

const stopwatch = new Stopwatch();

