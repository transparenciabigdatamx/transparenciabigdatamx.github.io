const containerDiv10 = document.getElementById("vizContainer10");
const url10 = 'https://public.tableau.com/views/VersionfinalgraficasBD/inexistencia?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options10 = {
    hideTabs: true,
}

function initViz10() {
    let viz = new tableau.Viz(containerDiv10, url10, options10)
}

document.addEventListener('DOMContentLoaded', initViz10)