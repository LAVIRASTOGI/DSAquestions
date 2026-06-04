class EventEmitter {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    // implementation
    if (!this.events[eventName]) {
      this.events[eventName] = [];
    }
    this.events[eventName].push(callback);
  }

  once(eventName, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(eventName, wrapper);
    };
    this.on(eventName, wrapper);
    // implementation
  }

  off(eventName, callback) {
    // implementation

    if (!this.events[eventName]) {
      return;
    }

    this.events[eventName] = this.events[eventName].filter(
      (fn) => fn !== callback,
    );
  }

  emit(eventName, ...args) {
    // implementation
    if (!this.events[eventName]) {
      return;
    }
    this.events[eventName].forEach((callback) => {
      callback(...args);
    });
  }
}

const emitter = new EventEmitter();

const log = (...args) => console.log(...args);

emitter.on("sayHello", log);
emitter.emit("sayHello", "Hi!"); // Output: Hi!

emitter.once("sayBye", () => console.log("Bye!"));
emitter.emit("sayBye"); // Output: Bye!
emitter.emit("sayBye"); // No output

emitter.off("sayHello", log);
emitter.emit("sayHello", "Hi again"); // No output
