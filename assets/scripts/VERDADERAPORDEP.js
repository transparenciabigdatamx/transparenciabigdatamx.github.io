const containerDiv11 = document.getElementById("vizContainer11");
const url11 = 'https://public.tableau.com/views/VersionfinalgraficasBD/inexistencia?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options11 = {
    hideTabs: true,
}

function initViz11() {
    let viz = new tableau.Viz(containerDiv11, url11, options11)
}

document.addEventListener('DOMContentLoaded', initViz11)