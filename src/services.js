import { useNavigate } from "react-router-dom"

async function logUser(infoUser) {
    const navigate = useNavigate;
    const redirect = () => (navigate("/user"));
    const request = await fetch('http://localhost:3001/api/v1/user/login',{
        method : "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: infoUser
    })
    if(!request.ok){
        throw new Error("erreur API");
    }
    else if(request.status === "401" || request.status === "403"){
        redirect();
    }
    const result = await request.json();
    return result
};

export {logUser}