class GitHub {
    constructor() {
        this.client_id = 'de03ef35fa22dc7c166d';
        this.client_secret = '2ad117b9f24241c75b8d2122b0832f92a997f9b9';
    }

    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`)

        const profile = await profileResponse.json();

        return {
            profile,
            
        }
    }
}