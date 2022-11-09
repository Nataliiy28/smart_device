let buttonClarify = document.getElementsByClassName('about-company__button');
for (var i=0; i < buttonClarify.length; ++i) {
    buttonClarify[i].onclick = function () {
        var child = this.childNodes;
        for (var cI in child) {
            console.log(child[cI])
            if (child[cI].className == 'content') {
                var d = child[cI].style.display;
                child[cI].style.display = d === 'block' ? 'none' : 'block';
            }
        }
    }
}