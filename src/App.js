import ColorBox from "./components/ColorBox";
import SelectColors from "./components/SelectColors";
import ColorContext, { ColorProvider } from "./contexts/color";

function App() {
  // return (
  //   <ColorContext.Provider value={{ color: "red" }}>
  //     <div>
  //       <ColorBox />
  //     </div>
  //   </ColorContext.Provider>
  // );
  return (
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
}

export default App;
