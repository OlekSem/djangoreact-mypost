import {useDeleteCityMutation, useGetCitiesQuery} from "./cityApi.ts";
import {useNavigate} from "react-router";

export default function CityList() {
    const {data, error, isLoading} = useGetCitiesQuery();
    const [deleteCity] = useDeleteCityMutation();

    const navigate = useNavigate();

    const handleDelete = async (id: number) => {
        await deleteCity(id)
    }

    if (isLoading) return <p>Loading...</p>;
    if (error) return <p>Error loading cities</p>;

    return (
        <>
            <h2 className={'text-center text-2xl'}>List of Cities in the Database</h2>
            <div className={'m-6 border border-b-0 rounded'}>
                <ul>
                    {data?.map((city) => (
                        <li className={'border-b flex justify-between rounded p-2'} key={city.id}>
                            <p><b>{city.name}</b> - {city.description}</p>
                            <div className={'px-2 border-l'}>
                                <button type={'button'} onClick={() => {
                                    navigate(`/${city.id}/edit`)
                                }}
                                        className={' bg-yellow-500 hover:bg-yellow-400 active:bg-yellow-300 text-white font-bold py-1 px-2 rounded mx-1'}>Edit
                                </button>
                                <button type={'button'} onClick={() => {
                                    handleDelete(city.id)
                                }}
                                        className={'bg-red-500 hover:bg-red-400 active:bg-red-300 text-white font-bold py-1 px-2 rounded mx-1'}>Delete
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <dialog>

            </dialog>
        </>
    )
}