import { useEffect, useState } from 'react'
import { PlanetsType } from '../components/typings'

export const usePlanets = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [dataPlanets, setDataPlanets] = useState<PlanetsType>()

    const getPlanets = async () => {
        setIsLoading(true)
        await fetch(import.meta.env.VITE_BASE_URL + '/planets')
            .then(res => res.json())
            .then(setDataPlanets)
            .catch(console.error)
            .finally(() => setIsLoading(false))
    }

    const changePage = async (url: string) => {
        setIsLoading(true)
        await setDataPlanets()
        await fetch(url)
            .then(res => res.json())
            .then(setDataPlanets)
            .catch(console.error)
            .finally(() => setIsLoading(false))
    }

    useEffect(() => { getPlanets() }, [])

    return { dataPlanets, isLoading, changePage }
}
