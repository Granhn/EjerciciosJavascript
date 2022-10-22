const d = document,
$table = d.querySelector(".crud-table"),
$form = d.querySelector(".crud-form"),
$title = d.querySelector(".crud-title"),
$crudTemplate = d.getElementById("crud-template").content,
$fragment = d.createDocumentFragment();

const getAll = async () =>{
    try {
        let res = await fetch("http://localhost:3000/santos"),
        json = await res.json();
        if(!res.ok) throw {status : res.status, statusText: res.statusText}
        json.forEach(element => {
            $crudTemplate.querySelector(".name").textContent = element.nombre;
            $crudTemplate.querySelector(".constelacion").textContent = element.constelacion;
            $crudTemplate.querySelector(".edit").dataset.id = element.id;
            $crudTemplate.querySelector(".edit").dataset.name = element.nombre;
            $crudTemplate.querySelector(".edit").dataset.constelacion = element.constelacion;
            $crudTemplate.querySelector(".eliminar").dataset.id = element.id;
            


            let $clone = d.importNode($crudTemplate, true);
            $fragment.appendChild($clone);
        });
        $table.querySelector("tbody").appendChild($fragment);

        
    } catch (err) {
        let message = err.statusText || "Ocurrio un error";
        $table.insertAdjacentHTML("afterend",`<p><b>Error ${err.status}: ${message}</b></p>`);

    }
}

d.addEventListener("DOMContentLoaded",getAll);
d.addEventListener("submit", async e => {
    if( e.target === $form ){
        e.preventDefault();
            if( !e.target.id.value ){ //Create - POST
                try {
                    let options = {
                        method: "POST",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            nombre: e.target.nombre.value,
                            constelacion: e.target.constelacion.value
                        })
                    },
                    res = await fetch("http://localhost:3000/santos",options),
                    json = await res.json();
                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    location.reload();
                    
                } catch (err) {
                    let message = err.statusText;
                    $form.insertAdjacentElement("afterend",`<p><b>Error : ${err.status}: ${message}`)
                }
            }
            else{ //UPDATE - PUT
                try {
                    let options = {
                        method: "PUT",
                        headers: {
                            "Content-type":"application/json; charset=utf-8"
                        },
                        body: JSON.stringify({
                            nombre: e.target.nombre.value,
                            constelacion: e.target.constelacion.value
                        })
                    },
                    res = await fetch(`http://localhost:3000/santos/${e.target.id.value}`,options),
                    json = await res.json();

                    if (!res.ok) throw {status: res.status, statusText: res.statusText};
                    location.reload();
                } catch (err) {
                    let message = err.statusText;
                    $form.insertAdjacentElement("afterend",`<p><b>Error : ${err.status}: ${message}`)
                }
            }
    }
    
});

d.addEventListener("click", async e =>{
    if(e.target.matches(".edit")){
        console.log("Si")
        $title.textContent = "Editar Santo";
        $form.nombre.value = e.target.dataset.name;
        $form.constelacion.value = e.target.dataset.constelacion;
        $form.id.value = e.target.dataset.id;
    }
    if(e.target.matches(".eliminar")){
        let isDelete = confirm(`¿Estas seguro de elimira el id ${e.target.dataset.id}?`);
        if(isDelete ){
            try {
                let options = {
                    method: "DELETE",
                    headers: {
                        "Content-type":"application/json; charset=utf-8"
                    }
                },
                res = await fetch(`http://localhost:3000/santos/${e.target.dataset.id}`,options),
                json = await res.json();

                if (!res.ok) throw {status: res.status, statusText: res.statusText};
                location.reload();
            } catch (err) {
                let message = err.statusText;
                $form.insertAdjacentElement("afterend",`<p><b>Error : ${err.status}: ${message}`)
            }
        }
    }
})