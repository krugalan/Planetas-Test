import { useState } from "react";
import { PlanetType } from "./typings"

export const Planet = ({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population }: PlanetType) => {
    const [showDetails, setShowDetails] = useState(false);

    const handleToggleDetails = () => {
        setShowDetails(!showDetails);
    };

    return (
        <div className={`card ${showDetails ? 'expanded' : ''}`}>
            <img src="https://via.placeholder.com/800x400" alt={`Imagen de ${name}`} />

            <div className="card-content">
                <h3>{name}</h3>
                <p><strong>Rotación:</strong> {rotation_period} horas</p>
                <p><strong>Órbita:</strong> {orbital_period} días</p>
                <p><strong>Diámetro:</strong> {diameter} km</p>

                {showDetails && (
                    <>
                        <p><strong>Clima:</strong> {climate}</p>
                        <p><strong>Gravedad:</strong> {gravity}</p>
                        <p><strong>Terreno:</strong> {terrain}</p>
                        <p><strong>Agua en la superficie:</strong> {surface_water}%</p>
                        <p><strong>Población:</strong> {population} habitantes</p>
                    </>
                )}

                <div className="toggle-button">
                    <button className="buttonShow" onClick={handleToggleDetails}>
                        {showDetails ? '- Ver menos' : '+ Ver más'}
                    </button>
                </div>
            </div>
        </div>
    )
}
