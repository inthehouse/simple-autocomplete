export const fetchUsers = async (query: string): Promise<any[]> => {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => {
        controller.abort();
    }, 10000);

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`, {
            signal: controller.signal
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const data = await response.json();
        clearTimeout(timeoutId);
        return data;
    } catch (error: any) {
        clearTimeout(timeoutId);
        if (error.name === 'AbortError') {
            throw new Error('Request timed out');
        } else {
            throw new Error(error.message || 'Error fetching users');
        }
    }
};
