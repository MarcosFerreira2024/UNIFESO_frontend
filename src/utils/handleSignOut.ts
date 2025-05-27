import Cookies from "js-cookie";


export function handleSignOut() {

    
    Cookies.remove("token")

    window.location.href = "/login"

}