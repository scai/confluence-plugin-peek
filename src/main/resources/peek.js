var peekWindow;
var canPeek = false;

AJS.toInit(function(){
    AJS.$(document).keydown(function(event){
        canPeek = (event.keyCode == 16);
    });

    AJS.$(document).keyup(function(event){
        canPeek = false;
    });

    peekWindow = AJS.$("<iframe />").addClass("peek-window").hide();
    AJS.$("body").append(peekWindow);
    AJS.$("body").click(function(){
        peekWindow.hide();
    });
    peekWindow.hide();
    AJS.$("div.wiki-content a").each(function() {
        var link = AJS.$(this);
        link.mouseenter(function(e) {
            if (!canPeek) return;
            peekWindow.hide();
            peekWindow.css("left", AJS.$(e.target).offset().left + 20);
            peekWindow.css("top", AJS.$(e.target).offset().top + 20);
            peekWindow.attr("src", link.attr("href"));
            peekWindow.slideDown("slow");
            canPeek = false;
        });
    });
});




