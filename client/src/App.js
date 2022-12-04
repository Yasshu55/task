import React, { useEffect,useState } from "react";
import './App.css';
import axios from 'axios';

const App = () => {
  const [inputFormValue, setInputFormValue] = useState([{ inputBox: ""}]);

  useEffect(() =>{
    const getData = async () => {
      const data = await axios.get('http://localhost:5000/getdata');
      console.log(data);
    }
    getData();
  },[])


  let handleChange = () => {
      let newFormValues = [...inputFormValue];
      setInputFormValue(newFormValues);
    }
  
  let addInputFormField = () => {
      setInputFormValue([...inputFormValue, { inputBox: ""}])
      
  }
  
  let handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:5000/add',inputFormValue)
      .then(res => alert(res.data))
      .catch((err)=>{
        console.log(err);
    });
  }

  return (
    <div className="input-field">
      <form  onSubmit={handleSubmit}>
        {inputFormValue.map((item) => (
          <div>
            <input type="text" key={item.key} text={item.text} onChange={e => handleChange()} />
          </div>
        ))}
        <div>
            <button  type="button" onClick={() => addInputFormField()}>Add</button>
            <button  type="submit">Submit</button>
        </div>
    </form>
    </div>
  )
}

export default App;
