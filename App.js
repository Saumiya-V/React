// const heading=React.createElement('h1',{/*Atributes of tag*/},'Hello World from React');

const parent=React.createElement("div",{id:"parent"},[React.createElement("div",{id:"child"},[React.createElement("h1",{},'I am a proud Indian'),React.createElement("h2",{},`India is known for it's rich and varied heritage`)]),React.createElement("div",{id:"child2"},[React.createElement("h3",{},'I am a proud Indian'),React.createElement("h4",{},`India is known for it's rich and varied heritage`)])])

const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(parent);