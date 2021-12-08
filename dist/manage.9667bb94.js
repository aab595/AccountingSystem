accountObj = JSON.parse(localStorage.getItem('account'));
// generer les codes à partir de l'objet account
for(let i = 0; i < accountObj.code.length; i++){
    let opt1 = document.createElement('option');
    opt1.innerHTML = accountObj.code[i];
    document.getElementById('select-code1').appendChild(opt1);
}
// modfier dynamiquement la valeur du label
document.getElementById('label1').value = accountObj.label[accountObj.code.indexOf(document.getElementById("select-code1").value)];
let codeInput1 = document.getElementById("select-code1");
codeInput1.onchange = ()=>{
    document.getElementById('label1').value = accountObj.label[accountObj.code.indexOf(document.getElementById("select-code1").value)];
};
// generer les codes à partir de l'objet account
for(let i1 = 0; i1 < accountObj.code.length; i1++){
    let opt2 = document.createElement('option');
    opt2.innerHTML = accountObj.code[i1];
    document.getElementById('select-code2').appendChild(opt2);
}
// modfier dynamiquement la valeur du label
document.getElementById('label2').value = accountObj.label[accountObj.code.indexOf(document.getElementById("select-code2").value)];
let codeInput2 = document.getElementById("select-code2");
codeInput2.onchange = ()=>{
    document.getElementById('label2').value = accountObj.label[accountObj.code.indexOf(document.getElementById("select-code2").value)];
};
const local = JSON.parse(localStorage.getItem("transaction"));
if (local != null) {
    if (local.date && local.code1 && local.code2 && local.trans_obj) for(let i = 0; i < local.date.length; i++){
        // creer les tds
        var tr1 = document.createElement('tr');
        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');
        var td5 = document.createElement('td');
        var td6 = document.createElement('td');
        tr1.id = `row${i + 1}`;
        td1.id = `r${i + 1}d1`;
        td1.innerHTML = local.date[i];
        td2.id = `r${i + 1}d2`;
        td2.innerHTML = local.code1[i];
        td3.id = `r${i + 1}d3`;
        td3.innerHTML = local.code2[i];
        td4.id = `r${i + 1}d4`;
        td4.innerHTML = local.trans_obj[i];
        td5.id = `r${i + 1}d5`;
        td5.innerHTML = local.debit1[i];
        td6.id = `r${i + 1}d6`;
        td6.innerHTML = local.credit1[i];
        tr1.appendChild(td1);
        tr1.appendChild(td2);
        tr1.appendChild(td3);
        tr1.appendChild(td4);
        tr1.appendChild(td5);
        tr1.appendChild(td6);
        document.getElementById('tbody').appendChild(tr1);
    }
}
bouton.onclick = ()=>{
    var new_date = document.getElementById('date-trans').value;
    var new_trans_obj = document.getElementById('trans-obj').value;
    var new_code1 = document.getElementById('select-code1').value;
    var new_label1 = document.getElementById('label1').value;
    var new_debit1 = document.getElementById('debit1').value;
    var new_credit1 = document.getElementById('credit1').value;
    var new_code2 = document.getElementById('select-code2').value;
    var new_label2 = document.getElementById('label2').value;
    var new_debit2 = document.getElementById('debit2').value;
    var new_credit2 = document.getElementById('credit2').value;
    if (localStorage.getItem('transaction') == null) {
        const transaction = {
            date: [],
            trans_obj: [],
            code1: [],
            label1: [],
            debit1: [],
            credit1: [],
            code2: [],
            label2: [],
            debit2: [],
            credit2: []
        };
        localStorage.setItem("transaction", JSON.stringify(transaction));
    }
    var old_transaction = JSON.parse(localStorage.getItem('transaction'));
    // s'assurer que les champs sont non vides avant de les stocker
    if (new_date) {
        old_transaction.date.push(new_date);
        old_transaction.trans_obj.push(new_trans_obj);
        old_transaction.code1.push(new_code1);
        old_transaction.label1.push(new_label1);
        old_transaction.debit1.push(new_debit1);
        old_transaction.credit1.push(new_credit1);
        old_transaction.code2.push(new_code2);
        old_transaction.label2.push(new_label2);
        old_transaction.debit2.push(new_debit2);
        old_transaction.credit2.push(new_credit2);
    }
    localStorage.setItem('transaction', JSON.stringify(old_transaction));
    document.location.reload();
};

//# sourceMappingURL=manage.9667bb94.js.map
