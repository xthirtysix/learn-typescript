/**
 *  Create @decorator Catch.
 *  This decorator should catch an error and log it
 *  It should be able to rethrow an error if @param rethrow set to TRUE
 *  */

interface IDecoratedMethod {
    methodWithoutRethrow(): number;
    methodWithRethrow(): number;
}

class DecoratedMethod implements IDecoratedMethod {
    @Catch()
    //@ts-ignore
    methodWithoutRethrow(): number {
        throw new Error('Error');
    }

    @Catch({ rethrow: true })
    //@ts-ignore
    methodWithRethrow(): number {
        throw new Error('Error');
    }
}

function Catch({ rethrow }: { rethrow: boolean } = { rethrow: false }) {
    return (
        target: Object,
        _propertyKey: string | symbol,
        descriptor: TypedPropertyDescriptor<(...args: any[]) => any>,
    ): TypedPropertyDescriptor<(...args: any[]) => any> | void => {
        const oldMethod = descriptor.value;

        descriptor.value = async (...args: any[]) => {
            try {
                const result = await oldMethod?.apply(target, args);
                return result;
            } catch (error) {
                if (error instanceof Error) console.error(error.message);
                if (error instanceof Error && rethrow) throw error;
            }
        };
    };
}

console.group();
console.log(new DecoratedMethod().methodWithoutRethrow());
console.log(new DecoratedMethod().methodWithRethrow());
console.groupEnd();
