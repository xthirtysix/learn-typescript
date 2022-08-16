/**
    Create decorator, which adds
    @property createdAt to the class

    interface IUserService {
        users: number
        getUsersInDatabase(): number
    }

    class UserService implements IUserService {
        users: number = 1000

        getUsersInDatabase(): number {
            return this.users
        }
    }
*/

interface IDecoratedClass {
    users: number;
    getUsersInDatabase(): number;
}

@CreatedAt
class DecoratedClass implements IDecoratedClass {
    users: number = 1000;

    getUsersInDatabase(): number {
        return this.users;
    }
}

type CreatedAt = {
    createdAt: Date;
};

// Simple decorator version
function CreatedAt<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        createdAt: Date = new Date();
    };
}

// Factory decorator version
function CreatedAtFactory(date: Date) {
    return <T extends { new (...args: any[]): {} }>(constructor: T) => {
        return class extends constructor {
            createdAt: Date = date;
        };
    };
}

const us = new DecoratedClass() as IDecoratedClass & CreatedAt;

console.group();
console.log('CreatedAt is ', us.createdAt);
console.log('Is solved: ', !!us.createdAt);
console.groupEnd();
