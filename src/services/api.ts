export const fetchUsers = async (query: string): Promise<any[]> => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();

        return data.filter((user: any) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
};
