import React, { useState, useEffect } from 'react';
import { Name } from './types';

interface NamesListProps {
    suggestions: Name[];
    loading: boolean;
    error: string;
    inputValue: string;
    isTimeout: boolean;
}

const NamesList: React.FC<NamesListProps> = ({
    suggestions,
    loading,
    error,
    inputValue,
    isTimeout,
}) => {
    const [hasSearched, setHasSearched] = useState(false);

    useEffect(() => {
        if (inputValue.trim()) {
            setHasSearched(true);
        } else {
            setHasSearched(false);
        }
    }, [inputValue]);

    if (loading) {
        return <li className="autocomplete-loading">Loading...</li>;
    }

    if (isTimeout) {
        return <li className="autocomplete-error">Request timed out, please try again.</li>;
    }

    if (error) {
        return <li className="autocomplete-error">Error: {error}</li>;
    }

    if (hasSearched && suggestions.length === 0) {
        return <li className="autocomplete-no-results">No results found</li>;
    }

    return (
        <ul className="autocomplete-suggestions">
            {suggestions.map((user: any) => (
                <li
                    key={user.id}
                    className="autocomplete-suggestion"
                    data-testid={`suggestion-item-${user.id}`}
                >
                    {user.name}
                </li>
            ))}
        </ul>
    );
};

export default NamesList;
