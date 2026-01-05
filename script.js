const list = document.getElementById('list');

function render(){
  list.innerHTML = '';
  for(let i = 0; i < localStorage.length; i++){
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    const li = document.createElement('li');
    li.innerHTML = `
      ${key}: ${value}
      <button onclick="removeItem('${key}')">x</button>
    `;
    list.appendChild(li);
  }
}

function save(){
  const key = document.getElementById('key').value;
  const value = document.getElementById('value').value;
  if(!key || !value) return;

  localStorage.setItem(key, value);
  document.getElementById('key').value = '';
  document.getElementById('value').value = '';
  render();
}

function removeItem(key){
  localStorage.removeItem(key);
  render();
}

render();
