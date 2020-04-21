$(document).ready(function(){
    let magicnumber = Math.floor(Math.random()*(9999-1000))+1000;
    console.log(magicnumber);
    let magicnumberstring = magicnumber.toString();
    let arraymagicnumber = magicnumberstring.split('');
    console.log(arraymagicnumber.some(arr=> arr=="2"))
    $('#numero').on('keyup', function(Tecla){
        arraymagicnumber;
        let valor = $(this).val();
        let valorstring = valor.toString();
        let arrayvalor = valorstring.split('');
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


        if(Tecla.keyCode == 13){
            $('tbody').append('<tr><td>'+ valor + '</td><td>'+ picas.length + '</td><td>'+ fijas.length + '</td></tr>');
            $(this).val('');
        };
    });
});