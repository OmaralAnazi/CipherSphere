import React, { useState } from "react";
import CaesarEncryptDecrypt from "./components/CaesarEncryptDecrypt";
import "bootstrap/dist/css/bootstrap.min.css"; 
import "./darkMode.css"; 

const App: React.FC = () => {
    const [cipher, setCipher] = useState<string>("caesar");

    const handleCipherChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setCipher(event.target.value);
    };

    return (
        <div className="container p-3" style={{maxWidth: "720px"}}>
            <h1 className="text-center">CipherSphere</h1>
            <p className="text-center">
                Welcome to the CipherSphere Tool! Select a cipher algorithm below to start encoding or decoding your messages. Note, currenty CipherSphere only support caesar cipher algorithm.
            </p>

            <div className="mb-4 my-4">
                <label htmlFor="cipherSelect" className="form-label">Select Cipher Algorithm</label>
                <select className="form-select" id="cipherSelect" value={cipher} onChange={handleCipherChange}>
                    <option value="caesar">Caesar Cipher</option>
                </select>
            </div>

            {cipher === "caesar" && <CaesarEncryptDecrypt />}
        </div>
    );
}

export default App;
