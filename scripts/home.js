
        const shadow = document.getElementById('shadow');

        document.addEventListener('mousemove', (e) => {
            const x = e.clientX;
            const y = e.clientY;

            shadow.style.left = `${x}px`;
            shadow.style.top = `${y}px`;
        });