$(document).ready(function(){
    //Funcion azar devuelve un array con cuatro numeros diferentes en formato string
    function azar() {
        let arraysnumbers  = [1,2,3,4,5,6,7,8,9,0]
        let numerosselected = []
        let max = 10
        let min = 0

        while(numerosselected.length != 4){
            let numberx = Math.floor(Math.random()*((max-min)-min))+min;
            numerosselected.push(arraysnumbers[numberx].toString())
            arraysnumbers.splice(numberx, 1)
            max = max-1
            min = min+1
        }

        if (numerosselected[0] == "0"){
            return numerosselected.reverse()
        }else {
            return numerosselected
        }
    }

    let arraymagicnumber = azar();
    console.log(arraymagicnumber.join(''))

    //Funcion para las teclas
    $('#numero').on('keyup', function(Tecla){
        arraymagicnumber;
        let valor = $(this).val();
        let valorstring = valor.toString();
        let arrayvalor = valorstring.split('');
        let arryvalorsinrepetir = [...new Set(arrayvalor)]
        let picas = [];
        let fijas = [];

        arrayvalor.forEach(element => {
            if(arraymagicnumber.some(arr=> arr==element)){
                if(arrayvalor.indexOf(element) == arraymagicnumber.indexOf(element)){
                    fijas.push(element)
                }else {
                    picas.push(element)
                }
                
            };
        });

        //Condicional cuando se presiona enter
        if(Tecla.keyCode == 13 && arryvalorsinrepetir.length == 4){
            if(fijas.length == 4){
                $('#win').removeClass('modaloculto')
                $('#win').addClass('modalpersonal')
            }
            $('tbody').prepend('<tr><td>'+ valor + '</td><td>'+ picas.length + '</td><td>'+ fijas.length + '</td></tr>');
            $(this).val('');
            $('#numero').removeClass('alert alert-danger text-danger validation');
            $('span').removeClass('text-danger')
        }else if(Tecla.keyCode == 13 && arryvalorsinrepetir.length != 4){
            $('#numero').addClass('alert alert-danger text-danger validation');
            $('span').addClass('text-danger')
        };
    });

    //Funcion para recargar el juego despues de ganar
    $('#reload').on("click", function(){
        $('#win').removeClass('modalpersonal')
        $('#win').addClass('modaloculto')
        $('tbody tr').remove();
        arraymagicnumber = azar();
        console.log(arraymagicnumber.join(''));
    })
});
