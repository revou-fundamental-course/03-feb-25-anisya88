console. log('Javascript is working!');

function validateForm() {
    let input = document.getElementById('main-input');
    console. log(input.value);

    if(input.value == '') {
        alert('Tolong isi inputan');
    } else{

        /// Prosses konversi
        let calc = convertToCelcius(input.value);

        /// Tampilkan hasil
        document.getElementById('main-result').value = calc;
        document.getElementById('cara-konversi').value = 'Diketahui: C=' + input.value + ' F=?';
        console. log('Berhasil di eksekusi');
    }
}


let convertToCelcius = (input) => {
    return input * 9/5 + 32;
}