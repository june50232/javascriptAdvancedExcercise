document.addEventListener("DOMContentLoaded", function() {
    var data = [00, 01, 02, 03, 04, 05, 06, 07, 08, 09, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39],
        hash = location.hash.substr(1),
        option = document.createElement("option"),
        script = document.createElement("script"),
        select = document.createElement("select"),
        i, imax, jmax, o, options;
    select.appendChild(option);
    for (i = 0, imax = data.length; i < imax; i++) {
        jmax = data[i];
        if (typeof data[i] !== "number") {
            jmax = data[i].length;
        }
        option = document.createElement("option");
            o = {
                main: i + 1
            };
            o.value = o.main;
            option.text = o.value + ".js";
            select.appendChild(option);
    }
    document.body.appendChild(select);
    options = select.options;
    if (hash) {
        script.src = hash;
        document.getElementsByTagName("head")[0].appendChild(script);
        for (i = 0, imax = options.length; i < imax; i++) {
            if (options[i].text === hash) {
                options[i].selected = true;
            }
        }
    }
    select.addEventListener("change", function() {
        location.href = location.href.split("#")[0] + "#" + this.value;
        location.reload();
    });
});