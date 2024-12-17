import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((newnotes) => {
        return (
          <Note
            key={newnotes.id}
            content={newnotes.content}
            title={newnotes.title}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
