import React from 'react';
import { Name } from './types';

interface NamesListProps {
    suggestions: Name[];
    loading: boolean;
    error: string;
    inputValue: string;
    isTimeout: boolean;
    requestCompleted: boolean;
}

const NamesList: React.FC<NamesListProps> = ({
    suggestions,
    loading,
    error,
    isTimeout,
    requestCompleted,
}) => {
    if (loading) {
        return <li className="autocomplete-loading">Loading...</li>;
    }

    if (isTimeout) {
        return <li className="autocomplete-error">Request timed out, please try again.</li>;
    }

    if (error) {
        return <li className="autocomplete-error">Error: {error}</li>;
    }

    if (requestCompleted && suggestions.length === 0) {
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
