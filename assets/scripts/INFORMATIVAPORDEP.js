const containerDiv9 = document.getElementById("vizContainer9");
const url9 = 'https://public.tableau.com/views/VersionfinalgraficasBD/INFORMATIVEDASHTOTAL?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options9 = {
    hideTabs: true,
}

function initViz9() {
    let viz = new tableau.Viz(containerDiv9, url9, options9)
}

document.addEventListener('DOMContentLoaded', initViz9)