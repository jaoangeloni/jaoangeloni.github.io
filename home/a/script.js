// const j = document.querySelector(".j")
// j.onmouseover = () => {j.classList.toggle("hover")}
// const a = document.querySelector(".a")
// a.onmouseover = () => {a.classList.toggle("hover")}
// const o = document.querySelector(".o")
// o.onmouseover = () => {o.classList.toggle("hover")}


aportes = [
    { mes: 'Janeiro', aporte:500, juros: 0.001 },
    { mes: 'Fevereiro', aporte:300, juros: 0.003 },
    { mes: 'Março', aporte:250, juros: 0.005 },
    { mes: 'Abril', aporte:300, juros: 0.01 },
    { mes: 'Maio', aporte:100, juros: 0.007 },
    { mes: 'Junho', aporte:0, juros: 0.005 },
    { mes: 'Julho', aporte:0, juros: 0.003 },
    { mes: 'Agosto', aporte:300, juros: 0.008 },
    { mes: 'Setembro', aporte:400, juros: 0.011 },
    { mes: 'Outubro', aporte:200, juros: 0.01 },
]

function calcInvestimento(aporte, montante){
    return new Promise(res => {
        setTimeout(() =>{
            let rendimento = (aporte.aporte + montante) * aporte.juros;
            console.log(`Rendeu ${rendimento}`)
            res(rendimento)
        }, 500)
    })
}

async function investimentos(){
    let montate = 0;
    for (let i = 0; i< aportes.lenght; i++){
        console.log(`${aportes[i].mes}, investimento: ${aportes[i].aporte}, juros: ${aportes[i].juros * 100}`)
        let rendimento = await calcInvestimento(aportes[i], montate)
        montante += aportes[i].aporte + rendimento;
        console.log('montante = ' + montante)
    }
}

investimentos()