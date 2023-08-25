let txt = 'teste'
let vog = 'a,e,i,o,u'
let contador = 0
for (let n=0; n< txt.length; n++){
    for(let c=0;c < vog.length;c++){
        if(vog[c] == txt[n]){
            contador+=1
        }
    }
}

console.log(contador)