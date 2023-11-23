import { LoaderSpinner } from './LoaderSpinner'
import { Planet } from './Planet'
import { PlanetType } from './typings'

export const Planets = ({ dataPlanets, isLoading }) => {
    if (isLoading) {
        return <LoaderSpinner />
    }

    return dataPlanets?.results ?
        (<div className="card-grid">
            {dataPlanets.results.map((p: PlanetType) => <Planet key={p.name.replace(' ', '-')} {...p} />)}
        </div>) : null
}
