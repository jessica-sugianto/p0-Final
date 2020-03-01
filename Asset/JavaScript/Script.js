var name
var soal = ['B','D','A','C','D']

function validasi_name(form){
    name = document.getElementsByClassName('name')[0].value
    if(name == ''){
        var warning = document.getElementsByClassName('validasi_name')
        warning[0].innerHTML = 'Name tidak boleh kosong!'
        return false
    }else{
        return true
    }
}

function ceck_answer(answer, nomor){
    let scores = []
    var jawaban = document.getElementsByClassName('answer')
    var jawabanSoal = document.getElementsByClassName(soal[nomor-1])
    jawaban[0].innerHTML = document.getElementsByClassName(answer)[0].innerHTML
    jawabanSoal[0].style.background = 'green'
    var next = document.getElementsByClassName('nextPage')
    next[0].hidden = false
}


if(document.getElementById('name') != null){
    var nama_user = document.getElementById('name')
    nama_user.innerHTML = name
}