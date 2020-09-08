const dataArr = {

    "hello": [{
        "id": 4,
        "name": "abc"
    }, {
        "id": 10,
        "name": "abc2"
    },

    {
        "id": 5,
        "name": "abc3"
    },

    {
        "id": 6,
        "name": "abc4"

    }]

};
const sortArray = dataArr['hello'];

console.log(sortArray.sort((a, b) => {
    if (a.id < b.id)
        return -1;
    if (a.id > b.id)
        return 1;
    return 0;
}));
