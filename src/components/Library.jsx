import { useState, useEffect } from 'react';

export default function Library() {
    const [books, setBooks] = useState([]);
    const [error, setError] = useState(null); // State to hold error information

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost:4005/api/books');
                
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }

                const json = await response.json();
                setBooks(json);
                setError(null); // Clear any previous error if fetch is successful
            } catch (error) {
                setError(error.message); // Set error state with error message
            }
        };

        fetchData();
    }, []);

    // Render error message if there is an error
    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Library</h1>
            <ul>
                {books.map((book, index) => (
                    <li key={index} style={{ paddingBottom: '25px' }}>
                        <div>{book.name}</div>
                        <div>{book.author}</div>
                        <div>{book.year_published}</div>
                    </li>
                ))}
            </ul>
        </div>
    );
}