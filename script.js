function fazer() {
    let valor = document.getElementById('tab').value;
    let res = document.getElementById('res')
    let resposta = ''

    for(var count=1; count<=10 ; count++){
    resposta += (valor  + " x " + count+" = " + (valor*count) + "<br />");
    }
    
    res.innerHTML = resposta;
   
}