function App() {
  return (
    <div className="">
      <div className="border-4 divide-y-4">
        <section className="p-4 grid grid-cols-3 relative">
          <h1 className="px-2 text-3xl font-bold text-center absolute right-1/2 translate-x-1/2 -top-6 bg-black">
            Rompespejos
          </h1>
          <ul>
            <li>
              <span>Nombre:</span> <input type="text" />
              </li>
            <li><span>Alias:</span><input type="text" /></li>
            <li>Edad:</li>
            <li>Sexo:</li>
            <li>Signo:</li>
          </ul>
          <ul>
            <li>Especie:</li>
            <li>Cultura:</li>
            <li>Clase:</li>
            <li>Trasfondo:</li>
            <li>Alineamiento:</li>
          </ul>
          <ul>
            <li>Altura:</li>
            <li>Contextura:</li>
            <li>Piel:</li>
            <li>Ojos:</li>
            <li>Cabello:</li>
          </ul>
        </section>
        <section className="divide-x-4 flex">
          <div className="grid grid-rows-2 w-1/3 divide-y-4">
            <fieldset className="p-4 relative grid grid-cols-3">
              <h3 className="px-2 text-3xl font-bold absolute right-1/2 translate-x-1/2 -top-6 bg-black">
                Atributos
              </h3>
              <p>FUE</p>
              <p>Fuerza</p>
              <div>
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
              </div>

              <p>FUE</p>
              <p>Fuerza</p>
              <div>
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
              </div>
              <p>FUE</p>
              <p>Fuerza</p>
              <div>
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
              </div>
              <p>FUE</p>
              <p>Fuerza</p>
              <div>
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
                <input type="checkbox" name="" id="" />
              </div>
            </fieldset>
            <fieldset className="p-4">
              <legend className="m-auto px-2 text-3xl font-bold">Salud</legend>
            </fieldset>
          </div>
          <div className="p-4 grid grid-cols-2 w-2/3 relative">
            <h3 className="px-2 text-3xl font-bold text-center absolute right-1/2 translate-x-1/2 -top-6 bg-black">
              Habilidades
            </h3>
            <p>algo</p>
            <p>otro</p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
