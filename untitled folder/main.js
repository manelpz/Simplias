
const port = 5002
const http = require('http');


const server = http.createServer((req, res) => {
    res.write('hello word 4')
   
    //const output = kdtree();

    let output = function () {
        console.log('Anonymous function');
        res.output();
    };
    
    //output();

    res.end();
   
   
});

function kdtree(){

    var points = [
        {x: 1, y: 2},
        {x: 3, y: 4},
        {x: 5, y: 6},
        {x: 7, y: 8}
      ];
       
    var distance = function(a, b){
        return Math.pow(a.x - b.x, 2) +  Math.pow(a.y - b.y, 2);
    }
       
      var tree = new kdTree(points, distance, ["x", "y"]);
       
      var nearest = tree.nearest({ x: 5, y: 5 }, 2);
    //res.write(nearest);
    return nearest;
};


server.listen(port, '127.0.0.1', ()=>{
    console.log('Listening for request now');
});



   
 