window.addEventListener("load", carregar);

//token
function ajaxLogin(url, method, email, password) {
    fetch(url,
        {
            headers: {
                'Content-Type': 'application/json'
            },
            method: method,
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        .then(res => res.text())
        .then(token => {
            localStorage.setItem('token', token);
        });
}

function carregar() {
    ajaxLogin('https://localhost:5001/api/Token','POST', 'InventoryAdmin@abc.com', '$admin@2017');

    fetch('https://localhost:5001/api/Products',
        {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + localStorage.getItem('token')
            },
            //method: method,
            method: 'GET',
        })
        .then(res => res.json())
        //.then(data => JSON.stringify(data, null, 2))
        //.then(data => console.log(data))
        .then(data => {
            var text = "<tr>";
            var list = JSON.stringify(data, null, 2);
            for (var i in data) {
                console.log(i);
            }
           // var jsonStringify = JSON.stringify(data, null, 2);

            //var jsonObj = JSON.parse(jsonStringify);
            //var jsonObj = JSON.stringify(data, null, 2);
            //for (var i = 0; i < jsonObj.length; i++) {
            //    alert(data['Color']);
            //}

            //data.forEach(element => {
            //    text = text + "</tr>" + "<td>" + element.productId + "</td>" + "<td>" + element.name + "</td>" + "<td>" + element.category + "</td>" + "<td>" + element.color + "</td>";
            //});
            //console.log(JSON.stringify(data));
            document.getElementById("resultados").innerHTML = text;
        });

}