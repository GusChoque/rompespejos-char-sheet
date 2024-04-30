function CharSheet() {
  return (
    <form className="border-4">
      <h1 className="text-center text-3xl font-bold">Rompespejos</h1>
      <section className="p-4 grid grid-cols-3 gap-4 border-t-4">
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between gap-2">
            <span>Nombre:</span>
            <input type="text" name="nombre" className="w-7/12 px-2" />
          </li>
          <li className="flex justify-between gap-2">
            <span>Alias:</span>
            <input type="text" name="alias" className="w-7/12 px-2" />
          </li>
          <li className="flex justify-between gap-2">
            <span>Edad:</span>
            <input type="number" name="edad" className="w-7/12 px-2" />
          </li>
          <li className="flex justify-between gap-2">
            <span>Sexo:</span>
            <select type="select" name="sexo" className="w-7/12 px-2">
              <option disabled selected value> -- Selecciona --
              </option>
              <option value="1">Masculino</option>
              <option value="2">Femenino</option>
              <option value="3">No Binario</option>
              <option value="4">No Jodas</option>
            </select>
          </li>
          <li className="flex justify-between gap-2">
            <span>Signo:</span>
            <select type="select" name="sexo" className="w-7/12 px-2">
              <option disabled selected value> -- Selecciona --
              </option>
              <option value="1">Acuario</option>
              <option value="2">Piscis</option>
              <option value="3">Aries</option>
              <option value="4">Tauro</option>
              <option value="5">Geminis</option>
              <option value="6">Cancer</option>
              <option value="7">Leo</option>
              <option value="8">Virgo</option>
              <option value="9">Libra</option>
              <option value="10">Escorpio</option>
              <option value="11">Sagitario</option>
              <option value="12">Capricornio</option>
              <option value="13">En serio?</option>
            </select>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between gap-2">
            <span>Especie:</span>
            <select type="select" name="sexo" className="w-7/12 px-2">
              <option disabled selected value> -- Selecciona --
              </option>
              <option value="1">Humano</option>
              <option value="2">Elfo</option>
              <option value="3">Enano</option>
              <option value="4">Orco</option>
              <option value="5">Hobbit</option>
              <option value="6">Goblin</option>
              <option value="7">Titánido</option>
              <option value="8">Troll</option>
            </select>
          </li>
          <li className="flex justify-between gap-2">
            <span>Cultura:</span>
            <select type="select" name="sexo" className="w-7/12 px-2">
              <option disabled selected value> -- Selecciona --
              </option>
              <option value="1">Aborígenes</option>
              <option value="2">Magnarios</option>
              <option value="3">Imperiales</option>
              <option value="4">Nómadas</option>
              <option value="5">Nórdicos</option>
              <option value="6">Oriotas</option>
              <option value="7">Sarianos</option>
              <option value="8">Tikaoríes</option>
            </select>
          </li>
          <li className="flex justify-between gap-2">
            <span>Clase:</span>
            <select type="select" name="sexo" className="w-7/12 px-2">
              <option disabled selected value> -- Selecciona --
              </option>
              <option value="1">Asesino</option>
              <option value="2">Bárbaro</option>
              <option value="3">Brujo</option>
              <option value="4">Centinela</option>
              <option value="5">Chamán</option>
              <option value="6">Clérigo</option>
              <option value="7">Druida</option>
              <option value="8">Explorador</option>
              <option value="9">Guardián</option>
              <option value="10">Guerrero</option>
              <option value="11">Hechicero</option>
              <option value="12">Ilusionista</option>
              <option value="13">Mago</option>
              <option value="14">Monje</option>
              <option value="15">Nigromante</option>
              <option value="16">Ninja</option>
              <option value="17">Oráculo</option>
              <option value="18">Paladín</option>
              <option value="19">Pícaro</option>
              <option value="20">Psíquico</option>
              <option value="21">Renegado</option>
              <option value="22">Samurai</option>
            </select>
          </li>
          <li className="flex justify-between gap-2">
            <span>Trasfondo:</span>
            <select type="select" name="sexo" className="w-7/12 px-2">
              <option disabled selected value> -- Selecciona --
              </option>
              <option value="1">Académico</option>
              <option value="2">Acólito</option>
              <option value="3">Artesano</option>
              <option value="4">Artífice</option>
              <option value="5">Artista</option>
              <option value="6">Boticario</option>
              <option value="7">Criminal</option>
              <option value="8">Elegido</option>
              <option value="9">Ermitaño</option>
              <option value="10">Farsante</option>
              <option value="11">Forastero</option>
              <option value="12">Granjero</option>
              <option value="13">Héroe</option>
              <option value="14">Loco</option>
              <option value="15">Marginal</option>
              <option value="16">Marinero</option>
              <option value="17">Mercader</option>
              <option value="18">Noble</option>
              <option value="19">Prodigio</option>
              <option value="20">Soldado</option>
            </select>
          </li>
          <li className="flex justify-between gap-2">
            <span>Alineamiento:</span>
            <select type="select" name="sexo" className="w-7/12 px-2">
              <option disabled selected value> -- Selecciona --
              </option>
              <option value="1">Legal Bueno</option>
              <option value="2">Neutral Bueno</option>
              <option value="3">Caótico Bueno</option>
              <option value="4">Legal Neutral</option>
              <option value="5">Neutral</option>
              <option value="6">Caótico Neutral</option>
              <option value="7">Legal Maligno</option>
              <option value="8">Neutral Maligno</option>
              <option value="9">Caótico Maligno</option>
            </select>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="flex justify-between gap-2">
            <span>Altura:</span>
            <input type="text" className="w-7/12 px-2" />
          </li>
          <li className="flex justify-between gap-2">
            <span>Contextura:</span>
            <input type="text" className="w-7/12 px-2" />
          </li>
          <li className="flex justify-between gap-2">
            <span>Piel:</span>
            <input type="text" className="w-7/12 px-2" />
          </li>
          <li className="flex justify-between gap-2">
            <span>Ojos:</span>
            <input type="text" className="w-7/12 px-2" />
          </li>
          <li className="flex justify-between gap-2">
            <span>Cabello:</span>
            <input type="text" className="w-7/12 px-2" />
          </li>
        </ul>
      </section>
      <section className="flex">
        <div className="grid grid-rows-2 w-1/3">
          <fieldset className="border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">
              Atributos
            </legend>
          </fieldset>
          <fieldset className="border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">Salud</legend>
            <p>algo</p>
          </fieldset>
          <div className="flex">
            <h4 className="salvacion-de-muerte">Salvacion de muerte</h4>
          </div>
          <div>
            <h4>cuerdo</h4>
          </div>
        </div>
        <div className="w-2/3">
          <fieldset className="border-l-4 border-t-4 grid grid-cols-2">
            <legend className="m-auto px-2 text-3xl font-bold">
              Habilidades
            </legend>

            <p>algo</p>
            <p>otro</p>
            <p>algo</p>
            <p>otro</p>
            <p>algo</p>
            <p>otro</p>
            <p>algo</p>
            <p>otro</p>
            <p>algo</p>
            <p>otro</p>
            <p>algo</p>
            <p>otro</p>
          </fieldset>
          <div className="border-l-4">
            <fieldset className=" border-t-4">
              <legend className="m-auto px-2 text-3xl font-bold">
                Combate
              </legend>
              <p>algo</p>
              <p>algo</p>
              <p>algo</p>
              <p>algo</p>
            </fieldset>
          </div>
        </div>
      </section>
      <section className="flex">
        <div className="w-1/3">
          <fieldset className="border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">
              Armaduras
            </legend>
          </fieldset>
        </div>
        <div className="border-l-4 w-1/3">
          <fieldset className="border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">Armas</legend>
          </fieldset>
        </div>
        <div className="w-1/3">
          <fieldset className="border-l-4 border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">Focos</legend>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
          </fieldset>
        </div>
      </section>
      <section className="flex">
        <div className="w-1/3">
          <fieldset className="border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">
              Experiencias
            </legend>
          </fieldset>
        </div>
        <div className="border-l-4 w-1/3">
          <fieldset className="border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">Mochilas</legend>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
          </fieldset>
          <fieldset className="border-t-4">
            <legend className="m-auto px-2 text-3xl font-bold">Idiomas</legend>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
          </fieldset>
        </div>
        <div className="border-l-4 w-1/3">
          <fieldset className="border-t-4 h-full">
            <legend className="m-auto px-2 text-3xl font-bold">Posicion</legend>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
            <p>algo</p>
          </fieldset>
        </div>
      </section>
    </form>
  );
}

export default CharSheet;
