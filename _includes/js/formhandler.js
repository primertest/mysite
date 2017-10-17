$.fn.serializeObject = function() {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    o['url'] = location.protocol + '//' + location.host + location.pathname;
    //o['visitor'] = getCookie("_ga")
    return o;
};
$('form').submit(function() {
    var thedata = JSON.stringify($(this).serializeObject())
    var script = document.createElement('script');
    script.src = '{{ site.data.theme.formhandler }}' + thedata;
    document.body.appendChild(script);
    var enqname = $(this).find('input[name="name"]').val();
    var thankmsg = '<p>Thanks ' + enqname + '. {{ site.data.photoform.thanksmsg}}</p>';
    // Get the height of the form area we are about to ovewrite
    var msgholderheight = $(this).outerHeight();
    $(this).html(thankmsg);
    // set the height of the form area
    $(this).css("height",msgholderheight+"px")
    return false;
});

function processed(response){
     console.log(response);
}