const EventEmitter = require('events')

// const emitter = new EventEmitter()

// emitter.on('anything', data => {
//     console.log('on: ', data);
    
// })

// emitter.emit("anything", {a: 1})


class Dispatcher extends EventEmitter{
    subscribe(eventName, cb) {
        console.log('[Subscribe...]');
        this.on(eventName, cb)
        
    }

    dispatch(eventName, data) {
        console.log('[Dispatching...]');
        this.emit(eventName, data)
        
    }
}



const dis = new Dispatcher()

dis.subscribe('aa', data => {
    console.log('on: aa', data);
    
})

dis.dispatch('aa', {a: 1})