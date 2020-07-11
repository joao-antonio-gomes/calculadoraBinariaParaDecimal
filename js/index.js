function converter() {
    event.preventDefault();

    var bin = document.querySelector('#num-bin').value;

    output = [],
        sBin = bin.toString();

    for (var i = 0, len = sBin.length; i < len; i += 1) {
        output.push(+sBin.charAt(i));
    }

    output.reverse();

    var soma = 0;

    for (var i = 0; i < output.length; i++) {
        if (output[i] == 0 || output[i] == 1) {
            soma += output[i] * Math.pow(2, i);
        } else {
            alert('Digite somente números binários!');
            return;
        }
    }

    console.log(soma);

    
    return document.querySelector('#num-dec').value = soma;
}

