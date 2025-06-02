import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const employeeBaseApi = createApi({
    reducerPath:"employeeApi",
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:3003",
        prepareHeaders:(headers)=>{
            const token = localStorage.getItem("token");
    
            if(token){
                headers.set("Authorization",`Bearer ${token}`);
            }
            return headers
        }
    }),
    refetchOnMountOrArgChange:true,                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
    refetchOnReconnect:true,
    endpoints:()=>({}),
    tagTypes:['EMPLOYEES','EMPLOYEES_DETAILS']
});



export default employeeBaseApi