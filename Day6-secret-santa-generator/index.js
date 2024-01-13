const people = ["Satomi", "Jack", "Izumi", "Jumpei", "Koharu"]
const secretSantaPairs = generateSecretSantaPairs(people)
const containerPairs = document.getElementById("container-pairs")

function generateSecretSantaPairs(arr) {
    const shuffledArr = arr.slice().sort(() => Math.random() - 0.5)
    const pairs = {}
    
    for(let i = 0; i < shuffledArr.length; i++) {
        const giver = shuffledArr[i]
        const receiver = shuffledArr[(i + 1) % shuffledArr.length]
        
        pairs[giver] = receiver
    }
    
    const lastGiver = shuffledArr[shuffledArr.length - 1]
    const lastReceiver = pairs[lastGiver]
    
    if(lastGiver === lastReceiver) {
        const temp = shuffledArr[shuffledArr.length - 2]
        pairs[shuffledArr.length - 2] = lastReceiver
        pairs[lastGiver] = temp 
    }
    
    return pairs
}

const pairsHtml = Object.entries(secretSantaPairs)
    .map(([giver, receiver]) =>
        `<p>🎅${giver}　➡　${receiver}🎁</p>`
    ).join("")

containerPairs.innerHTML = pairsHtml

/*
const shuffledArr = arr.slice().sort(function() {
    return Math.random() - 0.5;
})

⇩ concise way

const shuffledArr = arr.slice().sort(() => Math.random() - 0.5)

----------------------------------------------------------------------------
const pairsHTMLArray = Object.entries(secretSantaPairs).map(function(pair) {
    const giver = pair[0];
    const receiver = pair[1];
    return '<p>' + giver + ' → ' + receiver + '</p>';
}).join('')

⇩ concise way

const pairsHtml = Object.entries(secretSantaPairs)
    .map(([giver, receiver]) =>
        `<p>${giver} →　${receiver}</p>`
    ).join("")
*/ 