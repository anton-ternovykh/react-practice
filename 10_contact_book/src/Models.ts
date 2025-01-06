import {v4 as uuid} from 'uuid'

export class ContactModel {
    constructor(public name: string, public city: string, public id: string | null) {
        if (!this.id) {
            this.id = uuid();
        }
    }
}