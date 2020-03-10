const ConsoleReader = require('./ConsoleReader');
const PhoneBook = require('./PhoneBook');

const main = async () => {
    console.log('Выберите действие.\n\nadd - добавить\nlist - список\ndelete - удалить\nsearch - найти\n\nДля выхода используйте команду - exit\n');
    const command = await ConsoleReader.getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command === 'add') {
        await PhoneBook.addContact();
    } else if (command === 'list') {
        await PhoneBook.listContact();
    } else if (command === 'delete') {
        await PhoneBook.deleteContact();
    } else if (command === 'search') {
        await PhoneBook.searchContact();
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();