class Contact {
    constructor() {
        this.contacts = [];
    }

    saveContact(name, mobile) {
        if (!name || !mobile) {
            throw new Error('Name and mobile are required');
        }

        const contact = {
            id: Date.now(),
            name,
            mobile,
            createdAt: new Date()
        };

        this.contacts.push(contact);
        return contact;
    }

    getContacts() {
        return this.contacts;
    }

    deleteContact(id) {
        this.contacts = this.contacts.filter(contact => contact.id !== id);
    }

    updateContact(id, name, mobile) {
        const contact = this.contacts.find(c => c.id === id);
        if (contact) {
            contact.name = name;
            contact.mobile = mobile;
        }
        return contact;
    }
}

module.exports = Contact;