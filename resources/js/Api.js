const Api = {
    async ajx(url, data = {}, method = "POST") {
        const response = await fetch(url, {
            method,
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
                "Authorization": localStorage.getItem('token')
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
        });
        return response.json();
    },
    async ajxGet(url) {
        const response = await fetch(url, {
            method : "GET",
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
                "Accept": 'application/json',
                "Authorization": localStorage.getItem('token')
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
        });
        return response.json();
    }
}

export default Api;