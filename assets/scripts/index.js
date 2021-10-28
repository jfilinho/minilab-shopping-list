const pegaText = document.getElementById("texto");
const  btnEnviar = document.getElementById("btn-encaminhar");
const insereLista = document.getElementById("ul")

btnEnviar.addEventListener("click",() => {
    const useTexto = pegaText.value;

    //criar novo elemento da lista
    const lista = `
       
    <li class="list-group-item d-flex justify-content-between">
    <div>
        ${useTexto}
          </div>
        <button  class="btn btn btn-danger"> - </buton>
            </li > 
            `;

    insereLista.insertAdjacentHTML("beforeend", lista);

        pegaText.value = "";
    pegaText.focus();
});

document.addEventListener("click", (event) =>{
        
        const btnLimpa  = event.target;

        const lista = btnLimpa.parentElement;
        
        
        ul.removeChild(lista);  
    
});









