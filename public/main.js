let result = document.querySelector('.container')

axios.get('https://pokeapi.co/api/v2/pokemon/pikachu')
.then((res) =>{
    let image = (res.data.sprites.front_default)

    let img = document.createElement('img')
    img.src = image
    result.appendChild(img)
})