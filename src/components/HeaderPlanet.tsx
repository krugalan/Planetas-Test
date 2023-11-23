
export const HeaderPlanets = ({ dataPlanets, changePage }) => {
    return (
        <header>
            <h1>PLANETS</h1>
            {dataPlanets && <>
                <div className="pagination">
                    <button className="buttonHeader" disabled={!dataPlanets.previous} onClick={() => dataPlanets?.previous && changePage(dataPlanets.previous)}>
                        Página Anterior
                    </button>
                    <button className="buttonHeader" disabled={!dataPlanets.next} onClick={() => dataPlanets?.next && changePage(dataPlanets.next)}>
                        Siguiente Página
                    </button>
                </div>
                <p>Total de planetas: {dataPlanets.count}</p>
            </>}
        </header>
    );
};