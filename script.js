const paneles = document.querySelectorAll('.panel');

paneles.forEach(panel => {
    panel.addEventListener('click',() => {
        removeClaseActiva();
        panel.classList.add('active');
    })
})

const removeClaseActiva = () => paneles.forEach(panel => panel.classList.remove('active'))


document.querySelector(".foot").innerHTML = `<div> ${new Date().getFullYear()} Urmatawil</div>`;