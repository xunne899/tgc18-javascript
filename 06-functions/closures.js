// an annoymous function can refer to variable






let  i = 3 
let foobar = function (){
    console.log(i)
}
i =5
foobar()



let func = [];
        for (let i =0; i < 10; i++) {
           let f = function(){
               return i * 2;
           }
           func.push(f);
        }

        console.log("i no is",func[5]())

        // let fruitFunc = [];
        // let fruits = ['apples', 'bananas', 'cherries', 'elderberries']
        // for (let f of fruits) {
        //     let g = function(){
        //         return f;
        //     }
        //     fruitFunc.push(g);
        // }
        // console.dir(fruitFunc)
        // console.log(fruitFunc[2]())



        let fruitFunc = [];
        let fruits = ['apples', 'bananas', 'cherries', 'elderberries']
        for (let f of fruits) {
             function one(){
                return f;
            }
            fruitFunc.push(one());
        }
        console.dir(fruitFunc)
        console.log(fruitFunc[2])
