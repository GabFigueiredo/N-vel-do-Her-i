const Name = "Gabriel"
let Exp = 4032
let classificador = ""

switch (true) {
case Exp < 1000 :
classificador = "Ferro"
break;
case Exp >= 1000 && Exp < 2000:
classificador = "Bronze"
break;
case Exp >= 2000 && Exp < 5000:
classificador = "Prata"
break;
case Exp >= 6000 && Exp < 7000:
classificador = "Ouro"
break;
case Exp >= 7000 && Exp < 8000:
classificador = "Platina"
break;
case Exp >= 8000 && Exp < 9000:
classificador = "Ascendente"
break;
case Exp >= 9000 && Exp < 10000:
classificador = "Imortal"
break;
case Exp >= 10000:
classificador = "Radiante"
break;
}


console.log(`O Herói de nome ${Name} está no nível de ${classificador}`);
