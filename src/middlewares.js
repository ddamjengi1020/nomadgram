export const isAuthenticated= (request) => {
    if (!request){
        throw Error("You need to log in to perform this action")
    }
    return;
}