const local = JSON.parse(localStorage.getItem("account"));
if (local != null) {
    if (local.code && local.label && local.classe) for(let i = 0; i < local.code.length; i++){
        // creer les tds
        var tr = document.createElement('tr');
        tr.id = `row${i + 1}`;
        var td1 = document.createElement('td');
        td1.id = `r${i + 1}d1`;
        td1.innerHTML = local.code[i];
        var td2 = document.createElement('td');
        td2.id = `r${i + 1}d2`;
        td2.innerHTML = local.label[i];
        var td3 = document.createElement('td');
        td3.id = `r${i + 1}d3`;
        td3.innerHTML = local.classe[i];
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        document.getElementById('tbody').appendChild(tr);
    }
}
bouton.onclick = ()=>{
    var new_code = document.getElementById('code').value;
    var new_label = document.getElementById('label').value;
    var new_classe = document.getElementById('classe').value;
    if (localStorage.getItem('account') == null) {
        const account = {
            code: [],
            label: [],
            classe: []
        };
        localStorage.setItem("account", JSON.stringify(account));
    }
    var old_account = JSON.parse(localStorage.getItem('account'));
    // s'assurer que les champs sont non vides avant de les stocker
    if (new_code && new_label) {
        old_account.code.push(new_code);
        old_account.label.push(new_label);
        old_account.classe.push(new_classe);
    }
    localStorage.setItem('account', JSON.stringify(old_account));
    document.location.reload();
};

//# sourceMappingURL=index.1fa2db2b.js.map
