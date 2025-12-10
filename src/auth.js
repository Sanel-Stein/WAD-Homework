export default {
    user:  { authenticated: false },
    authenticated: async function () {
        await fetch('http://localhost:3000/auth/authenticate', {
            credentials: 'include',
        })
        .then((response) => response.json()) // turn the response into JS object
        .then ((data) => {
            this.user.authenticated = data.authenticated;
            console.log(data);
        })
        .catch((e) => {
            console.log(e);
            console.log("error logout");
        });
        return this.user.authenticated;        
    }
}
