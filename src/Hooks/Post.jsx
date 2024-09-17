import { useState } from "react";

const Post = (url) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const postData = async (data) => {
        setLoading(true);
        setError(null);

        // Define request options inside the postData function, and include the data dynamically.
        const requestOptions = {
            method: "POST",
            credentials: 'include',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
            redirect: "follow",
        };

        try {
            const res = await fetch(url, requestOptions); // Use requestOptions here
            if (!res.ok) {
                throw new Error(`HTTP error! Status: ${res.status}`);
            }

            const result = await res.json();
            setResponse(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return { postData, response, loading, error };
}

export default Post;
