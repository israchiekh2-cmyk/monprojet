import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ChatPatient() {
  const navigate = useNavigate();

  const [messages, setMessages] = useState([
    { from: "patient", text: "Bonjour docteur !" },
    { from: "medecin", text: "Bonjour, comment puis-je vous aider ?" },
  ]);
  const [input, setInput] = useState("");
  const [sender, setSender] = useState("medecin");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = () => {
    const trimmed = input.trim();
    if (trimmed === "") return;

    setMessages([...messages, { from: sender, text: trimmed }]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };

  return (
    <>
      <div style={styles.container}>
        <h2 style={styles.title}>💬 Chat avec patient</h2>

        <div style={styles.chatBox}>
          {messages.map((msg, index) => (
            <div
              key={index}
              style={{
                ...styles.message,
                alignSelf: msg.from === "medecin" ? "flex-end" : "flex-start",
                backgroundColor:
                  msg.from === "medecin" ? "#f9d5e5" : "#fce4ec",
              }}
            >
              {msg.text}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        <div style={styles.inputArea}>
          <input
            type="text"
            placeholder="Écrire un message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            style={styles.input}
          />
          <button
            onClick={sendMessage}
            style={{
              ...styles.sendBtn,
              opacity: input.trim() === "" ? 0.5 : 1,
              cursor: input.trim() === "" ? "not-allowed" : "pointer",
            }}
            disabled={input.trim() === ""}
          >
            Envoyer
          </button>
        </div>
      </div>

      {/* Bouton Retour en dessous */}
      <div style={styles.buttonContainer}>
        <button
          onClick={() => navigate(-1)}
          style={styles.backButton}
          aria-label="Retour"
        >
            Retour
        </button>
      </div>
    </>
  );
}

const styles = {
  container: {
    maxWidth: "600px",
    margin: "40px auto 20px",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff1f6",
    display: "flex",
    flexDirection: "column",
    height: "80vh",
  },
  title: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#c2185b",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
    border: "1px solid #f8bbd0",
    borderRadius: "8px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    backgroundColor: "#fce4ec",
  },
  message: {
    maxWidth: "70%",
    padding: "10px",
    borderRadius: "12px",
    fontSize: "14px",
    boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
  },
  inputArea: {
    marginTop: "15px",
    display: "flex",
    gap: "10px",
  },
  input: {
    flex: 1,
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #f8bbd0",
  },
  sendBtn: {
    padding: "10px 20px",
    backgroundColor: "#c2185b",
    color: "white",
    border: "none",
    borderRadius: "8px",
  },
  buttonContainer: {
    maxWidth: "600px",
    margin: "0 auto 40px",
    textAlign: "center",
  },
  backButton: {
    backgroundColor: "#ef4444",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 30px",
    fontWeight: "bold",
    fontSize: "14px",
    cursor: "pointer",
  },
};

export default ChatPatient;



