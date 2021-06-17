const express = require('express')
const app = express();

app.get('/sum', (req, res) => {
    let num1 = parseInt(req.query.num1)
    let num2 = parseInt(req.query.num2)

    res.send(sum(num1, num2))
});


app.listen(8080, () => {
    console.log('Port 8080')
});


function sum(num1, num2){

const sum = num1 + num2;


return('The sum of ' + num1 + ' and ' + num2 + ' is: ' + sum);
}
