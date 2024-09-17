import { useState } from "react";

const SignIn = () => {
    const [admin, setAdmin] = useState("");  // For storing the admin (phone or username)
    const [password, setPassword] = useState("");  // For storing the password
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const login = async () => {
        setLoading(true);
        setError(null);
        setSuccess(null);

        const payload = {
            phone: "+992987654321",  // Use admin (phone or username) from input
            password: "1234"  // Use password from input
        };

        const requestOptions = {
            method: "POST",
            credentials: 'include',
            headers: myHeaders,
            body: JSON.stringify(payload),
            redirect: "follow"
        };

        try {
            const response = await fetch("http://127.0.0.1:2442/login", requestOptions);

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`HTTP error! Status: ${response.status}, Details: ${errorText}`);
            }

            // Check if the response has content before parsing as JSON
            const resultText = await response.text();  // Get response text
            const result = resultText ? JSON.parse(resultText) : {};  // Parse JSON if non-empty

            setSuccess(result);  // Update the success state with the parsed JSON
        } catch (error) {
            setError(error.message);  // Update the error state
        } finally {
            setLoading(false);  // Stop the loading state
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <input 
                type="text" 
                placeholder="Enter admin (phone or username)" 
                value={admin}
                onChange={(e) => setAdmin(e.target.value)}  // Update admin state on input change
            />
            <br />
            <input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}  // Update password state on input change
            />
            <br />
            <button onClick={login} disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
            </button>
            {error && <p style={{ color: 'red' }}>Error: {error}</p>}
            {success && <p>Success: {JSON.stringify(success)}</p>}
        </div>
    );
};

export default SignIn;
