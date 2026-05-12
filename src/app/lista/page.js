'use client'

import { useState } from "react";

export default function Lista() {
    const [inputTexto, setInputTexto] = useState("");
    const [lista, setLista] = useState([]);

    const handleAddTask = () => {
        const val = inputTexto.trim();
        if (!val) return;
        setLista(prev => [...prev, val]);
        setInputTexto("");
    };

    const removeTask = (idx) => {
        setLista(prev => prev.filter((_, i) => i !== idx));
    };

    return (
        <main style={{ padding: "2rem", maxWidth: 680, margin: "0 auto" }}>
            <h2 style={{ color: "lightcyan" }}>Lista de tarefas</h2>

            <div style={{ display: "flex", gap: 8, marginBottom: "1.5rem", marginTop: "1.5rem" }}>
                <input
                    value={inputTexto}
                    onChange={(e) => setInputTexto(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && handleAddTask()}
                    placeholder="Escreve a tarefa..."
                    style={{
                        flex: 1,
                        height: 40,
                        padding: "0 14px",
                        fontSize: 14,
                        borderRadius: 8,
                        border: "1px solid #444",
                        background: "#1a1a2e",
                        color: "lightcyan",
                        outline: "none",
                    }}
                />
                <button
                    onClick={handleAddTask}
                    style={{
                        height: 40,
                        padding: "0 18px",
                        fontSize: 14,
                        fontWeight: 500,
                        borderRadius: 8,
                        border: "1px solid #444",
                        background: "#1a1a2e",
                        color: "lightcyan",
                        cursor: "pointer",
                        whiteSpace: "nowrap",
                    }}
                >
                    + Adicionar
                </button>
            </div>

            {lista.length > 0 && (
                <table style={{ width: "100%", borderCollapse: "collapse", border: "1px solid #444", borderRadius: 12, overflow: "hidden" }}>
                    <thead>
                    <tr style={{ background: "#12122a" }}>
                        <th style={{ width: 48, padding: "10px 16px", fontSize: 12, textAlign: "center", color: "#7ecfd4", fontWeight: 500 }}>#</th>
                        <th style={{ padding: "10px 16px", fontSize: 12, textAlign: "left", color: "#7ecfd4", fontWeight: 500 }}>TAREFA</th>
                        <th style={{ width: 44 }}></th>
                    </tr>
                    </thead>
                    <tbody>
                    {lista.map((t, i) => (
                        <tr key={i} style={{ borderTop: "1px solid #2a2a4a", background: i % 2 === 0 ? "#1a1a2e" : "#16162a" }}>
                            <td style={{ textAlign: "center", fontSize: 12, color: "#7ecfd4", padding: "12px 16px" }}>{i + 1}</td>
                            <td style={{ padding: "12px 16px", color: "lightcyan" }}>{t}</td>
                            <td style={{ padding: "12px 8px", textAlign: "center" }}>
                                <button
                                    onClick={() => removeTask(i)}
                                    style={{ background: "none", border: "none", cursor: "pointer", fontSize: 16, opacity: 0.6 }}
                                >
                                    🗑
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </main>
    );
}