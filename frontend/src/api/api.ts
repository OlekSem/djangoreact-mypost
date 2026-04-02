import {createApi} from "@reduxjs/toolkit/query/react";
import {fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import APP_ENV from "../env";

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: APP_ENV.API_BASE_URL + '/api/'
    }),
    tagTypes: ['City', 'Post'],
    endpoints: () => ({})
})