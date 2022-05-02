const favoritos = ['Inca Sushi', 'Guaquito', 'Moochacho', 'Karabã', 'Edami', "Uncle Joe's", 'Spitfire', 'Nonnonappo', 'Quebec'];
const diferentoes = ['Outback', 'Frango e Fritas', 'Coco Bambu', 'Afonso', 'Parma Pizza', 'Villa Açoriana', 'China In Box', 'Kebab', 'Bread Pie (Arabe)', 'Number One Chicken', 'Madero', 'Shawarmeria', 'CK Frango no Balde'];


const randChoice = str => {
    let randomNum = Math.floor(Math.random() * str.length);
    return str[randomNum]
}



const todaysChoice = () => {
    let favChoice = randChoice(favoritos);
    let ousChoice = randChoice(diferentoes);
    tdchoice = ('Se vocês estão mais pra comodidade, hoje é dia de ' + favChoice + ', mas se hoje é dia de ousadia, pode ir de ' + ousChoice)
    document.getElementById('todaysChoice').innerHTML = tdchoice
    
}


todaysChoice()

let clickFunction = document.querySelector('button');
clickFunction.onclick = todaysChoice;



