document.getElementById('generate-bill').addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const studentClass = document.getElementById('class').value;
    const rollNumber = document.getElementById('roll_number').value;
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;

    fetch('/generate_bill', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, class: studentClass, roll_number: rollNumber, amount, description }),
    })
        .then((response) => response.json())
        .then((data) => {
            const messageDiv = document.getElementById('message');
            if (data.error) {
                messageDiv.innerHTML = `<div class="alert alert-danger">${data.error}</div>`;
            } else {
                messageDiv.innerHTML = `<div class="alert alert-success">${data.message}</div>`;
                document.getElementById('billing-form').reset();
            }
        });
});
