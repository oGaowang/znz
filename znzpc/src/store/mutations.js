export default{
    getUserId(state,payload){
        state.userId=payload;
        sessionStorage.setItem('userId',payload);  
    },

    getOrganizationId(state,payload){
        state.organizationId=payload;
        sessionStorage.setItem('organizationId',payload);
    },
}