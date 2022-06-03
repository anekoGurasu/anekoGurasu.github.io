

function hoverArrowUp(element) {
    
    element.setAttribute('src', 'img/up-blue.png');  
    
}

function unhoverArrowUp(element) {
    element.setAttribute('src', 'img/50-508007_arrow-of-double-angle-pointing-up-vector-double.png');
    
}

function showToolTipFlag() {
    let tooltip = document.getElementById('tooltip-flag');
    tooltip.classList.add("tooltip-flag-show");
}
function hidToolTipFlag() {
    let tooltip = document.getElementById('tooltip-flag');
    tooltip.classList.remove('tooltip-flag-show');
}

function showToolTipHeader() {
    let tooltip = document.getElementById('tooltip-header');
    tooltip.classList.add("tooltip-header-show");
}
function hidToolTipHeader() {
    let tooltip = document.getElementById('tooltip-header');
    tooltip.classList.remove('tooltip-header-show');
}

