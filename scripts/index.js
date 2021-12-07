document.addEventListener('DOMContentLoaded', () => {
    const countDownDate = 1643706000000 / 1000;
    // console.log(new Date().getTime());
    const flipdown = new FlipDown(countDownDate, {
        theme: 'light',
    });
    flipdown.start();
    flipdown.ifEnded(console.log('countdown finished'));


    // // toggle flipdown theme
    // const toggleTheme = setInterval(() => {
    //     document.querySelector('#flipdown').classList.toggle('flipdown__theme-dark');
    //     document.querySelector('#flipdown').classList.toggle('flipdown__theme-light');
    // }, 1000);
})