import { useState, useEffect } from 'react';
import { fetchNames } from '../../../services/api';

export const useFetchNames = (query: string) => {
    const [suggestions, setSuggestions] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string>('');
    const [isTimeout, setIsTimeout] = useState(false);
    const [requestInitiated, setRequestInitiated] = useState(false);
    
    // NOTE: added this just to stop the first input to give a "no results" error (this is a shortcut)
    const [requestCompleted, setRequestCompleted] = useState(false);

    useEffect(() => {
        if (query.trim()) {
            setLoading(true);
            setError('');
            setIsTimeout(false);
            setRequestInitiated(true);

            fetchNames(query)
                .then((data) => {
                    setSuggestions(data);
                    setLoading(false);
                    setRequestCompleted(true);
                })
                .catch((err) => {
                    setLoading(false);
                    setRequestCompleted(true);
                    if (err.message === 'Request timed out') {
                        setIsTimeout(true);
                        setError(err.message);
                    } else {
                        setError('Error fetching users');
                    }
                });
        } else {
            setSuggestions([]);
            setRequestCompleted(false);
        }
    }, [query]);

    return { suggestions, loading, error, isTimeout, requestInitiated, requestCompleted };
};
