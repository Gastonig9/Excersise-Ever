let $inputContain = document.getElementById("inputContain")
let $inputText = document.getElementById("inputText")
let $form = document.getElementById("inputFood")
let h2 = document.createElement("h2")
h2.textContent = "Ultimas busquedas"
h2.style.marginTop = "70px"
$inputContain.appendChild(h2)
let tableArr = [];


function getFood() {
    let foodJSON = `./json/food.json`
    let foodFetch = fetch(foodJSON)
    foodFetch.then(response => {
        return response.json()
    })
        .then(dataFood => {
            localStorage.setItem("food", JSON.stringify(dataFood));
            $form.addEventListener("submit", (e) => {
                e.preventDefault()
                let value = $inputText.value
                console.log(value)
                let food = JSON.parse(localStorage.getItem("food"));
                for (let i = 0; i < dataFood.length; i++) {
                    const alimento = food[i];
                    if (alimento.aliment === value) {

                        let elemento = document.createElement("div")
                        elemento.innerHTML = `
                            <table class="table table-dark table-hover">
                                <thead>
                                <tr>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Precio Aproximado</th>
                                    <th scope="col">Alergias</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr style="font-size:20px">
                                    <td>${alimento.aliment}</td>
                                    <td>${alimento.price}</td>
                                    <td>${alimento.alergias}</td>
                                </tr>
                                </tbody>
                            </table>`
                            tableArr.push(elemento.innerHTML);
                            localStorage.setItem("tables", JSON.stringify(tableArr));
                
                            $inputContain.appendChild(elemento);

                        if (alimento.canEatIt === false) {
                            swal("No deberias consumirlo", "No es recomendable comer este alimento durante tu entrenamiento", "error");
                        } else {
                            swal("¡Puedes consumirlo!", "Puedes consumir este alimento para mejorar tu entrenamiento", "success");
                        }
                        return;
                    }
                }
            })
        })
        .catch(error => {
            $inputContain.innerHTML = `<h1>Se ha producido un error. ${error}</h1>`
        })
}

getFood()

window.addEventListener("load", () => {
    let tables = JSON.parse(localStorage.getItem("tables"));
    if (tables) {
      // Agrega cada tabla en el arreglo al $inputContain
      tables.forEach((table) => {
        let elemento = document.createElement("div");
        elemento.innerHTML = table;
        $inputContain.appendChild(elemento);
      });
    }
  });