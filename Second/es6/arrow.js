class Animal {
  constructor() {
    this.type = 'animal'
  }

  says(say) {
    setTimeout(() => {
      console.log(this.type + ' says ' + say)
    }, 1000)
  }
}
var animal = new Animal();
//animal.says('hi')  //animal says hi


var a=(i)=> {return i + 1};
//(i)=> {return i + 1};

console.log(a(2));
//(i)=>i + 1;
var b=(x, y) => {
  x++;
  y--;
  return x + y
}
console.log(b(2, 2));


(x,y)=>{
  "use strict";
}


function Person() {
  this.age = 0;
  var closure = "123"
  setInterval(function growUp() {
    this.age++;
    console.log(closure+this.age)
  }, 1000);
}

//var p = new Person();
//console.log(p);

function PersonX() {
  'use strict';
  this.age = 0;
  var closure = "123";
  setInterval(()=>{
    this.age++;
    console.log(closure+this.age)
  }, 1000);
}

var px = new PersonX();
console.log(px);
