import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import "./index.css";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ color: "white", background: "#050816", padding: "40px", fontFamily: "monospace", minHeight: "100vh" }}>
          <h2>Something went wrong.</h2>
          <pre style={{ color: "#ff6b6b", whiteSpace: "pre-wrap" }}>{this.state.error?.toString()}</pre>
          <pre style={{ color: "#aaa", whiteSpace: "pre-wrap", fontSize: "12px" }}>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
