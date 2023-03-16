import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import "./css/customButton.css";

import { useGoogleLogin } from "@react-oauth/google";

function App() {
    const customLogin = useGoogleLogin({
        flow: "auth-code",
        onSuccess: async ({ code }) => {
            console.log(code);
            const tokens = await axios.post(
                "http://localhost:4000/auth/google",
                { code }
            );

            console.log(tokens);
        },
        onError: (res) => console.error(res),
    });

    return (
        <div className="App">
            <button className="google_btn" onClick={() => customLogin()}>
                customButton
            </button>
        </div>
    );
}

export default App;
