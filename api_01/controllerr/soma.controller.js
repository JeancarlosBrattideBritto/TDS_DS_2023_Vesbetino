
module.exports ={
    soma:(request, response) => {
        var valor1 = 10;
        var valor2 = 20;

        var resultado = valor1 + valor2;
        response.send('O resultado da soma é: '+ resultado);
    },
    somaParemetros:(request, response) => {

        const valor1 = request.body.valor1;
        const valor2 = request.body.valor2;
        const resultado = valor1 + valor2;
        if(!valor1){
            response.status(500).send("O parametro valor1 nao foi informado")
        }else if (!valor2){
            response.status(500).send("O parametro valor2 nao foi informado!")
        }
        response.send(`O resultado é ${resultado}`);
    
    }
}