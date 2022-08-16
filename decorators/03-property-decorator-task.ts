/**
 * Create @decorator Max, that will log a warning in case of
 * property with @type number to which this decorator is assigned
 * is larger than @param value of Max
 */

interface IDecoratedProperty {
    items: number;
}

class DecoratedProperty implements IDecoratedProperty {
    @Max(228)
    items: number = 322;
}

function Max(max: number) {
    return (target: Object, propertyKey: string | symbol) => {
        let value: number;

        function setter(newValue: number) {
            if (newValue > max) {
                console.warn(`Amount of items is larger than ${max}`);
            } else {
                value = newValue;
            }
        }

        function getter() {
            return value;
        }

        Object.defineProperty(target, propertyKey, {
            set: setter,
            get: getter,
        });
    };
}

const dp = new DecoratedProperty();
console.log(dp.items);
dp.items = 0;
console.log(dp.items);
dp.items = 322;
console.log(dp.items);
