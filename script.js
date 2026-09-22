async function getData() {

    let response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    let data = await response.json();

    console.log(data);

    document.getElementById("name").textContent = data.name;
}

setTimeout(getData, 3000);