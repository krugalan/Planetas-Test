export interface PlanetsType {
    count: number;
    next?: string;
    previous?: string;
    results?: PlanetType[] | null;
}

export interface PlanetType {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents?: (string | null)[] | null;
    films?: (string)[] | null;
    created: string;
    edited: string;
    url: string;
}

export type HeaderPlanetsType = {
    count: number;
    next: string | null;
    previous: string | null;
};