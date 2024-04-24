const rocksdb = require('rocksdb');

const db = rocksdb('/tmp/demo.db')

function handleError(err) {
    if (err) {
        throw err;
    }
}

db.open((err) => {
    handleError(err);
    console.log('open done');
    
    db.put('hello', 'world', (err) => {
        console.log('put done');

        db.get('hello', (err, value) => {
            handleError(err);
            console.log('value:', value.toString());

            db.close((err) => {
                handleError(err);
                console.log('close done');
            });

        });

    });

});




