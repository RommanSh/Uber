window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
          menuItem = document.querySelectorAll('.menu_item'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })

    // Modal 

	let consultationBtn = document.querySelectorAll('[data-modal="consultation"]');
		thanksBtn = document.querySelector('.button_subbmit');
		overlay = document.querySelector('.overlay');
		consultation = document.querySelector('#consultation');
		thanks = document.querySelector('#thanks');
		close = document.querySelectorAll('.modal__close');

	consultationBtn.forEach(item => {
		item.addEventListener('click', () => {
			overlay.style.display = 'block';
			consultation.style.display = 'block';
			document.body.style.overflow = 'hidden';
		});
	});

	thanksBtn.addEventListener('click', () => {
			overlay.style.display = 'block';
			thanks.style.display = 'block';
			consultation.style.display = 'none';
			document.body.style.overflow = 'hidden';
	});

	close.forEach(item => {
		item.addEventListener('click', () => {
			overlay.style.display = 'none';
			consultation.style.display = 'none';
			thanks.style.display = 'none';
			document.body.style.overflow = '';
		});
	});
})