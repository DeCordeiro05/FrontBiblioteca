const BASE_URL = 'http://localhost:5206/api/Biblioteca'

export const getLivros = async () => {
    try {
        const response = await fetch(BASE_URL, {
            method: "GET",
            headers: {
                'Content-Type': 'application/Json'
            }
        });

        if (!response.ok) {
            throw new Error(`GET request failed with status ${response.status}`);
        }

        const textData = await response.text();
        const data = JSON.parse(textData);

        return data;
    } catch (error) {
        console.error(error)
        throw error;
    }
}