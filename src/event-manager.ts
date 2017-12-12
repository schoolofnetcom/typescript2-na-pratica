interface ListenerInterface {
    (): void
}

export default class{
    //ouvinte
    private listeners: { [eventName: string]: Array<ListenerInterface> } = {};

    addListener(eventName: string, callable: ListenerInterface) {
        if (!(this.listeners[eventName] instanceof Array)) {
            this.listeners[eventName] = [];
        }
        this.listeners[eventName].push(callable);
    }

    runEvent(eventName: string) {
        for (let callable of this.listeners[eventName]) {
            callable();
        }
    }
}