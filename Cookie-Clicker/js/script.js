var totalCoins = 0;

function onClick() {
    totalCoins += 1;
    document.getElementById("Coin").innerHTML = totalCoins;
    console.log(totalCoins)

    document.getElementById("totalCoins").innerHTML = "Total Coins: " + totalCoins;
};

