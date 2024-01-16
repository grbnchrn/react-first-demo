import { useState } from "react";

export default function AlertWindow() {
  const [closeAlert, setCloseAlert] = useState();
  function handleUserAction(show) {
    setCloseAlert(show);
  }
  if (closeAlert) {
    alert = <div></div>;
  }

  let alert = (
    <div data-testid="alert" id="alert">
      <h2>Are you sure?</h2>
      <p>These changes can't be reverted!</p>
      <button onClick={() => handleUserAction(true)}>Proceed</button>
    </div>
  );
  return { alert };

  //need for same page modification
  /*   let alert = (<div></div>)
  if (showAlert){
      alert = (<div data-testid="alert" id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={()=>handleUserAction(false)}>Proceed</button>
        </div>)
  }
    return (
      <div>
        {alert}
        <button onClick={()=>handleUserAction(true)}>Delete</button>
      </div>    
    ); */
}
