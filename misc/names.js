const names = ['ava', 'adu', 'aba', 'abyo', 'appo', 'apyun', 'ano', 'ann', 'add', 'ara', 'arag',
                'ben', 'byo', 'bak', 'bukk', 'bug', 'bevel', 'bev', 'byu', 'bya', 'bolo', 'baj',
                'cot', 'cat', 'coo', 'cyag', 'chagga', 'churn'];

const combiner = () => {
    let amount = Math.floor(Math.random() * 4);
    let newName = "";
    console.log(amount);
    for (let x = 0; x <= amount; x++) {
        if (newName === "") {
            newName = names[Math.floor(Math.random() * names.length)].toString();
        } else {
            newName += names[Math.floor(Math.random() * names.length)].toString();
        }
    }

    // Test code
    // let first = names[Math.floor(Math.random() * names.length)].toString()
    //             + names[Math.floor(Math.random() * names.length)].toString();

    console.log(newName);
}

combiner();