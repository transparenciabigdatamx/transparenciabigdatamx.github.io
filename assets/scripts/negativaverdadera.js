const containerDiv12 = document.getElementById("vizContainer12");
const url12 = 'https://public.tableau.com/views/VersionfinalgraficasBD/Dashboard12?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link;
const options12 = {
    hideTabs: true,
}

function initViz9() {
    let viz = new tableau.Viz(containerDiv12, url12, options12)
}

document.addEventListener('DOMContentLoaded', initViz12)