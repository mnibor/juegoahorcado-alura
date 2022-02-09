// Array de palabras
var words = ['IGUANA','AGOSTO','OBISPO','ANILLO','ASALTO','AZTECA','AZUCAR','CAVIAR','CHISME','CUARZO','CUPULA','POSTER','INGLES','ASESOR','SOBRIO','ATAQUE','SULTAN','SIRENA','APOYAR','LAUREL','CRISIS','MARFIL','DIESEL','PINCEL','SABANA','VIAJAR','SASTRE','ATLETA','OCULTO','VECTOR','SALIVA'];

var btnNewGame = document.querySelector('.btnNewGame');

//Array de letras presionadas
var onPress = [];
var wordFinal = [];
var countTemp = false;
var countFail = 0;

function initialization(word){




    document.getElementById('wordHidden').innerHTML = '';
    document.getElementById('keyPressed').innerHTML = '';

    document.getElementById('span-try').innerHTML = 9;

    wordFinal = [];
    onPress = [];
    //
    // countTemp = false;

    for (var i = 0; i < word.length; i++) {
        wordFinal.push('_');
    };

    document.getElementById('wordHidden').innerHTML = wordFinal.join('  ');

    //Limpio el canvas si ya está cargado
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.clearRect(1, 1, 299, 299);

};

btnNewGame.addEventListener('click', function(event){
    countFail = 0;

    console.log(countFail);
    //Obtengo una palabra al azar del array
    var word = words[getRandomArbitrary(0, words.length)]
    var wordHidden = '';

    initialization(word);

    window.addEventListener('keydown', function (event) {

        //Valido si son letras
        validate(event);

        if (event.repeat) {
            event.preventDefault();
        } else {

            var charOne = event.key;

            for (var i = 0; i < word.length; i++) {

                if (word[i] == charOne.toUpperCase()) {

                    countTemp = true;

                    wordFinal[i] = charOne.toUpperCase();
                    //console.log('La letra ' + charOne.toUpperCase() + ' se encuentra en la posición ' + i);

                    ended(wordFinal);

                }
            }

            if (countTemp == false) {

                var result = counter();

                if (result == true) {

                    document.getElementById('word').innerHTML = 'La palabra a adivinar era: ' + word;

                }

            } else {
                countTemp = false;
            }

            document.getElementById('wordHidden').innerHTML = wordFinal.join('  ');
            document.getElementById('keyPressed').innerHTML = onPress.join('  ');

        }

    },false);
});

function counter(){
    // Llevo un contador para saber cuantas veces falló en la letra
    countFail = countFail + 1;
    document.getElementById('span-try').innerHTML = 9 - countFail;

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    switch (countFail) {
        case 1:

            //Dibujo de la base cuadrada de la horca
            //Relleno
            ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
            ctx.fillRect(10, 230, 60, 60);

            //Contorno
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.rect(10, 230, 60, 60);
            ctx.stroke();
            return false;

            break;

        case 2:

            //Dibujo del mástil mayor
            ctx.beginPath();
            ctx.moveTo(40, 230);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(40, 40);
            ctx.stroke();
            return false;

            break;

        case 3:

            //Dibujo del travesaño y el soporte a 45°
            ctx.beginPath();
            ctx.moveTo(40, 40);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(180, 40);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(40, 80);
            ctx.lineWidth = 3;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(80, 40);
            ctx.stroke();
            return false;

            break;

        case 4:

            //Dibujo de la soga y la cabeza
            ctx.beginPath();
            ctx.moveTo(180, 40);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(180, 70);
            ctx.stroke();

            ctx.beginPath();
            ctx.arc(180, 90, 20, 0, Math.PI * 2); // Outer circle
            ctx.stroke();
            return false;

            break;

        case 5:

            //Dibujo el cuerpo
            ctx.beginPath();
            ctx.moveTo(180, 110);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(180, 190);
            ctx.stroke();
            return false;

            break;

        case 6:

            //Dibujo el brazo izquierdo
            ctx.beginPath();
            ctx.moveTo(180, 130);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(220, 160);
            ctx.stroke();
            return false;

            break;

        case 7:

            //Dibujo el brazo derecho
            ctx.beginPath();
            ctx.moveTo(180, 130);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(140, 160);
            ctx.stroke();
            return false;

            break;

        case 8:

            //Dibujo la pierna izquierda
            ctx.beginPath();
            ctx.moveTo(180, 190);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(220, 220);
            ctx.stroke();
            return false;

            break;

        case 9:

            //Dibujo la pierna derecha
            ctx.beginPath();
            ctx.moveTo(180, 190);
            ctx.lineWidth = 5;
            ctx.strokeStyle = 'rgba(90,90,90,1)';
            ctx.lineCap = 'round';
            ctx.lineTo(140, 220);
            ctx.stroke();

            ctx.font = '40px serif';
            ctx.fillText('HAS PERDIDO', 90, 270, 190);

            return true;

            break;

        case countFail > 9:

            break;

        default:

    }
}

function ended(wordFinal){

    var finded = 0;

    for (var i = 0; i < wordFinal.length; i++) {
        if (wordFinal[i] == '_') {
            finded = finded + 1;
        }
    }

    if (finded == 0) {
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        ctx.font = '40px serif';
        ctx.fillText('HAS GANADO', 90, 270, 190);
    }

}

function validate(e) {
    var keyCode = e.keyCode || e.which;
    var char = e.key;

    var lblError = document.getElementById('lblError');
    lblError.innerHTML = '';

    //Solamente caracteres del alfabeto
    var regex = /^[A-Za-z]+$/;

    //Validación
    var isValid = regex.test(String.fromCharCode(keyCode));
    if (!isValid) {

        lblError.innerHTML = 'Solamente letras del alfabeto';

    } else {

        if((onPress.includes(char.toUpperCase())) == false){

            onPress.push(char.toUpperCase());

        };

    }

    return isValid;
}

const getValueInput = () =>{
    var inputValue = document.getElementById('addWord').value;
    words.push(inputValue.toUpperCase());
}

// Retorna un número aleatorio entre min (incluido) y max (excluido)
function getRandomArbitrary(min, max) {
    return Math.trunc(Math.random() * (max - min) + min);
}
