import shortid from 'shortid';

function treatNumber(number) {
    if (number < 10) {
        return `0${number}`;
    }

    return number;
}

const data = [];

for (let i = 1; i < 5; i++) {
    data.push({
        id: shortid.generate(),
        content: {
            date: `06/${treatNumber(i)} (월)`,
            time: `${treatNumber(i)}:00 PM ~ ${treatNumber(i + 1)}:00 PM`,
        },
    });
}

const dateData = data;

export default dateData;