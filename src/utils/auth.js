import jwtDecode from "jwt-decode";

const TOKEN_KEY = "token";

export function getToken() {
    return localStorage.getItem(TOKEN_KEY);
}

export function isAuthenticated() {
    // Implement your authentication logic here
    const token = getToken();
    if (!token) return null;

    try {
        const decoded = jwtDecode(token);
        if (decoded.exp * 1000 < Date.now()) {
            logout();
            return null;
        }
        return decoded;
    } catch (err) {
        logout();
        return null;
    }
}

export function setToken(token) {
    // implement your logic to set the token
    localStorage.setItem(TOKEN_KEY, token);
}

export function logout() {
    // implement your logic to remove the token
    localStorage.removeItem(TOKEN_KEY);
}