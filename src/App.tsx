import Register from "./pages/Register";

function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url(https://harkatnegeri.ac.id/storage/images/tag_line_bg1759294923.jpg)",
      }}
    >
      <div className="bg-white-80 rounded-xl">
        <Register />
      </div>
    </div>
  );
}

export default App;