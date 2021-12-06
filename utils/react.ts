export interface ISetStateValue<T> {
    setState: Function;
    key: keyof T;
    new_value: any;
}
export function setStateValue<T>(options: ISetStateValue<T>) {
    options.setState((oldState: T) => {
        const newState = { ...oldState };
        newState[options.key] = options.new_value;
        return newState;
    });
}
