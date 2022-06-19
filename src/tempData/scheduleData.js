const data = [];
const length = 4;

for (let i = 1; i < length + 1; i++) {
    data.push({
        id: `schedule${i}`,
        schedule: {
            date: `6/${i} (월)`,
            time: `8:00 PM ~ 9:00 PM`,
        },
    });
}

const dateData = data;

export default dateData;