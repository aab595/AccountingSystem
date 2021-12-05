const local = JSON.parse(localStorage.getItem("data"));

if (local != null) {
    if (local.code && local.label && local.classe) {
        for (let i = 0; i < local.code.length; i++) {
            // creer les td
            var tr1 = document.createElement('tr');
            tr1.id = `row${i+1}`;
            var td1 = document.createElement('td');
            td1.id = `r${i+1}d1`;
            td1.innerHTML = local.code[i];
            var td2 = document.createElement('td');
            td2.id = `r${i+1}d2`;
            td2.innerHTML = local.label[i];
            var td3 = document.createElement('td');
            td3.id = `r${i+1}d3`;
            td3.innerHTML = local.classe[i];
            tr1.appendChild(td1)
            tr1.appendChild(td2)
            tr1.appendChild(td3)
            document.getElementById('tbody').appendChild(tr1);
        }
    }
}

bouton.onclick = () => {
    var new_code = document.getElementById('code').value;
    var new_label = document.getElementById('label').value;
    var new_classe = document.getElementById('classe').value;

    if (localStorage.getItem('data') == null) {
        const data = {
            code: [],
            label: [],
            classe: []
        }
        localStorage.setItem("data", JSON.stringify(data));
    }

    var old_data = JSON.parse(localStorage.getItem('data'));
    // s'assurer que les champs sont non vides avant de les stocker
    if (new_code && new_label) {
        old_data.code.push(new_code);
        old_data.label.push(new_label);
        old_data.classe.push(new_classe);
    }

    localStorage.setItem('data', JSON.stringify(old_data));
    document.location.reload();
}