/* Create type/interface describing the object */

const officeInfo = {
    officeId: 1001,
    isOpened: false,
    contacts: {
        phone: '+5550505',
        email: 'test@test.com',
        address: {
            city: 'New York',
        },
    },
};

/* Solution */
interface IContacts {
    phone?: string
    email?: string
    address?: IAdress
}

interface IAdress {
    city?: string
}

interface IOffice {
    officeId: number
    isOpened: boolean
    contacts: IContacts
}

function officeLoger (officeInfo: IOffice): void {
    console.log(officeInfo)
}

console.log(officeLoger(officeInfo))

