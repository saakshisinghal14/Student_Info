
import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [operationCode, setOperationCode] = useState(null);

  // State to store user input data
  const [inputData, setInputData] = useState('');


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8080/bfhl', { data: inputData.split(',') })
      .then((response) => {
        setOperationCode(response.data.operation_code);
      })
      .catch((error) => {
        console.error('Error fetching operation code:', error);
      });
  };


  useEffect(() => {
  
    axios
      .get('http://localhost:8080/bfhl')
      .then((response) => {
        setOperationCode(response.data.operation_code);
      })
      .catch((error) => {
        console.error('Error fetching operation code:', error);
      });
  }, []);

  return (
    <div className="App">

<div className="card">
  <div className="card-body">
  


      <h2>Operation Code: {operationCode}</h2>
 
 


      <form onSubmit={handleSubmit}>
        <label>
          Input Data (comma-separated):
          <input
            type="text"
            value={inputData}
            onChange={(e) => setInputData(e.target.value)}
          />
        </label>
    <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
</div>
  );
}

export default App;
