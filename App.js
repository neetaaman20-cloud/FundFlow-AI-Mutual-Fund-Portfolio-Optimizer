import React, { useState } from 'react';

function App() {
  // State to store the risk level (1-10) and the API result
  const [risk, setRisk] = useState(5);
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  // Function to call your FastAPI backend
  const getAdvice = async () => {
    setLoading(true);
    try {
      // Fetches data from your Python server running on port 8000
      const response = await fetch(`http://localhost:8000/calculate?risk=${risk}`);
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error("Error connecting to backend:", error);
      alert("Make sure your Python backend is running on port 8000!");
    }
    setLoading(false);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>FundFlow AI 📈</h1>
      <p style={styles.subtitle}>Mutual Fund Portfolio Optimizer</p>
      
      <div style={styles.card}>
        <h3>Step 1: Select Your Risk Tolerance</h3>
        <p>Current Level: <strong>{risk}</strong></p>
        <input 
          type="range" 
          min="1" 
          max="10" 
          value={risk} 
          onChange={(e) => setRisk(e.target.value)} 
          style={styles.slider}
        />
        
        <button onClick={getAdvice} style={styles.button}>
          {loading ? "Analyzing..." : "Generate Strategy"}
        </button>
      </div>

      {result && (
        <div style={styles.resultCard}>
          <h2 style={styles.strategyTitle}>Strategy: {result.Strategy}</h2>
          <hr />
          <div style={styles.allocationRow}>
            <div style={styles.allocationItem}>
              <strong>Equity</strong>
              <p style={{ fontSize: '24px', color: '#2ecc71' }}>{result.Equity}</p>
            </div>
            <div style={styles.allocationItem}>
              <strong>Debt</strong>
              <p style={{ fontSize: '24px', color: '#e74c3c' }}>{result.Debt}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// Basic professional styling
const styles = {
  container: { padding: '50px', fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif', textAlign: 'center', backgroundColor: '#f4f7f6', minHeight: '100vh' },
  header: { color: '#2c3e50', marginBottom: '10px' },
  subtitle: { color: '#7f8c8d', marginBottom: '30px' },
  card: { backgroundColor: 'white', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '0 auto' },
  slider: { width: '100%', cursor: 'pointer', margin: '20px 0' },
  button: { backgroundColor: '#3498db', color: 'white', border: 'none', padding: '12px 24px', borderRadius: '6px', fontSize: '16px', cursor: 'pointer', width: '100%' },
  resultCard: { marginTop: '30px', backgroundColor: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 10px 20px rgba(0,0,0,0.1)', maxWidth: '500px', margin: '30px auto' },
  strategyTitle: { color: '#2c3e50', fontSize: '22px' },
  allocationRow: { display: 'flex', justifyContent: 'space-around', marginTop: '20px' },
  allocationItem: { textAlign: 'center' }
};

export default App;