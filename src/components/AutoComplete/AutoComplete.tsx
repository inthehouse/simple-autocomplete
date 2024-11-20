import React, { useState, useEffect } from 'react';
import { useFetchUsers } from './hooks/useFetchUsers';
import NamesList from './NamesList';

import './AutoComplete.css';

const AutoComplete: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [query, setQuery] = useState('');
    const { suggestions, loading, error, isTimeout, requestCompleted } = useFetchUsers(query);

    useEffect(() => {
        const handler = setTimeout(() => {
            if (inputValue.trim()) {
                setQuery(inputValue);
            } else {
                setQuery('');
            }
        }, 500);

        return () => {
            clearTimeout(handler);
        };
    }, [inputValue]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    return (
        <div className="autocomplete-container">
            <input
                className="autocomplete-input"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Search for users"
                data-testid="input-box"
            />
            {inputValue && (
                <NamesList
                    requestCompleted={requestCompleted}
                    suggestions={suggestions}
                    loading={loading}
                    error={error}
                    inputValue={inputValue}
                    isTimeout={isTimeout}
                />
            )}
        </div>
    );
};


export default AutoComplete;
