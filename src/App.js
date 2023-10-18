const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
      // Hacer la solicitud a tu servidor
      fetch("/api/data")
          .then((response) => response.json())
          .then((result) => {
              setData(result);
          })
          .catch((error) => {
              console.error("Error fetching data:", error);
          });
  }, []);

  return (
      <div>
          <h1>Aplicación React con Base de Datos</h1>
          {data && <p>{data.message}</p>}
      </div>
  );
}

export default App;
