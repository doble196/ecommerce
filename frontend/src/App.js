import { Container } from "react-bootstrap";

import Footer from "./components/Footer.js";
import Header from "./components/Header.js";

function App() {
  return (
    <div>
      <Header />
      <main className="py-3">
        <Container>
          <h1>Welcome to NFTeria</h1>
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
