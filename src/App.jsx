// react and other libraries
import TypeIt from "typeit-react";

/**
 * Container component which holds the body of the landing page.
 *
 * @returns {React.JSX.Element} A page containing page contents.
 */
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
