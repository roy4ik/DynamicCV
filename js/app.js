console.log('this is app.js');



// // main
// let main = document.getElementsByTagName('main')[0];

// div
let appContainer1 = document.createElement('section');
appSectionContainer.appendChild(appContainer1);
appContainer1.style.backgroundColor = 'var(--third-color)';
appContainer1.style.color="var(--main-bg-color)"
appContainer1.id = 'appContainer1';

appSectionContainer.innerHTML="\
<iframe id='inlineFrameExample'\
    title='Inline Frame Example'\
    width='100%'\
    border='none'\
    min-height='100%'\
    src='test.html'>\
</iframe>\
"
