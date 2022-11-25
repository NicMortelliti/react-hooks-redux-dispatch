let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}

function dispatch(action) {
  state = changeState(state, action);
  return state;
}

// Render to html
function render() {
  const app = document.querySelector("#app");
  app.textContent = state.count;
}

// Increment state twice
dispatch({ type: "counter/increment" });
dispatch({ type: "counter/increment" });

// Call render function
render();
