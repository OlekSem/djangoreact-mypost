import {useGetCityQuery, useUpdateCityMutation} from "./cityApi.ts";
import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router";

export const EditCity = () => {
    const {id} = useParams<{id: string}>();

    const {data: city, isLoading} = useGetCityQuery(Number(id));
    const [updateCity, {isLoading: isUpdating, isSuccess, isError}] = useUpdateCityMutation();

    const [cityName, setCityName] = useState("");
    const [cityDescription, setCityDescription] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        if (city) {
            setCityName(city.name);
            setCityDescription(city.description);
        }
    }, [city])

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await updateCity({
                id: Number(id),
                data: {
                    name: cityName,
                    description: cityDescription
                }
            });

        } catch (err){
            console.log(err.message)
        }
    }
    if(isSuccess){
        navigate('/');
    }
    if (isLoading) return <p className="text-center mt-10">Loading...</p>;

    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="max-w-md w-full bg-white shadow-lg rounded-2xl p-6 space-y-4"
            >
                <h2 className="text-xl font-semibold text-gray-800">
                    Edit City
                </h2>

                {/* Name */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        value={cityName}
                        onChange={(e) => setCityName(e.target.value)}
                        className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm text-gray-600 mb-1">
                        Description
                    </label>
                    <textarea
                        value={cityDescription}
                        onChange={(e) => setCityDescription(e.target.value)}
                        className="w-full px-3 py-2 border rounded-xl focus:ring-2 focus:ring-blue-400"
                        rows={4}
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={isUpdating}
                    className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition disabled:opacity-50"
                >
                    {isUpdating ? "Updating..." : "Update City"}
                </button>

                {/* Status */}
                {isSuccess && (
                    <p className="text-green-600 text-sm">
                        City updated successfully!
                    </p>
                )}
                {isError && (
                    <p className="text-red-600 text-sm">
                        Error updating city
                    </p>
                )}
            </form>
        </div>
    )
}