import { useRef, useState} from 'react';

function NameInput() {
    const [state, setState] = useState("Find your nightmare");
    const userInput = useRef();
    //like another method call. 
    return (
       <div className="name-input"> 
           <form onSubmit={ (e)=>e.preventDefault()}>
               <input placeholder="RUN" ref={ userInput } type="text"></input>
               <button onClick={ ()=>setState(userInput.current.value)}>RUN</button>
           </form>
           <div className="display">{ state }</div>
       </div> 
    );
}

export default NameInput;

