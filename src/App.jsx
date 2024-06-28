import TypeIt from "typeit-react";

function App() {
  return (
    <div className="flex h-screen items-center justify-center bg-slate-700">
      <TypeIt
        className="font-mono text-4xl text-white sm:text-6xl"
        options={{
          strings: ["Hello, World!"],
          startDelay: 250,
          waitUntilVisible: true,
          lifeLike: true,
        }}
      />
    </div>
  );
}

export default App;
