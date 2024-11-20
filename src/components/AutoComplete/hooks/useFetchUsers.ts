import { useState, useEffect } from 'react';
import { fetchUsers } from '../../../services/api';

export const useFetchUsers = (query: string) => {
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [isTimeout, setIsTimeout] = useState(false);
    const [requestInitiated, setRequestInitiated] = useState(false);

    useEffect(() => {
        if (query.trim()) {
            setLoading(true);
            setError('');
            setIsTimeout(false);
            setRequestInitiated(true);

            fetchUsers(query)
                .then((data) => {
                    setSuggestions(data);
                    setLoading(false);
                })
                .catch((err) => {
                    setLoading(false);
                    if (err.message === 'Request timed out') {
                        setIsTimeout(true);
                        setError(err.message);
                    } else {
                        setError('Error fetching users');
                    }
                });
        } else {
            setSuggestions([]);
        }
    }, [query]);

    return { suggestions, loading, error, isTimeout, requestInitiated };
};
