const express = require('express');

// var module1 = require('./utils/module1.js');
var module1 = require('./utils/modules.js');
var router = require('./router/router.js')
const app = express();
const port = 3000;

app.use('/test', router);

app.get('/', function(req, res){
    res.send('h');
    // module1.hello();
    // module1.hi();

    function resolveAfter2Seconds() {
        return new Promise(resolve => {
            console.log('resolveAfter2Seconds');

            setTimeout(() => {
                console.log('resolveAfter22222Seconds');

                resolve('resolved');
            }, 2000);
        });
    }

    function resolve1(){
        return new Promise(resolve => {
            console.log('resolve1');

            setTimeout(() =>{
                resolve('resolve1');
            },1000);
        });
    }

    function resolve2(){
        return new Promise(resolve => {
            console.log('resolve2');

            setTimeout(() =>{
                resolve(resolve);
                // resolve('resolve2');
            },1000);
        });
    }

    async function asyncCall() {
        console.log('calling');
        const result1 = await resolveAfter2Seconds();
        const result2 = await resolve1();
        const result3 = await resolve2();
        newFunc1().then(console.log);
        newFunc2().then((val) => console.log(val)).catch( e => console.log('err'));
    }
    asyncCall();


    async function newFunc1(){
        var result1 = await Promise.resolve("RES1");
        setTimeout(() => {
            console.log('zzz');
        },3000);
        return result1;
    }

    async function newFunc2(){
        var result1 = await Promise.resolve("RES2");
        return result1;
    }

    // newFunc1().then((val) => console.log(val)).catch( e => console.log('err'));
    // newFunc2().then((val) => console.log(val)).catch( e => console.log('err'));

    // newFunc().then((val)=> console.log(val));
});

app.listen(3000, function(){
    console.log('port 3000');
});