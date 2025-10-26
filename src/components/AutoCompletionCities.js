import React, { useState, useMemo } from 'react';
const filterSuggestions = (allSuggestions, userInput) => {
    if (!userInput) {
        return [];
    }
    const lowerCaseInput = userInput.toLowerCase();
    return allSuggestions.filter(suggestion =>
        suggestion.toLowerCase().includes(lowerCaseInput)
    );
};

const AutoCompleteCities = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState('');

    const [showSuggestions, setShowSuggestions] = useState(false);

    const filteredSuggestions = useMemo(() => {
        return filterSuggestions(suggestions, inputValue);
    }, [suggestions, inputValue]);

    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        setShowSuggestions(!!value);
    };

    const handleSuggestionClick = (suggestion) => {
        setInputValue(suggestion);
        setShowSuggestions(false);
    };


    const hasSuggestions = filteredSuggestions.length > 0 && showSuggestions;

    return (
        <div className="autocomplete-container">
            <label htmlFor="city-search">Search cities of India:</label>
            <input
                id="city-search"
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Start typing a city..."
                className="autocomplete-input"

                onBlur={() => {
                    setTimeout(() => setShowSuggestions(false), 150);
                }}
                onFocus={() => {
                    if (inputValue) {
                        setShowSuggestions(true);
                    }
                }}
            />

            {hasSuggestions && (
                <ul className="suggestions-list">
                    {filteredSuggestions.map((suggestion, index) => (
                        <li
                            key={index}
                            onClick={() => handleSuggestionClick(suggestion)}
                            className="suggestion-item"

                            // ✨ THE FIX: Prevents the input's onBlur from firing prematurely
                            onMouseDown={(e) => e.preventDefault()}
                        >
                            {suggestion}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default AutoCompleteCities;

