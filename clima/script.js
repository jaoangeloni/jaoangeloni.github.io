const input = document.querySelector("#input")


function valorInput() {
    let cidade = input.value
    api.get('/current.json?key=aadf26231a1e492fb28115659231004&q=' + cidade)
      .then(resp => {
          informacoes(resp)
          function informacoes () {
              let nomeCidade = document.querySelector("#nomeCidade")
              let nomeEstado = document.querySelector("#nomeEstado")
              let nomePais = document.querySelector("#nomePais")
              let tC = document.querySelector("#tC")
              let tF = document.querySelector("#tF")
              let localTime = document.querySelector("#localTime")
              let icon = document.querySelector("#icon")
              let wind = document.querySelector("#wind")
              let humidity = document.querySelector("#humidity")
              let uv = document.querySelector("#uv")

              icon.src = resp.data.current.condition.icon
              nomeCidade.innerHTML = resp.data.location.name
              nomeEstado.innerHTML = resp.data.location.region + ", "
              nomePais.innerHTML = resp.data.location.country
              tC.innerHTML = resp.data.current.temp_c + " ° Celsius"
              tF.innerHTML = resp.data.current.temp_f + " ° Fahrenheit"
              wind.innerHTML = "Ventos de " + resp.data.current.wind_kph + " Km/H"
              humidity.innerHTML = "Umidade " + resp.data.current.humidity + "%"
              uv.innerHTML = "Índice UV " + resp.data.current.wind_kph + "%"
              localTime.innerHTML = resp.data.location.localtime
            }   
        });
}

