function consumirConaxios() {
    const apiUrls = [
      "https://eldenring.fanapis.com/api/armors?limit=100",
      "https://eldenring.fanapis.com/api/weapons?limit=100",
      "https://eldenring.fanapis.com/api/incantations?limit=100",
      "https://eldenring.fanapis.com/api/talismans?limit=100"
    ];
  
    const elementIds = ["poke", "poke2", "poke3", "poke4"];
  
    Promise.all(apiUrls.map(url => axios.get(url)))
      .then(responses => {
        responses.forEach((response, index) => {
          try {
            const pokesection = document.getElementById(elementIds[index]);
            console.log(`Element found: ${elementIds[index]}`);
            const data = response.data;
            // random imagen
            var randomIndex = Math.floor(Math.random() * response.data.data.length);
            var randomItem = response.data.data[randomIndex];
            // crear nueva img
            var pokefoto = document.createElement("img");
            pokefoto.setAttribute("src", randomItem.image);
            pokesection.appendChild(pokefoto);
          } catch (error) {
            console.error(`Error processing response: ${error}`);
          }
        });
      })
      .catch(error => {
        console.error(`API error: ${error}`);
      });
  }