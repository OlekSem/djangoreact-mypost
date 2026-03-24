import {api} from "../../api/api";
import type {City, CreateCity} from "../../types";

export const cityApi = api.injectEndpoints({
    endpoints: (build) => ({
        getCities: build.query<City[], void>({
            query: () => ({
                url: 'cities/',
            }),
            providesTags: ['City']
        }),
        deleteCity: build.mutation<void, number>({
            query: (id) => ({
                url: `cities/${id}/`,
                method: 'DELETE'
            }),
            invalidatesTags: ['City']
        }),
        createCity: build.mutation<void, CreateCity>({
            query: (city) => ({
                url: 'cities/',
                method: 'POST',
                body: city
            }),
            invalidatesTags: ['City']
        }),
        updateCity: build.mutation<City, {id: number; data: Partial<City>}>({
            query: ({id, data}) => ({
                url: `cities/${id}/`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['City']
        }),
        getCity: build.query<City, number>({
            query: (id) => ({
                url: `cities/${id}/`,
                method: 'GET',
            }),
            providesTags: (result, error, id) => [{type: 'City', id}],
        })
    })
});

export const {
    useGetCitiesQuery,
    useDeleteCityMutation,
    useCreateCityMutation,
    useUpdateCityMutation,
    useGetCityQuery,
} = cityApi;