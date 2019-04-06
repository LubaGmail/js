const p = {
  first: "first",
  last: "last",
  getName: function() {
    return this.first + " " + this.last;
  }
};
let john = { first: "john", last: "johnson" };
john.__proto__ = p;
p.getName();
john.getName();

let jane = { first: "jane" };
jane.__proto__ = p;
jane.getName();         // "jane last"

