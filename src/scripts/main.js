document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('form-sorteador').addEventListener('submit', function(e){
        e.preventDefault();
        let numeroMaximo = document.getElementById('numero-Maximo').value;
        numeroMaximo = parseInt(numeroMaximo);


        let aleatorio = Math.random()* numeroMaximo;
        aleatorio = Math.floor(aleatorio + 1);
       

        document.getElementById('res-valor').innerText = aleatorio;
        document.querySelector('.resultado').style.display = 'block';
    })
})