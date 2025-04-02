import React, { useState } from "react";
import { GoogleAuthProvider, signInWithPopup, getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Button, TextField, Card, CardContent, Typography, FormControlLabel, Checkbox, MenuItem } from "@mui/material";

const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

function App() {
    const [businessName, setBusinessName] = useState("");
    const [businessType, setBusinessType] = useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [acceptTerms, setAcceptTerms] = useState(false);
    const [isSignup, setIsSignup] = useState(false);

    const handleGoogleSignIn = async () => {
        try {
            await signInWithPopup(auth, provider);
            alert("Google Sign-in successful!");
        } catch (error) {
            console.error(error);
            alert("Error signing in with Google");
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isSignup && password !== confirmPassword) {
            alert("Passwords do not match");
            return;
        }
        alert(`${isSignup ? "Signup" : "Login"} with email: ${email}`);
    };

    return (
        <div style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            backgroundColor: "#f4f4f4"
        }}>
            <Card style={{width: 400, padding: 20, boxShadow: "0px 4px 10px rgba(0,0,0,0.1)", borderRadius: 10}}>
                <CardContent>
                    <Typography variant="h5" align="center" gutterBottom>
                        {isSignup ? "Sign Up" : "Login"}
                    </Typography>
                    <form onSubmit={handleFormSubmit}>
                        {isSignup && (
                            <>
                                <div style={{ display: "flex", gap: "10px" }}>
                                    <TextField
                                        fullWidth
                                        label="Business Name"
                                        variant="outlined"
                                        value={businessName}
                                        onChange={(e) => setBusinessName(e.target.value)}
                                        margin="normal"
                                        required
                                    />
                                    <TextField
                                        select
                                        fullWidth
                                        label="Business Type"
                                        variant="outlined"
                                        value={businessType}
                                        onChange={(e) => setBusinessType(e.target.value)}
                                        margin="normal"
                                        required
                                    >
                                        <MenuItem value="Retail">Retail</MenuItem>
                                        <MenuItem value="Service">Service</MenuItem>
                                    </TextField>
                                </div>
                                <TextField
                                    fullWidth
                                    type="tel"
                                    label="Phone"
                                    variant="outlined"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    margin="normal"
                                    required
                                />
                            </>
                        )}
                        {isSignup && (
                            <TextField
                                fullWidth
                                type="email"
                                label="Email"
                                variant="outlined"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                margin="normal"
                                required
                            />
                        )}
                        {!isSignup && (
                            <TextField
                                fullWidth
                                label="Username"  // Added Username field here
                                variant="outlined"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                margin="normal"
                                required
                            />
                        )}
                        {!isSignup && (
                        <TextField
                            fullWidth
                            type="password"
                            label="Password"
                            variant="outlined"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            margin="normal"
                            required
                        />
                        )}
                        {isSignup && (
                        <div style={{ display: "flex", gap: "10px" }}>
                            <TextField
                                fullWidth
                                type="password"
                                label="Password"
                                variant="outlined"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                margin="normal"
                                required
                            />
                            <TextField
                                fullWidth
                                type="password"
                                label="Confirm Password"
                                variant="outlined"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                margin="normal"
                                required
                            />
                        </div>
                        )}
                        {isSignup && (
                            <FormControlLabel
                                control={<Checkbox checked={acceptTerms} onChange={(e) => setAcceptTerms(e.target.checked)} />}
                                label="I accept the terms and conditions"
                            />
                        )}
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            style={{
                                marginTop: 10,
                                backgroundColor: isSignup ? "#000000" : undefined,
                                color: isSignup ? "#ffffff" : undefined,
                            }}
                        >
                            {isSignup ? "Sign Up" : "Login"}
                        </Button>
                    </form>
                    {/* Updated Google Sign-In Button */}
                    <Button
                        onClick={handleGoogleSignIn}
                        variant="outlined"
                        fullWidth
                        startIcon={
                            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.64 9.204c0-.638-.057-1.252-.164-1.84H9v3.48h4.844c-.21 1.126-.83 2.078-1.77 2.716v2.258h2.867c1.676-1.542 2.64-3.81 2.64-6.614z"
                                    fill="#4285F4"
                                />
                                <path
                                    d="M9 18c2.43 0 4.467-.79 5.956-2.14l-2.867-2.258c-.81.54-1.846.86-3.09.86-2.37 0-4.38-1.6-5.098-3.756H.96v2.36C2.44 15.73 5.22 18 9 18z"
                                    fill="#34A853"
                                />
                                <path
                                    d="M3.902 10.702c-.18-.54-.28-1.114-.28-1.702s.1-1.162.28-1.702V4.938H.96C.35 6.266 0 7.616 0 9s.35 2.734.96 4.062l2.942-2.36z"
                                    fill="#FBBC05"
                                />
                                <path
                                    d="M9 3.58c1.32 0 2.507.454 3.44 1.346l2.58-2.58C13.467 1.01 11.43 0 9 0 5.22 0 2.44 2.27 1.96 4.938l2.942 2.36C5.62 5.18 7.63 3.58 9 3.58z"
                                    fill="#EA4335"
                                />
                            </svg>
                        }
                        style={{
                            marginTop: 10,
                            borderColor: "#dadce0",
                            color: "#3c4043",
                            textTransform: "none",
                            fontWeight: 500,
                            backgroundColor: "#fff",
                            "&:hover": {
                                backgroundColor: "#f8f9fa",
                                borderColor: "#dadce0",
                            }
                        }}
                    >
                        Sign in with Google
                    </Button>
                    <Typography align="center" style={{marginTop: 10}}>
                        {isSignup ? "Already have an account?" : "Don't have an account?"}
                        <span
                            style={{color: "#1976d2", cursor: "pointer", fontWeight: "bold"}}
                            onClick={() => setIsSignup(!isSignup)}
                        >
                            {isSignup ? " Login" : " Sign Up"}
                        </span>
                    </Typography>
                </CardContent>
            </Card>
        </div>
    );
}

export default App;
