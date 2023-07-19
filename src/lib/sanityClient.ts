import { createClient } from "next-sanity";

export const client = createClient({
    apiVersion : "2023-07-13",
    dataset : process.env.NEXT_PUBLIC_SANITY_DATASET,
    projectId : process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    token : process.env.ACCESS_TOKEN,
    useCdn :true

})
