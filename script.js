function calcular(){
    const idade = Number(document.getElementById('idade').value);
    const sexo = document.querySelector('input[name="sexo"]:checked');
    const peso = Number(document.getElementById('peso').value);
    const peito = Number(document.getElementById('peito').value);
    const abdomen = Number(document.getElementById('abdomen').value);
    const coxa = Number(document.getElementById('coxa').value);
    const triceps = Number(document.getElementById('triceps').value);
    const subescapular = Number(document.getElementById('subescapular').value);
    const suprailiaca = Number(document.getElementById('suprailiaca').value);
    const axilarmedia = Number(document.getElementById('axilarmedia').value);
    const res = document.getElementById('res');

    let s = peito+abdomen+coxa+triceps+subescapular+suprailiaca+axilarmedia;

    if(!sexo){
        res.innerHTML = 'Escolha uma opção'
        return;
    }

    let bf;

    if(sexo.value==="masc"){
        bf = 1.112 - (0.00043499*s) + (0.00000055 * s**2) - (0.00028826*idade) // homem
        
    }else{
        bf = 1.097 - (0.00046971*s)+(0.00000056*s**2) - (0.00012828*idade)//mulher
    
    }

    // Conversão densidade → porcentagem de gordura
    let gordura = ((495 / bf) - 450);
    gordura = gordura.toFixed(2);

    res.innerHTML = `Sua porcentagem estimada de gordura corporal é: <strong>${gordura}%</strong>`;
}

     
     