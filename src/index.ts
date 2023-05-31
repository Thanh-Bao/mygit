interface IndexSignature<T = any> {
    [Key: string]: T;
}

const main = () => {
    const subject: IndexSignature = {
        a: 1,
        b: 2,
        c: 3,
        d: 4,
    }; // object


    // loop
    for (const key in subject) {
        console.log(key, subject[key]);
    }
};

main();
