function display(){chrome.tabs.query({"highlighted": true},function(tabs){
    document.getElementById('title').textContent = tabs[0].title;
})};

document.getElementById('btn').addEventListener('click',display)
