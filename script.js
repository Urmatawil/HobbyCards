const paneles = document.querySelectorAll('.panel');
console.log(paneles)

paneles.forEach(panel => {
    console.log("click")
    panel.addEventListener('click',() => {
        removeClaseActiva();
        panel.classList.add('active');
    })
})

const removeClaseActiva = () => paneles.forEach(panel => panel.classList.remove('active'))