const events = require('events');
function getEmitter() {
  let emitter = new events.EventEmitter();
  emitter.emit('emitStart');

  process.nextTick(() => {
    emitter.emit('nextTickStart');
  });

  setImmediate(() => {
    emitter.emit('setImmediateStart');
  });

  return emitter;
}

let myEmitter = getEmitter();

myEmitter.on('emitStart', () => console.log('This will never happen.'));
myEmitter.on('nextTickStart', () => console.log('NextTick: This will be second emit.'));
myEmitter.on('setImmediateStart', () => console.log('This will be third emit'));