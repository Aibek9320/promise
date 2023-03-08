const parent = async () => {
    const user = await fetch('https://randomuser.me/api/')
    .then(res => res.json())
    .then(data => data)
    const addimg = document.createElement('img')
    addimg.setAttribute('class', 'img')
    addimg.style = 'display:flex;'

    addimg.setAttribute('src', user.results[0].picture.large)
    document.body.appendChild(addimg)
    const addgen = document.createElement('div')
    addgen.textContent = user.results[0].gender
    document.body.appendChild(addgen)
    const addname = document.createElement('div')
    const {title, first, last} = user.results[0].name
    addname.textContent = `${title} ${first} ${last}`
    document.body.appendChild(addname)
    const addage = document.createElement('div')
    addage.textContent = user.results[0].dob.age
    document.body.appendChild(addage)
    const addmail = document.createElement('div')
    addmail.textContent = user.results[0].email
    document.body.appendChild(addmail)
    const addloc = document.createElement('div')
    addloc.textContent = user.results[0].location.city
    document.body.appendChild(addloc)
    console.log(user);
}
parent()
const btn = document.createElement('button')

btn.textContent = 'Обновить'
document.body.appendChild(btn)
btn.addEventListener('click', () => {
    return window.location.reload()
})