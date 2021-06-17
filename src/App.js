import React, { useState } from "react";
import data from './assets/data/data';
import { Button, Container, Jumbotron, Guion } from './styled';

function App() {
const [currentText, setText] = useState(0)


  //Funcion boton siguiente
  const nextButton = () => {
    if (currentText !== data.length - 1) {
        setText(currentText + 1);
    }
  }
  //Funcion boton anterior
  const backButton = () => {
    if (currentText !== 0) {
        setText(currentText - 1);
    }
  }
    return ( 
      <main>
        <Container>
          <Jumbotron>
            <h1 className="display-4">Romeo y Julieta</h1>
            <h1 className="display-5">¡Comencemos a conocer su historia!</h1>
            <p className="lead">Para recorrer el guión pulsa los botones</p>
            <Guion>{data[currentText]} </Guion>
            <Button type="button" class="btn" onClick={backButton}>Anterior</Button>
            <Button type="button" class="btn"onClick={nextButton}>Siguiente</Button>
          </Jumbotron>

        </Container>
      </main>
    
    );

}
export default App;

