import { ClientProvider } from "./contexts/clientContext";
import { AllRoutes } from "./routes/AllRoutes";

function App() {
  return (
    <div className="App">
      <ClientProvider>
        <AllRoutes />
      </ClientProvider>
    </div>
  );
}

export default App;
