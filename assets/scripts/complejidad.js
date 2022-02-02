const containerDiv4 = document.getElementById("vizContainer4");
const url4 = 'https://public.tableau.com/views/RESUMENgraficas2/Dashndicedecomplejidadvf2?:language=es-ES&publish=yes&:display_count=n&:origin=viz_share_link';
const options4 = {
    hideTabs: true,
}

function initViz4() {
    let viz = new tableau.Viz(containerDiv4, url4, options4)
}

document.addEventListener('DOMContentLoaded', initViz4)