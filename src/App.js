import React, {useState} from 'react';
import useInput from "./hooks/useInput";
import Hover from "./components/Hover";
import LoginForm from "./components/LoginForm";
import List from "./components/List";
import useDebounce from "./hooks/useDebounce";

function App() {
    const [value, setValue] = useState('');
    const debouncedSearch = useDebounce(search, 500)

    function search(query) {
        fetch(`https://jsonplaceholder.typicode.com/todos?query=`+query)
            .then(response => response.json())
            .then(json => {
                console.log(json)
            })
    }
    const onChange = e => {
       setValue(e.target.value);
       search(e.target.value);
    }

  return (
    <div className="App">
        <input type="text" value={value} onChange={onChange} />
        {/*<List />*/}
        {/*<LoginForm />*/}
        {/*<Hover />*/}
    </div>
  );
}

export default App;
