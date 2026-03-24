import {useState} from "react";
import {useCreateCityMutation} from "./cityApi.ts";

export const CreateCity = () => {
    const [cityName, setCityName] = useState("")
    const [cityDescription, setCityDescription] = useState("")

    const [createCity, {isLoading, isSuccess, isError}] = useCreateCityMutation();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await createCity({name: cityName, description: cityDescription}).unwrap();
            setCityName("");
            setCityDescription("");
        } catch (err) {
            console.error("Failed to create city", err);
        }
    }
    return (
        <>
            <div className={"container m-auto"}>
                <form
                    onSubmit={handleSubmit}
                    className="max-w-md mx-auto bg-white shadow-md rounded-2xl p-6 space-y-4 mt-3"
                >
                    <h2 className="text-xl font-semibold text-gray-800">
                        Create City
                    </h2>

                    {/* Name */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Name
                        </label>
                        <input
                            type="text"
                            value={cityName}
                            onChange={(e) => setCityName(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter city name"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block text-sm font-medium text-gray-600 mb-1">
                            Description
                        </label>
                        <textarea
                            value={cityDescription}
                            onChange={(e) => setCityDescription(e.target.value)}
                            required
                            className="w-full px-3 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400"
                            placeholder="Enter description"
                            rows={4}
                        />
                    </div>

                    {/* Button */}
                    <button
                        type="submit"
                        disabled={isLoading}
                        className="w-full bg-blue-500 text-white py-2 rounded-xl hover:bg-blue-600 transition disabled:opacity-50"
                    >
                        {isLoading ? "Creating..." : "Create City"}
                    </button>

                    {/* Status messages */}
                    {isSuccess && (
                        <p className="text-green-600 text-sm">City created successfully!</p>
                    )}
                    {isError && (
                        <p className="text-red-600 text-sm">Error creating city</p>
                    )}
                </form>
            </div>
        </>
    )
}