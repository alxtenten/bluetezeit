            const ham=document.querySelector('.hamburger');
            const menu = document.querySelector('nav');
            ham.addEventListener('click', ()=> {
                console.log('we be clickin');
                ham.classList.toggle('active');
                menu.classList.toggle('active');
            })