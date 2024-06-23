const user = {
    name: "John",
    age: 30,
    email: "john@example.com"
  };
  const id = document.getElementById('left-content');
  const button = document.createElement('button');
  button.textContent = "Teeeeeeeeeeeeeeeeeest";
  id.appendChild(button);
  
  button.onclick = async function() {
    const response = await fetch('http://localhost:3000/save-user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });
  
    if (response.ok) {
      alert('Button was clicked and user data saved!');
    } else {
      alert('Failed to save user data.');
    }
  };