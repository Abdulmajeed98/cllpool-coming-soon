document.addEventListener('DOMContentLoaded', () => {
    const launchText = document.querySelector('.cllpool__header__title');
    const countDownDate = 1646168399000 / 1000;
    const date = new Date(countDownDate * 1000);
    const options = { year: 'numeric', month: 'long', day: 'numeric' }
    console.log(date.toLocaleDateString('en-US', options));
    const arrayChildren = Array.from(launchText.children);
    arrayChildren[arrayChildren.length - 1].innerText += " " + date.toLocaleDateString('en-US', options);
    // console.log(new Date().getTime());
    const flipdown = new FlipDown(countDownDate, {
        theme: 'light',
    });
    flipdown.start();
    flipdown.ifEnded(console.log('countdown finished'));
})