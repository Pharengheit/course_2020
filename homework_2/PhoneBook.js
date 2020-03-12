const ConsoleReader = require('./ConsoleReader');
const Contact = require('./Contact');

const PhoneBook = {

    contacts: [],

    async addContact() {
        console.log('Введите имя');
        const name = await ConsoleReader.getLine();
        console.log('Введите номер телефона');
        const phone = await ConsoleReader.getLine();
        const contact = new Contact(name, phone);
        this.contacts.push(contact);
        console.log(`Вы добавили контакт c именем ${name} с номером ${phone}`);
    },

    async listContact() {
        console.log(`\n---`);

        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            console.log(`Контакт с именем ${contact.name} и номером ${contact.phone}`);
        }

        console.log(`---\n`);
    },

    async deleteContact() {
        console.log('Введите имя контакта, который хотите удалить');
        const name = await ConsoleReader.getLine();
        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            if (contact.name === name) {
                this.contacts.splice(i, 1);
                console.log(`Вы удалили контакт с именем ${name}`);
            } else {
                console.log(`Контакта с именем ${name} нет`);
            }
        }

    },

    async searchContact() {
        console.log('Введите имя контакта, который хотите найти');
        const name = await ConsoleReader.getLine();
        for (let i = 0; i < this.contacts.length; i++) {
            const contact = this.contacts[i];
            if (contact.name === name) {
                console.log('Контакт с именем ${name} и номером ${this[name]}');
            } else {
                console.log(`Такого имени нет в телефонной книге`);
            }
        }
    }
};

module.exports = PhoneBook;
