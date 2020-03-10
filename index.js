'use strict'

const readline = require('readline');

const rl = readline.createInterface({ input: process.stdin , output: process.stdout });

const getLine = (function () {
    const getLineGen = (async function* () {
        for await (const line of rl) {
            yield line;
        }
    })();
    return async () => ((await getLineGen.next()).value);
})();
async function calculateRectangleArea() {
    console.log('Введите высоту');
    const height = Number(await getLine());
    console.log('Введите ширину');
    const width = Number(await getLine())

    const area = height * width;
    console.log(`Площадь прямоугольника с высотой: ${height}, шириной: ${width} равна ${area}`);
}
const main = async () => {
    console.log('Введите команду для расчета площади фигуры.\nrectangle - прямоугольник. Для выхода используйте команду - exit');
    const command = await getLine();
    if (command === 'exit') {
        process.exit(0);
    } else if (command ==='rectangle') {
        await calculateRectangleArea();
    } else {
        console.log('Неизвестная команда');
    }

    main();
};

main();
