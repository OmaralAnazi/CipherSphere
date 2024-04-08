import { useState } from "react";
import { encode, decode } from "../utils/caesar"; 

const CaesarEncryptDecrypt: React.FC = () => {
    const [text, setText] = useState<string>("");
    const [shift, setShift] = useState<number>(0);
    const [result, setResult] = useState<string>("");
    const [operation, setOperation] = useState<"encrypt" | "decrypt">("encrypt");

    const handleChangeText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);
    };

    const handleChangeShift = (e: React.ChangeEvent<HTMLInputElement>) => {
        setShift(parseInt(e.target.value, 10) || 0);
    };

    const handleOperationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setOperation(e.target.value as "encrypt" | "decrypt");
    };

    const performCaesarCipher = () => {
        try {
            if (operation === "encrypt") {
                setResult(encode(text, shift));
            } else {
                setResult(decode(text, shift));
            }
        } catch (ex: any) {
            setResult("");
            alert(ex.message);
        }
    };

    return (
        <div className="card p-3">
            <h2 className="text-center">Caesar Cipher</h2>
            <p className="text-center">
                The Caesar cipher is one of the simplest and most widely known encryption techniques.
                It is a type of substitution cipher in which each letter in the plaintext is shifted a certain number of places down the alphabet.
            </p>
            <h3 className="text-center">{operation.charAt(0).toUpperCase() + operation.slice(1)} with Caesar Cipher</h3>
            <div className="mb-3">
                <label htmlFor="inputText" className="form-label">Text</label>
                <input type="text" className="form-control" id="inputText" value={text} onChange={handleChangeText} />
            </div>
            <div className="mb-3">
                <label htmlFor="shiftAmount" className="form-label">Shift Amount</label>
                <input type="number" className="form-control" id="shiftAmount" value={shift} onChange={handleChangeShift} />
            </div>
            <div className="mb-3">
                <label htmlFor="operationSelect" className="form-label">Operation</label>
                <select className="form-select" id="operationSelect" value={operation} onChange={handleOperationChange}>
                    <option value="encrypt">Encrypt</option>
                    <option value="decrypt">Decrypt</option>
                </select>
            </div>
            <button className="btn btn-primary" onClick={performCaesarCipher}>Execute</button>
            <div className="mt-3">
                <label className="form-label">Result</label>
                <textarea className="form-control" value={result} readOnly />
            </div>
        </div>
    );
}

export default CaesarEncryptDecrypt;
