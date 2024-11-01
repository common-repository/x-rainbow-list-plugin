var hex_arr = {
        "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7,
        "8": 8, "9": 9, "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15,
        10: "a", 11: "b", 12: "c", 13: "d", 14: "e", 15: "f"
    };
    
$(function(){
    $(".xrainbow").each(function(){
        var b = $(this).attr("begin").split("");
        var e = $(this).attr("end").split("");
        var text = $(this).html();
        var list = text.split("\n");
        var cnt = list.length;
        if(list[cnt - 1] == "") cnt--;
        
        $(this).html("");
        var begin, end;
        if(b.length == 4) begin = new Array( hex_arr[b[1]] * 16 + hex_arr[b[1]], hex_arr[b[2]] * 16 + hex_arr[b[2]], hex_arr[b[3]] * 16 + hex_arr[b[3]] );
        else begin = new Array( hex_arr[b[1]] * 16 + hex_arr[b[2]], hex_arr[b[3]] * 16 + hex_arr[b[4]], hex_arr[b[5]] * 16 + hex_arr[b[6]] );
        if(e.length == 4) end = new Array( hex_arr[e[1]] * 16 + hex_arr[e[1]], hex_arr[e[2]] * 16 + hex_arr[e[2]], hex_arr[e[3]] * 16 + hex_arr[e[3]] );
        else end = new Array( hex_arr[e[1]] * 16 + hex_arr[e[2]], hex_arr[e[3]] * 16 + hex_arr[e[4]], hex_arr[e[5]] * 16 + hex_arr[e[6]] );

        var r, g, b, color;
        for(var i = 0; i < cnt; i++)
        {
            //if("" == list[i] && i == cnt - 1) break;
            r = (begin[0] + Math.floor((end[0] - begin[0]) * (i / (cnt - 1))));
            g = (begin[1] + Math.floor((end[1] - begin[1]) * (i / (cnt - 1))));
            b = (begin[2] + Math.floor((end[2] - begin[2]) * (i / (cnt - 1))));
            
            color = "#" + hex_arr[Math.floor(r / 16)] + hex_arr[r % 16] + hex_arr[Math.floor(g / 16)] + hex_arr[g % 16] + hex_arr[Math.floor(b / 16)] + hex_arr[b % 16];
            list[i] = "<div class='xrainbow_div' style='margin: 0 0 0 0; color: " + color + "'>" + list[i] + "</div>\n";
            $(this).append(list[i]);
        }
        
        $(this).wrap("<div class='xranbow'></div>");
        $(this).after($(this).html());
        $(this).css("display", "none");
    });
});