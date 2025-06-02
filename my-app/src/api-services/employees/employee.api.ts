import employeeBaseApi from "../api";

export const employeeApi = employeeBaseApi.injectEndpoints({
    endpoints: (builder) => ({
        getEmployeeList: builder.query({
            query: () => '/employee',
            providesTags: ['EMPLOYEES']
        }),
        deleteEmployee: builder.mutation({
            query: ({id}) => ({
                url: `/employee/${id}`,
                method: 'DELETE'
            }),
            invalidatesTags: ['EMPLOYEES']
        }),
        getEmployee: builder.query({
            query: ({id}) => `/employee/${id}`
        }),
        addEmployee: builder.mutation({
            query: (employee) => ({
                url: '/employee',
                method: 'POST',
                body: employee
            }),
            invalidatesTags: ['EMPLOYEES']
        }),
        editEmployee: builder.mutation({
            query: (employee) => ({
                url: `/employee/${employee.id}`,
                method: 'PUT',
                body: employee
            }),
            invalidatesTags: ['EMPLOYEES']
        })
    })
});

export const {
    useDeleteEmployeeMutation,
    useGetEmployeeListQuery,
    useGetEmployeeQuery,
    useAddEmployeeMutation,
    useEditEmployeeMutation
} = employeeApi;