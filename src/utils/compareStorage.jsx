function compareStorage() {
    const token = sessionStorage.getItem('token');
    const locToken = localStorage.getItem('token');
    if(token !== null){
        return token;
    }else{
        return locToken;
    }
};

export default compareStorage;