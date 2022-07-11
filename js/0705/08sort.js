const todos = [
    { id: 4, content: 'JavaScript' },
    { id: 1, content: 'HTML' },
    { id: 2, content: 'CSS' }
];

function compare(key) {
    return (a, b) => (b[key] > a[key] ? 1 : (b[key] < a[key] ? -1 : 0));
}

todos.sort(compare('di'));
console.log(todos);