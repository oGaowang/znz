export default{
    getOrganizationList(state,payload){
        state.organizationList=payload
    },
    getCompanyListIndex(state,payload){
        state.companyListIndex=payload
    },
    turnOrganizationId(state,payload){
        state.organizationId=payload
    },
    tureExpireShow(state,payload){
        state.expireShow=payload
    },
    getIsAdmin(state,payload){
        state.isAdmin=payload
    },
}