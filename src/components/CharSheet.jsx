function CharSheet() {
  return (
    <form className="border-4">
        <h1 className="text-center text-3xl font-bold">Rompespejos</h1>
      <section className="p-4 grid grid-cols-3 border-t-4">
        <ul>
          <li>
            <span>Nombre:</span> <input type="text" />
          </li>
          <li>
            <span>Alias:</span>
            <input type="text" />
          </li>
          <li>Edad:</li>
          <li>Sexo:</li>
          <li>Signo:</li>
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
        </div>
          <fieldset className="border-t-4 grid grid-cols-2 w-2/3 border-l-4">
            <legend className="m-auto px-2 text-3xl font-bold">
              Habilidades
            </legend>

            <p>algo</p>
            <p>otro</p>
          </fieldset>
      </section>
      <section>
        <p>algo</p>
      </section>
    </form>
  );
}

export default CharSheet;
