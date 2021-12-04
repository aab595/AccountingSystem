let tableHead = document.querySelector(".thead");
let tableBody = document.querySelector(".tbody");
let codeInput = document.querySelector('.code');

let addButton = document.querySelector('.addBtn');

// on test le contenu des inputs avant d'ajouter l'element
let code = document.querySelector('.code');
let label = document.querySelector('.label');
let classe = document.querySelector('.class');

addButton.addEventListener('click', createElementTable);

function createElementTable() {
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var tdText1 = document.createTextNode('content[0]')
    td1.appendChild(tdText1);
    var td2 = document.createElement('td');
    var tdText2 = document.createTextNode('content[1]')
    td2.appendChild(tdText2);
    var td3 = document.createElement('td');
    var tdText3 = document.createTextNode('content[2]')
    td3.appendChild(tdText3);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    document.getElementById("tbody").appendChild(tr);
}


// addButton.addEventListener('click', () => {
//     // let languages = ['JS', 'TypeScript', 'Elm', 'Dart', 'Scala'];

//     // let fragment = new DocumentFragment();

//     // languages.forEach((language) => {
//     //     let th = document.createElement('th');
//     //     let 
//     //     th.innerHTML = language;
//     //     fragment.appendChild(th);
//     // })

//     // tableHead.appendChild(fragment);
//     // createElement(tableHead, "tr", "Code");

//     createElement(tableHead, "th", "Code");
//     console.log(test);
//     // createElement(tableHead, "th", "Label");
//     // createElement(tableHead, "th", "Classe");
//     // createElement(tableBody, "th", "Classe");
// });


// createElementTable(tableHead, 'tr', 'th', ['Code', 'Label', 'Class'])
// createElementTable(tableBody, 'tr', 'td', ['C001', 'Label1', 'Class1'])
// createElementTable(tableBody, 'tr', 'td', ['C001', 'Label1', 'Class1'])
// createElementTable(tableBody, 'tr', 'td', ['C001', 'Label1', 'Class1'])
// createElementTable(tableBody, 'tr', 'td', ['C001', 'Label1', 'Class1'])
// createElementTable(tableBody, 'tr', 'td', ['C001', 'Label1', 'Class1'])