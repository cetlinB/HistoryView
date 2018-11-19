import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

sessionStorage.setItem("history",[])

function getLocalHistory(){
  var history = []
  for(var i in sessionStorage.length){
    history.join(sessionStorage.getItem(i))
  }
  return history;
}

class HistoryView extends React.Component{
  constructor(props){
    super(props)
    let s = props.station;
    this.state = {
      selected: undefined
    };
  }

  setID = e => {
    this.id_index+=1;
    return this.id_index;
  };

  selected = e => {
    var sel = undefined;
    console.log(e.target.value);
    for (var idx in sessionStorage.history) {
      const s = sessionStorage.history[idx];
      if (s.id === parseInt(e.target.value, 10)) sel = s;
    }

    this.setState({
      selected: sel
    });
  };

  render(){
    let items = getLocalHistory(); 
    return(
      <div className="HistoryView">
        <select multiple onChange={this.selected} className="data_view">
          {items.map(s => (
            <option key={s.id} value={s.id}>
              {s.name}
            </option>
          ))}
        </select>
      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <HistoryView/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
