//Titres des bonnes réponses d'animes

const bonAnime = ["Noragami", "Tokyo Revengers", "Black Clover", "One punch man", "Horimiya", "Hataraku Saibo", "Mahoutsukai no Yome", "Orange", "Tsukiuta", "Shokugeki no Soma"]
const mauvaisAnime = ["Blood lad", "Bleach", "Ao no Exorcist", "Tokyo Ghoul", "Black Lagoon", "Darker Than Black", "Boku no Hero Academia", "Fairy Tale", "HunterxHunter", "Gurren Lagann", "Kill la Kill", "Mob Psycho 100", "Ao Haru Ride", "Wotakoi", "Koe no Katachi", "D-Gray Man", "Devil's Line", "Erased", "Akagami no Shirayuki-hime", "Mahouka Koukou no Rettousei", "Durarara", "Nisekoi", "Fruits Basket", "Toradora", "Idolish7", "B Project", "Uta no Prince sama", "La voie du tablier", "Chocolat no Mahou", "Bartender"]

//On selectione les differentes classes utilisee dans le code

let lib = document.querySelectorAll(".images img")
let choix = document.querySelectorAll(".choix p")
let screen = document.querySelector(".animes")
let Regles = document.querySelector(".button")

//on cree une fonction random pour generer un nombre aleatoire entre 0 et un maximum

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//cette fonction verifie dans un tableau chaque texte d'un element est similaire aux autres

function Verify(x,y,z,a,tab)
{
    while ((x.textContent == y.textContent) || (x.textContent == z.textContent) || (x.textContent == a.textContent))
    {
        let rnum = getRandomInt(10)
        x.textContent = lib[rnum].alt
        x.classList.add(lib[rnum].src)
    }
}

//on genere aleatoirement avec la fonction cree plus haut ( getRandomInt() ) en cherchant dans une liste d'images (lib), et on couvre toute la div avec l'image de fond

screen.style.backgroundImage = `url(${lib[getRandomInt(10)].src})`
screen.style.backgroundSize = "cover"

//on attribue une reponse pour chaque case disponible (cases sont dans une liste appelle choix), puis on verifie si la reponse est deja attribuee dans une autre case avec la fonction verify(case1,case2,case3,case4,liste des cases)

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

//on verifie si parmis les 4 cases disponibles, si une d'entre elles contient la bonne reponse, sinon on met aleatoirement la bonne reponse sur une des 4 cases

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
    //L.76 debug
    console.log(screen.style.backgroundImage)

    setTimeout(()=>{choix[rnum2].classList.remove(Previous)},1500)
    choix[rnum2].classList.add(screen.style.backgroundImage.slice(4,screen.style.backgroundImage.length-1))
}

//on cree une variable vide pour l'utiliser en memoire
let finalUrl

//on cree une fonction qui verifie si la case choisie est la bonne reponse

function OnClick(x,y,i,n)
{
    //pour fixer certains bugs, on verifie si l'url a deja des guillemets, si il y en a pas on en ajoute pour corrigier la syntaxe (de url("Text") vers "url("Text")" ou alors de ""url("Text")"" vers "url("Text")")
    if (x.className.search(`"`) == -1)
    {
        finalUrl = `url("${x.className}")`
    }
    else
    {
        finalUrl = `url(${x.className})`
    }

    //on verifie la bonne reponse en comparant l'url applique dans la classe de la case choisie et celle de l'image affichee

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

        //Si la case est une mauvaise reponse, alors on verifie dans les autres cases ou est la bonne reponse pour l'afficher

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
            //apres ca on finit avec la syntaxe suivante: "url("NomDeLaClasseDeLaCaseChoisie")"
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

        //on ajoute un texte en blanc qui dit "La réponse est: "TextDeLaBonneCase"

        document.querySelector(".container").insertAdjacentHTML("beforeend",`<p class = "reponse">La réponse est: ${y[Num3].textContent}</p>`)
        document.querySelector(".container .reponse").style.color = "White"
    }
    document.querySelector(".container .reponse").style.width = "100vw"

    //Puis 2.5s apres la reponse choisie, on recharge la page pour une nouvelle question

    setTimeout(()=> {
        window.location.reload();
    },2500)

    //L.151 debug
    console.log("done")
}

//pour chaque case dans la liste de cases, on ajoute un ecouteur d'evenement, qui attend un clic, puis une fois clique, va activer la fonction OnClick (L.87), avec en parametres (Case cliquee, la liste de cases, index actuel de 0 a 3)

for (let i = 0; i < choix.length; i++)
{
    choix[i].addEventListener("click", (event) => OnClick(choix[i],choix,i))
}

let bool = false

//ici on affiche les regles en cliquant sur la case "Regles", on agrandit la case et on remplace le titre par les regles, on peut refermer en recliquant dessus, car tout est suivit par un ecouteur d'evenement

let Content = "Bienvenue sur le quizz ! Pour y jouer, vous devrez cliquer sur un des 4 choix proposés puis attendre que la bonne réponse s'affiche pour découvrir le nouvel anime à deviner. Bon courage !"
let Mem

Regles.addEventListener("click", (event) => {
    if (bool == false){
        bool = true
        Mem = Regles.textContent
        Regles.textContent = Content
        Regles.style.textAlign = "center"
        Regles.style.top = "900px"
        Regles.style.height = "17vw"
        Regles.style.width = "30vw"
    }
    else{
        Regles.textContent = Mem
        bool = false
        Regles.style.height = "3vw"
        Regles.style.width = "8vw"
    }
})