const canvas = document.getElementById("matrix");
        const ctx = canvas.getContext("2d");

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const fontSize = 18;
        const columns = Math.floor(canvas.width / fontSize);
        const drops = Array.from({ length: columns }, () => Math.floor(Math.random() * canvas.height / fontSize));

        function drawMatrixEffect() {
            ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = "#FFF";
            ctx.font = fontSize + "px Courier New";

            for (let i = 0; i < drops.length; i++) {
                const text = characters.charAt(Math.floor(Math.random() * characters.length));
                ctx.fillText(text, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        }

        let interval = setInterval(drawMatrixEffect, 50);

        setTimeout(() => {
            document.getElementById("loader").classList.add("fade-out");
            setTimeout(() => {
                document.querySelector(".content").style.display = "block";
            }, 1500);
        }, 3000);

        window.addEventListener("beforeunload", (event) => {
            event.preventDefault();
            event.returnValue = "";
            document.getElementById("loader").classList.remove("fade-out");
            setTimeout(() => {
                document.getElementById("loader").classList.add("fade-out");
            }, 3000);
        });