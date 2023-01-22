//Titres des bonnes réponses d'animes
const bonAnime = ["Noragami", "Tokyo Revengers", "Black Clover", "One punch man", "Horimiya", "Hataraku Saibo", "Mahoutsukai no Yome", "Orange", "Tsukiuta", "Shokugeki no Soma"]
const mauvaisAnime = ["Blood lad", "Bleach", "Ao no Exorcist", "Tokyo Ghoul", "Black Lagoon", "Darker Than Black", "Boku no Hero Academia", "Fairy Tale", "HunterxHunter", "Gurren Lagann", "Kill la Kill", "Mob Psycho 100", "Ao Haru Ride", "Wotakoi", "Koe no Katachi", "D-Gray Man", "Devil's Line", "Erased", "Akagami no Shirayuki-hime", "Mahouka Koukou no Rettousei", "Durarara", "Nisekoi", "Fruits Basket", "Toradora", "Idolish7", "B Project", "Uta no Prince sama", "La voie du tablier", "Chocolat no Mahou", "Bartender"]

let lib = document.querySelectorAll(".images img")
let choix = document.querySelectorAll(".choix p")
let screen = document.querySelector(".animes")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


function Verify(x,y,z,a,tab)
{
    while ((x.textContent == y.textContent) || (x.textContent == z.textContent) || (x.textContent == a.textContent))
    {
        let rnum = getRandomInt(10)
        x.textContent = lib[rnum].alt
        x.classList.add(lib[rnum].src)
    }
}

screen.style.backgroundImage = `url(${lib[getRandomInt(10)].src})`

for (let i = 0; i < choix.length; ++i) 
{
    let rnum = getRandomInt(10)
    choix[i].textContent = lib[rnum].alt
    choix[i].classList.add(lib[rnum].src)
    if (i == 3)
    {
        Verify(choix[i],choix[0],choix[1],choix[2],lib)
    }
    else if (i == 2)
    {
        Verify(choix[i],choix[0],choix[1],choix[3],lib)
        
    }
    else if (i == 1)
    {
        Verify(choix[i],choix[0],choix[2],choix[3],lib)
    }
    else if (i == 0)
    {
        Verify(choix[i],choix[2],choix[1],choix[3],lib)
    }
}

function except(x,tab,tablenght)
{
    for (let i = 0; i < tablenght; ++i) 
    {
        if (tab[x] != tab[i])
        {

        }
    }
}

if ((screen.style.backgroundImage != `url("${choix[0].className}")`) && (screen.style.backgroundImage != `url("${choix[1].className}")`) && (screen.style.backgroundImage != `url("${choix[2].className}")`) && (screen.style.backgroundImage != `url("${choix[3].className}")`))
{
    let rnum2 = getRandomInt(choix.length)
    let name
    for (let i = 0; i < lib.length; i++) 
    {
        if (`"${lib[i].src}"` == screen.style.backgroundImage.slice(4,screen.style.backgroundImage.length-1))
        {
            name = lib[i].alt
        }
    }
    choix[rnum2].textContent = name
    let Previous = choix[rnum2].className
    console.log(screen.style.backgroundImage)
    setTimeout(()=>{choix[rnum2].classList.remove(Previous)},500)
    choix[rnum2].classList.add(screen.style.backgroundImage.slice(4,screen.style.backgroundImage.length-1))
}

screen.style.backgroundSize = "cover"

let finalUrl

function OnClick(x,y,i,n)
{
    if (x.className.search(`"`) == -1)
    {
        finalUrl = `url("${x.className}")`
    }
    else
    {
        finalUrl = `url(${x.className})`
    }
    if (screen.style.backgroundImage == finalUrl)
    {
        x.style.color = "palegreen"
        x.style.color = "palegreen"
        document.querySelector(".container").style.backgroundColor = "palegreen"
        document.querySelector(".container").insertAdjacentHTML("beforeend",`<p class = "reponse">La réponse est: ${y[i].textContent}</p>`)
        document.querySelector(".container .reponse").style.color = "White"
    }
    else
    {
        document.querySelector(".container").style.backgroundColor = "indianred"
        let Num3
        for (let i = 0; i < y.length; i++) 
        {
            if (y[i].className.search(`"`) == -1)
            {
                finalUrl = `url("${y[i].className}")`
            }
            else
            {
                finalUrl = `url(${y[i].className})`
            }
            if (finalUrl == screen.style.backgroundImage)
            {
                Num3 = i
                y[i].style.color = "palegreen"
            }
            else
            {
                y[i].style.color = "indianred"
            }
        }
        document.querySelector(".container").insertAdjacentHTML("beforeend",`<p class = "reponse">La réponse est: ${y[Num3].textContent}</p>`)
        document.querySelector(".container .reponse").style.color = "White"
    }
    document.querySelector(".container .reponse").style.width = "100vw"
    setTimeout(()=> {
        window.location.reload();
    },2500)
    console.log("done")
}

for (let i = 0; i < choix.length; i++)
{
    choix[i].addEventListener("click", (event) => OnClick(choix[i],choix,i))
}