class EventEmitter {
    constructor() {
      this.events = {};
      this.subscriptionId = 0;
    }
  
    subscribe(event, cb) {
      if (!this.events[event]) {
        this.events[event] = [];
      }
  
      const id = this.subscriptionId++;
      this.events[event].push({ id, cb });
  
      return {
        unsubscribe: () => {
          this.events[event] = this.events[event].filter(sub => sub.id !== id);
          if (this.events[event].length === 0) {
            delete this.events[event];
          }
        }
      };
    }
  
    emit(event, args = []) {
      if (!this.events[event]) {
        return [];
      }
  
      return this.events[event].map(sub => sub.cb(...args));
    }
  }
  