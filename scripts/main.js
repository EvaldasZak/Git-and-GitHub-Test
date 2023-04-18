openTab = (tabID) => {
    document.getElementById('popup').style.display = 'block'
    document.getElementById('tab-' + tabID).style.display = 'block'
}

closeTab = () => {
    document.getElementById('popup').style.display = 'none'
    var tabs = document.querySelectorAll('.tab')

    for (var i = 0; i < tabs.length; i++) {
        tabs[i].style.display = 'none'
    }
}