export async function getEventDetails () {
    try {
        const url = 'https://cloud.culture.tw/frontsite/trans/SearchShowAction.do?method=doFindFestivalTypeJ'
        const request = new Request(url, {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
                'Content-Type': 'application/json',
            }),
        })

        const response = await fetch(request)
        const data = await response.json()
        return data
    } catch (err) {
        console.error('error', err);
    }
}

