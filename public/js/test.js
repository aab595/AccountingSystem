/*
Classe Compte : 
    - code,
    - label,
    - classe

Classe Transaction :
    - Transaction Date
    - Transaction Object 
    - Code1
    - Label1
    - debit1 
    - credit1
    - Code2
    - Label2
    - debit2 
    - credit2
*/

class Account {
    constructor(code, label, classe="Reserve") {
        this.code = code;
        this.label = label;
        this.classe = classe;
    }
}

class Transaction extends Account {
    constructor(trans_date, trans_object, codeObj, labelObj, d1, c1) {
        super(codeObj, labelObj);
        this.trans_date = trans_date;
        this.trans_object = trans_object;
        this.debitObj = debitObj;
        this.creditObj = creditObj
    }
}

let acc = new Account("C001", "My label");
let trans = new Transaction("2020-01-01", "Any object", {c1: "C001", c2: "C002"}, {l1: "My label1", l2: "My label2"}, {d1: 5000, d2: 0}, {cr1: 0, cr2: 5000})
console.log(trans);