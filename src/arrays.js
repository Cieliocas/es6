const redesSociais = ['twitter', 'instagram', 'facebook'];

for (let i = 0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`);
}

redesSociais.forEach(function (redeSocial, indice) {
    console.log(`#${indice} Eu tenho perfil na rede social: ${redeSocial}`);
});



