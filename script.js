const greetingHeader = document.getElementById('greeting');
        const nameInput = document.getElementById('nameInput');
        const greetButton = document.getElementById('greetButton');
        const container = document.querySelectorAll('.box');

         greetButton.addEventListener('click', () => {
            const name = nameInput.value.trim();
            if(name) {
                greetingHeader.textContent = `Hello, ${name}`;
            } else {
                greetingHeader.textContent = 'Hello';
            }
        });

         container.forEach(box => {
            box.addEventListener('click', () => {
                const color = box.getAttribute('data-color');
                box.style.backgroundColor = color;
            });
        });