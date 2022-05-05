async function getName() {
    try {
      const res = await fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=50");
      const pokemon = await res.json();
      const data = await pokemon.results;
      data.map((list) => {
        getStatus(list);
      });
      return data;
    } catch (error) {
      console.error(error);
    }
  }
  const getStatus = async (pokemon) => {
    try {
      const inPoke = await fetch(pokemon.url);
      const url = await inPoke.json();
       console.log("Id:",url.id);
       console.log("Name:",url.name);
       console.log("Abilities:",url.abilities[0].ability.name);
       console.log("Move:",url.moves[0].move);
       console.log("Weight",url.weight);
      console.log("pics",url.sprites.front_shiny);
          var list =  `<tr>
          <th>${url.id}</th> 
          <td><img width="70%" src="${url.sprites.front_shiny}" class="avatar">
          <th>${url.name}</th>
          <th>.${url.abilities[0].ability.name}</th>
          <th>${url.moves[0].move.name}</th>
          <th>${url.weight}</th>
          </tr>`;
          document.getElementById("content").innerHTML += list;   
    }
     catch (error) {
      console.error(error);
    }
  };
getName()

