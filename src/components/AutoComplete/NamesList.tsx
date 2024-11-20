import React from 'react';
import { Name } from './types';

interface NamesListProps {
    suggestions: Name[];
    loading: boolean;
    error: string;
    inputValue: string;
}

const NamesList: React.FC<NamesListProps> = ({
    suggestions,
    loading,
    error,
    inputValue,
}) => {
    let content;

    if (loading) {
        content = <li className="autocomplete-loading">Loading...</li>;
    } else if (error) {
        content = <li className="autocomplete-error">Error: {error}</li>;
    } else if (suggestions.length === 0 && inputValue.trim()) {
        content = <li className="autocomplete-no-results">No results found</li>;
    } else {
        content = suggestions.map((user: any) => (
            <li
                key={user.id}
                className="autocomplete-suggestion"
                data-testid={`suggestion-item-${user.id}`}
            >
                {user.name}
            </li>
        ));
    }

    return <ul className="autocomplete-suggestions">{content}</ul>;
};

export default NamesList;
