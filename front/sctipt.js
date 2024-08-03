const btn = document.getElementById('getTodo');

const getTodo = async () => {
    const res = await fetch('http://localhost:3000/api/persons');
    const data = await res.json();
 
    if (Array.isArray(data)) {
        data.forEach(person => { 
            person.todos.forEach(todo => {
                console.log(todo);
            });
        });
    } else {
        console.error('Unexpected data format');
    }
};

btn.addEventListener('click', () => {
    getTodo();
});
