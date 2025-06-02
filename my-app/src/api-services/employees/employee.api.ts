import employeeBaseApi from "../api";

export const employeeApi= employeeBaseApi.injectEndpoints({
    endpoints:(builder)=>({
        getEmployeeList:builder.query({
            query:()=>'/employee',
            providesTags:['EMPLOYEES']
        }),
        deleteEmployee:builder.mutation({
            query:({id})=>({
                url:`/employee/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['EMPLOYEES']
        })
    })
})

export const {useDeleteEmployeeMutation,useGetEmployeeListQuery} = employeeApi