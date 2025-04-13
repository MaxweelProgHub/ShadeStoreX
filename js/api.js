// (2025) By ShadeDev

async function fetchApi() {
    try {
        const res = await fetch("https://raw.githubusercontent.com/MaxweelProgHub/jsonServer/main/host.json");
        const json = await res.json();
        
        const firstPackage = json[0].dimas;
        const secondPackage = json[1].dimas;
        const thirdPackage = json[2].dimas;
        const firstGame = json[0].jogo;
        const secondGame = json[1].jogo;
        const thirdGame = json[2].jogo;
        const firstPrice = json[0].preco_mzn;
        const secondPrice = json[1].preco_mzn;
        const thirdPrice = json[2].preco_mzn;

        document.getElementById("firstPrice").textContent = firstPrice;
        document.getElementById("firstPackage").textContent = firstPackage;
        document.getElementById("firstGame").textContent = firstGame;
        document.getElementById("secondPrice").textContent = secondPrice;
        document.getElementById("secondPackage").textContent = secondPackage;
        document.getElementById("secondGame").textContent = secondGame;
        document.getElementById("thirdPrice").textContent = thirdPrice;
        document.getElementById("thirdPackage").textContent = thirdPackage;
        document.getElementById("thirdGame").textContent = thirdGame;
    } catch (error) {
        console.log("Aconteceu um erro Durante o Fetch")
    }
}

fetchApi();

