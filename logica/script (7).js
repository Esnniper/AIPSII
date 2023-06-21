let ht , vh , pd , sb , sl 

ht = Number(prompt("Valor de ht "))
vh  = Number(prompt("Valor de vh"))
pd =  Number(prompt("Valor de pd"))


sb = ht * vh 
td = (pd /100 )* sb
sl =  sb - td 

alert(" Seu salario bruto " + sb)
alert("Seu desconto " + td )
alert("Seu salrio liquido " + sl)
alert("Seu valor de horas de trabalhadas " + vh)