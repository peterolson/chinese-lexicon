var imgURL = "";
document.onclick = function (e) {
    let target = e.target;
    let background = getComputedStyle(target).backgroundImage;
    if (String(background).startsWith("url")) {
        console.log(background);
        imgURL = background;
        document.execCommand('copy');
    }
}

document.addEventListener('copy', function (e) {
    let char = document.querySelectorAll("input[name=chinese]")[0].value;
    e.preventDefault();
    let svgData = atob(imgURL.split(",")[1].slice(0, -2)).replace(/\n/g, " ").replace(/  /g, " ").slice(0, -1).replace(" <metadata> Created by potrace 1.15, written by Peter Selinger 2001-2017 </metadata> ", "");
    let line = `'${char}': svg(\`${svgData}\`),`;
    console.log(svgData);
    if (e.clipboardData) {
        e.clipboardData.setData('text/plain', line);
    } else if (window.clipboardData) {
        window.clipboardData.setData('Text', line);
    }
});