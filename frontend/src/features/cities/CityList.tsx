import {useEffect, useState} from "react";
import type {City} from "../../types";
import {getCities} from "../../api/cities.ts";

export default function CityList (){
    const [cities, setCities] = useState<City[]>([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        getCities()
            .then(setCities)
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <p>Loading cities...</p>;

    return (
        <>
            <h2 className={'text-center text-2xl'}>List of Cities in the Database</h2>
            <div className={'m-6 border border-b-0 rounded'}>
                <ul>
                    {cities?.map((city) => (
                        <li className={'border-b rounded p-2'} key={city.id}><b>{city.name}</b> - {city.description}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}