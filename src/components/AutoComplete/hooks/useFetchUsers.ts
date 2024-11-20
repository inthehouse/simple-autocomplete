import { useState, useEffect } from 'react';

export const useFetchUsers = (query: string) => {
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        if (query.trim()) {
            setLoading(true);
            setError('');
            fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
                .then((res) => res.json())
                .then((data) => {
                    setSuggestions(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setError('Error fetching users');
                    setLoading(false);
                });
        } else {
            setSuggestions([]);
        }
    }, [query]);

    return { suggestions, loading, error };
};
