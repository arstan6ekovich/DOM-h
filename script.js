const home = document.querySelector('.home');
const favorite = document.querySelector('.favorite');
const admin = document.querySelector('.admin');
const header = document.querySelector('.header2');
const hero = document.querySelector('.hero');
const footer = document.querySelector('.footer');

const name = document.querySelector('.name');
const LastName = document.querySelector('.LastName');
const img = document.querySelector('.img');
const cancel = document.querySelector('.cancel');
const create = document.querySelector('.create');

const fon1 = document.querySelector('.fon1');
readData()

const fon2 = document.querySelector(".fon2");
follow()

create.addEventListener('click', () => {
    createData()
})



function createData() {
    let obj = {
        name: name.value,
        last: LastName.value,
        img: img.value,
        id: Date.now()
    }

    let data = JSON.parse(localStorage.getItem('person')) || []
    data.push(obj)
    localStorage.setItem('person', JSON.stringify(data))
    name.value = "";
    LastName.value = "";
    img.value = ""

    readData()

}


function readData() {
    fon1.innerHTML = "";
    let newData = JSON.parse(localStorage.getItem('person')) || []
    newData.forEach((el, index) => {
        let photo = document.createElement("div")
        let img = document.createElement("img")
        let textDiv = document.createElement("div")
        let p1 = document.createElement("p")
        let p2 = document.createElement("p")
        let followDiv = document.createElement("div")
        let del = document.createElement("button")
        let follow = document.createElement("div")
        let creat = document.createElement("button")

        photo.classList.add("photo")
        img.classList.add("image")
        followDiv.classList.add("followDiv")
        del.classList.add("del")
        follow.classList.add("follow")
        creat.classList.add("creat")
        textDiv.classList.add("textDiv")
        p1.classList.add("p1")
        p2.classList.add("p2")

        img.src = el.img
        p1.innerText = el.name
        p2.innerText = el.last
        del.innerHTML = "<ion-icon name=trash-outline></ion-icon>"
        follow.innerHTML = "<ion-icon name=heart-outline></ion-icon>"
        creat.innerHTML = "<ion-icon name=create-outline></ion-icon>"

        followDiv.append(del)
        followDiv.append(follow)
        followDiv.append(creat)
        textDiv.append(p1)
        textDiv.append(p2)
        photo.append(img)
        photo.append(textDiv)
        photo.append(followDiv)


        fon1.append(photo)

        del.addEventListener("click", () => {
            delData(index)
        })

        follow.addEventListener("click", () => {
            // createData()
        })

    })
}



// function followData(index) {
//     let follow = JSON.parse(localStorage.getItem("follows")) || []
//     follow.push(index, 1)
//     localStorage.setItem("follows", JSON.stringify(follow))
//     createData()
// }

function delData(index) {
    let data = JSON.parse(localStorage.getItem("person")) || []
    data.splice(index, 1)
    localStorage.setItem("person", JSON.stringify(data))
    readData()
}







function follow() {
    fon2.innerHTML = ""
    let follow = JSON.parse(localStorage.getItem("follow")) || []
    follow.forEach((el) => {
        let folDiv = document.createElement("div")
        let folImg = document.createElement("img")
        let folTextDiv = document.createElement("div")
        let folP1 = document.createElement("p")
        let folP2 = document.createElement("p")
        let folFollowDiv = document.createElement("div")
        let folDel = document.createElement("button")
        let folFollow = document.createElement("div")
        let folCreat = document.createElement("button")


        folDiv.classList.add("photo")
        folImg.classList.add("image")
        folTextDiv.classList.add("textDiv")
        folP1.classList.add("p1")
        folP2.classList.add("p2")
        folFollowDiv.classList.add("followDiv")
        folDel.classList.add("del")
        folFollow.classList.add("follow")
        folCreat.classList.add("creat")

        folImg.src = el.img
        folP1.innerHTML = `${el.name}`
        folP2.innerText = `${el.last}`
        folDel.innerHTML = "<ion-icon name=trash-outline></ion-icon>"
        folFollow.innerHTML = "<ion-icon name=heart-outline></ion-icon>"
        folCreat.innerHTML = "<ion-icon name=create-outline></ion-icon>"

        folTextDiv.append(folP1)
        folTextDiv.append(folP2)
        folFollowDiv.append(folDel)
        folFollowDiv.append(folFollow)
        folFollowDiv.append(folCreat)
        folDiv.append(folImg)
        folDiv.append(folTextDiv)
        folDiv.append(folFollowDiv)
            ``


        fon2.append(folDiv)

    })
}











admin.addEventListener('click', () => addAdmin());

function addAdmin() {
    header.style.display = "block"
    hero.style.display = "none"
    footer.style.display = "none"
}

home.addEventListener('click', () => addHome());

function addHome() {
    header.style.display = "none"
    hero.style.display = "block"
    footer.style.display = "none"
}

favorite.addEventListener('click', () => addFavorite());

function addFavorite() {
    header.style.display = "none"
    hero.style.display = "none"
    footer.style.display = "block"
}

