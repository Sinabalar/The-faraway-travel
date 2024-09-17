import React from "react";

export default function ConfirmDialog({ message, onConfrim, onCansel }) {
    return (
        <div className="overlay">
            <div className="confirm-dialog">
                <div className="confirm-dialog-content">
                    <p>{message}</p>
                    <button onClick={onConfrim}>Yes</button>
                    <button onClick={onCansel}>Cansel</button>

                </div>
            </div>
        </div>
    )
};