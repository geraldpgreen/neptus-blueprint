
var paper = Raphael("circular-progress", 200, 200);
paper.path("M0 0L200 0");
paper.path("M200 0L200 200");
paper.path("M0 200L200 200");
paper.path("M0 0L0 200");

var paper2 = Raphael("foo", 200, 200);
paper2.path("M0 0L200 0");
paper2.path("M200 0L200 200");
paper2.path("M0 200L200 200");
paper2.path("M0 0L0 200");

var paper3 = Raphael("bar", 200, 200);
paper3.path("M0 0L200 0");
paper3.path("M200 0L200 200");
paper3.path("M0 200L200 200");
paper3.path("M0 0L0 200");

var CircularPath = function(R, x, y, w, paper, bgColor){
    this.radius = R;
    this.centerX = x;
    this.centerY = y;
    this.pathWidth = w;
    this.paper = paper;
    this.bgColor = bgColor;

    this.setup = function() {
        var r = this.radius,
            x = this.centerX,
            y = this.centerY;
        this.bgPath = this.paper.circle(x, y, r).attr({'stroke-width': this.pathWidth, 'stroke': this.bgColor});
    },

    this.setColor = function(percent, color) {
        var r = this.radius,
            x = this.centerX,
            y = this.centerY;
        if (percent == 1) {         
            this.path = this.paper.circle(x, y, r).attr({'stroke-width': this.pathWidth, 'stroke': color});
        } else {
            var startX = this.centerX,
                startY = this.centerY - this.radius,
                endX = this.centerX + this.radius * Math.cos((-percent*2+0.5)*Math.PI),    
                endY = this.centerY - this.radius * Math.sin((-percent*2+0.5)*Math.PI),
                alpha = (percent<=0.5)?0:1;
            this.paper.circle(x, y, r).attr({'stroke-width': this.pathWidth, 'stroke': '#ffffff'});
            this.paper.circle(x, y, r).attr({'stroke-width': this.pathWidth, 'stroke': this.bgColor});
            this.path = this.paper.path(Raphael.format("M{0} {1}A{2} {2} 0 {3} 1 {4} {5}",startX,startY,r,alpha,endX,endY));
            this.path.attr({'stroke': color, 'stroke-width': this.pathWidth});
        }
    }
}


var grey = '#D1D0CE',
    blue = '#98AFC7',
    green = '#437C17';


var lowerDivision = new CircularPath(40, 100, 100, 13, paper, grey);
lowerDivision.setup();
//lowerDivision.setColor(1,'#89C35C');
var upperDesign = new CircularPath(55, 100, 100, 13, paper, grey);
upperDesign.setup();
//upperDesign.setColor(0.8,'#6CBB3C');
var fiveUpper = new CircularPath(70, 100, 100, 13, paper, grey);
fiveUpper.setup();
//fiveUpper.setColor(0.5, '#6AA121');
var totalUpper = new CircularPath(85, 100, 100, 13, paper, grey);
totalUpper.setup();
//totalUpper.setColor(0.3, '#348017'); 



lowerDivision.update = function() {
    var progress = 0,
        reqs = ['#requirements_cs_sixtyonea',
                '#requirements_cs_sixtyoneb',
                '#requirements_cs_sixtyonec',
                '#requirements_math_onea',
                '#requirements_math_oneb',
                '#requirements_math_fiftyfour',
                '#requirements_cs_seventy',
                '#requirements_ee_twenty',
                '#requirements_ee_fourty',
                '#requirements_ee_fourtytwo'];
    for (var i = 0; i < reqs.length; i++ ) {
        if ($(reqs[i]+'.tasks-list-cb').prop('checked')) {
            progress++;
            if (reqs[i] == '#requirements_ee_twenty' || reqs[i] == '#requirements_ee_fourty' ||
                reqs[i] == '#requirements_ee_fourtytwo') break;
        }
    }
    this.setColor(progress/8.0, '#FFD801');
}

lowerDivision.update();

upperDesign.update = function() {
    var progress = 0,
        reqs = ['#requirements_cs_conefourtynine',
                '#requirements_cs_onefifty',
                '#requirements_cs_onefiftytwo',
                '#requirements_cs_onesixty',
                '#requirements_cs_onesixtytwo',
                '#requirements_cs_onesixtyfour',
                '#requirements_cs_onesixtynine',
                '#requirements_cs_oneeightyfour',
                '#requirements_cs_oneeightysix'];
    for (var i = 0; i < reqs.length; i++) {
        if ($(reqs[i]+'.tasks-list-cb').prop('checked')) {
            progress = 1;
            console.log("nonono!");
            break;
        }
    }
    this.setColor(progress, '#9DC209');
}
upperDesign.update();

fiveUpper.update = function() {
    var progress = 0,
        reqs = ['#requirements_cs_conefourtynine',
                '#requirements_cs_onefifty',
                '#requirements_cs_onefiftytwo',
                '#requirements_cs_onesixty',
                '#requirements_cs_onesixtyone',
                '#requirements_cs_onesixtytwo',
                '#requirements_cs_onesixtyfour',
                '#requirements_cs_oneseventy',
                '#requirements_cs_onesixtynine',
                '#requirements_cs_oneeightyfour',
                '#requirements_cs_oneeightysix',
                '#requirements_cs_oneeightyeight'];
    for (var i = 0; i < reqs.length; i++) {
        if ($(reqs[i]+'.tasks-list-cb').prop('checked')) {
            progress ++;
            if (progress == 5) break;
        }
    }
    this.setColor(progress/5.0, '#728FCE');
}

fiveUpper.update();

totalUpper.update = function() {
    var progress = 0;
        reqs = ['#requirements_cs_conefourtynine',
                '#requirements_cs_onefifty',
                '#requirements_cs_onefiftytwo',
                '#requirements_cs_onesixty',
                '#requirements_cs_onesixtyone',
                '#requirements_cs_onesixtytwo',
                '#requirements_cs_onesixtyfour',
                '#requirements_cs_oneseventy',
                '#requirements_cs_onesixtynine',
                '#requirements_cs_oneeightyfour',
                '#requirements_cs_oneeightysix',
                '#requirements_cs_oneeightyeight'];
    for (var i = 0; i < reqs.length; i++) {
        if ($(reqs[i]+'.tasks-list-cb').prop('checked')) {
            progress ++;
            if (progress == 7) break;
        }
    }
    this.setColor(progress/7.0, '#2B547E');
}
totalUpper.update();



var lowerDivision = new CircularPath(40, 100, 100, 13, paper2, grey);
lowerDivision.setup();
lowerDivision.setColor(1,green);
var upperDesign = new CircularPath(55, 100, 100, 13, paper2, grey);
upperDesign.setup();
upperDesign.setColor(0.8,blue);
var fiveUpper = new CircularPath(70, 100, 100, 13, paper2, grey);
fiveUpper.setup();
fiveUpper.setColor(0.5, green);
var totalUpper = new CircularPath(85, 100, 100, 13, paper2, grey);
totalUpper.setup();
totalUpper.setColor(0.3, blue); 

var lowerDivision = new CircularPath(40, 100, 100, 13, paper3, grey);
lowerDivision.setup();
lowerDivision.setColor(1,green);
var upperDesign = new CircularPath(55, 100, 100, 13, paper3, grey);
upperDesign.setup();
upperDesign.setColor(0.8,blue);
var fiveUpper = new CircularPath(70, 100, 100, 13, paper3, grey);
fiveUpper.setup();
fiveUpper.setColor(0.5, green);
var totalUpper = new CircularPath(85, 100, 100, 13, paper3, grey);
totalUpper.setup();
totalUpper.setColor(0.3, blue); 



/*
           window.onload = function () {
                var r = Raphael("holder", 600, 600),
                    R = 200,
                    init = true,
                    param = {stroke: "#fff", "stroke-width": 30},
                    hash = document.location.hash,
                    marksAttr = {fill: hash || "#444", stroke: "none"},
                    html = [
                        document.getElementById("h"),
                        document.getElementById("m"),
                        document.getElementById("s"),
                        document.getElementById("d"),
                        document.getElementById("mnth"),
                        document.getElementById("ampm")
                    ];
                // Custom Attribute
                r.customAttributes.arc = function (value, total, R) {
                    var alpha = 360 / total * value,
                        a = (90 - alpha) * Math.PI / 180,
                        x = 300 + R * Math.cos(a),
                        y = 300 - R * Math.sin(a),
                        color = "hsb(".concat(Math.round(R) / 200, ",", value / total, ", .75)"),
                        path;
                    if (total == value) {
                        path = [["M", 300, 300 - R], ["A", R, R, 0, 1, 1, 299.99, 300 - R]];
                    } else {
                        path = [["M", 300, 300 - R], ["A", R, R, 0, +(alpha > 180), 1, x, y]];
                    }
                    return {path: path, stroke: color};
                };

                drawMarks(R, 60);
                var sec = r.path().attr(param).attr({arc: [0, 60, R]});
                R -= 40;
                drawMarks(R, 60);
                var min = r.path().attr(param).attr({arc: [0, 60, R]});
                R -= 40;
                drawMarks(R, 12);
                var hor = r.path().attr(param).attr({arc: [0, 12, R]});
                R -= 40;
                drawMarks(R, 31);
                var day = r.path().attr(param).attr({arc: [0, 31, R]});
                R -= 40;
                drawMarks(R, 12);
                var mon = r.path().attr(param).attr({arc: [0, 12, R]});
                var pm = r.circle(300, 300, 16).attr({stroke: "none", fill: Raphael.hsb2rgb(15 / 200, 1, .75).hex});
                html[5].style.color = Raphael.hsb2rgb(15 / 200, 1, .75).hex;

                function updateVal(value, total, R, hand, id) {
                    if (total == 31) { // month
                        var d = new Date;
                        d.setDate(1);
                        d.setMonth(d.getMonth() + 1);
                        d.setDate(-1);
                        total = d.getDate();
                    }
                    var color = "hsb(".concat(Math.round(R) / 200, ",", value / total, ", .75)");
                    if (init) {
                        hand.animate({arc: [value, total, R]}, 900, ">");
                    } else {
                        if (!value || value == total) {
                            value = total;
                            hand.animate({arc: [value, total, R]}, 750, "bounce", function () {
                                hand.attr({arc: [0, total, R]});
                            });
                        } else {
                            hand.animate({arc: [value, total, R]}, 750, "elastic");
                        }
                    }
                    html[id].innerHTML = (value < 10 ? "0" : "") + value;
                    html[id].style.color = Raphael.getRGB(color).hex;
                }

                function drawMarks(R, total) {
                    if (total == 31) { // month
                        var d = new Date;
                        d.setDate(1);
                        d.setMonth(d.getMonth() + 1);
                        d.setDate(-1);
                        total = d.getDate();
                    }
                    var color = "hsb(".concat(Math.round(R) / 200, ", 1, .75)"),
                        out = r.set();
                    for (var value = 0; value < total; value++) {
                        var alpha = 360 / total * value,
                            a = (90 - alpha) * Math.PI / 180,
                            x = 300 + R * Math.cos(a),
                            y = 300 - R * Math.sin(a);
                        out.push(r.circle(x, y, 2).attr(marksAttr));
                    }
                    return out;
                }

                (function () {
                    var d = new Date,
                        am = (d.getHours() < 12),
                        h = d.getHours() % 12 || 12;
                    updateVal(d.getSeconds(), 60, 200, sec, 2);
                    updateVal(d.getMinutes(), 60, 160, min, 1);
                    updateVal(h, 12, 120, hor, 0);
                    updateVal(d.getDate(), 31, 80, day, 3);
                    updateVal(d.getMonth() + 1, 12, 40, mon, 4);
                    pm[(am ? "hide" : "show")]();
                    html[5].innerHTML = am ? "AM" : "PM";
                    setTimeout(arguments.callee, 1000);
                    init = false;
                })();
            };


                <div class="col-md-4">
                  <canvas id="canvas1" width="100" height="100" style="border:0px solid #000000;">
                    Your browser does not support the HTML5 canvas tag.
                  </canvas>
                </div>
                <div class="col-md-4">
                  <canvas id="canvas2" width="100" height="100" style="border:0px solid #000000;">
                    Your browser does not support the HTML5 canvas tag.
                  </canvas>
                </div>
                <div class="col-md-4">
                  <canvas id="canvas3" width="100" height="100" style="border:0px solid #000000;">
                    Your browser does not support the HTML5 canvas tag.
                  </canvas>
                  
                </div>
                
                

                <div class="col-md-4">
                  <canvas id="canvas4" width="100" height="100" style="border:0px solid #000000;">
                    Your browser does not support the HTML5 canvas tag.
                  </canvas>
                </div>
                <div class="col-md-4">
                  <canvas id="canvas5" width="100" height="100" style="border:0px solid #000000;">
                    Your browser does not support the HTML5 canvas tag.
                  </canvas>
                </div>
                <div class="col-md-4">
                  <canvas id="canvas6" width="100" height="100" style="border:0px solid #000000;">
                    Your browser does not support the HTML5 canvas tag.
                  </canvas>
                </div>

                */

/*
var math1a = {
    setup: function() {  
        var canvas1 = document.getElementById('canvas1');
        var math1a = canvas1.getContext('2d');
        math1a.beginPath();
        math1a.arc(50,50,40,0,2*Math.PI);
        math1a.closePath();
        math1a.lineWidth=10;
        math1a.strokeStyle="#E5E4E2";
        math1a.stroke();

        math1a.beginPath();
        math1a.arc(50,50,32.5,0,2*Math.PI);
        //math1a.fillStyle="#4CC417";
        math1a.fillStyle="#E5E4E2";
        math1a.fill();
        math1a.closePath();

        math1a.font="15px Arial";
        math1a.fillStyle="#ffffff";
        math1a.fillText("Math1A",25,55);
    }
    

    ,up: function() {
        var canvas1 = document.getElementById('canvas1');
        var math1a = canvas1.getContext('2d');
        math1a.beginPath();
        math1a.arc(50,50,32.5,0,2*Math.PI);
        math1a.fillStyle="#ffffff";
        math1a.fill();
        math1a.fillStyle="#4CC417";
        math1a.fill();
        math1a.closePath();
        math1a.font="15px Arial";
        math1a.fillStyle="#ffffff";
        math1a.fillText("Math1A",25,55);
    }

    ,down: function() {
        var canvas1 = document.getElementById('canvas1');
        var math1a = canvas1.getContext('2d');
        math1a.beginPath();
        math1a.arc(50,50,32.5,0,2*Math.PI);
        math1a.fillStyle="#ffffff";
        math1a.fill();
        math1a.fillStyle="#E5E4E2";
        math1a.fill();
        math1a.closePath();

        math1a.font="15px Arial";
        math1a.fillStyle="#ffffff";
        math1a.fillText("Math1A",25,55);
    }
};


var math1b = {
    setup: function() {
        var canvas2 = document.getElementById('canvas2');
        var math1b = canvas2.getContext('2d');

        math1b.beginPath();
        math1b.arc(50,50,40,0,2*Math.PI);
        math1b.closePath();
        math1b.lineWidth=10;
        math1b.strokeStyle="#4CC417";
        math1b.stroke();

        math1b.beginPath();
        math1b.arc(50,50,32.5,0,2*Math.PI);
        math1b.fillStyle="#3EA055";
        math1b.fill();
        math1b.closePath();

        math1b.font="15px Arial";
        math1b.fillStyle="#ffffff";
        math1b.fillText("Math1B",25,55);
    }      
};


var math54 = {
    setup: function() {
        var canvas3 = document.getElementById('canvas3');
        var math54 = canvas3.getContext('2d');

        math54.beginPath();
        math54.arc(50,50,40,0,2*Math.PI);
        math54.closePath();
        math54.lineWidth=10;
        math54.strokeStyle="#3EA055";
        math54.stroke();

        math54.beginPath();
        math54.arc(50,50,32.5,0,2*Math.PI);
        math54.fillStyle="#306754";
        math54.fill();
        math54.closePath();

        math54.font="15px Arial";
        math54.fillStyle="#ffffff";
        math54.fillText("Math54",25,55);
    }
};

var cs61a = {
    setup: function() {
        var canvas4 = document.getElementById('canvas4');
        var cs61a = canvas4.getContext('2d');

        cs61a.beginPath();
        cs61a.arc(50,50,40,0,2*Math.PI);
        cs61a.closePath();
        cs61a.lineWidth=10;
        cs61a.strokeStyle="#E5E4E2";
        cs61a.stroke();

        cs61a.beginPath();
        cs61a.arc(50,50,32.5,0,2*Math.PI);
        cs61a.fillStyle="#82CAFF";
        cs61a.fill();
        cs61a.closePath();

        cs61a.font="15px Arial";
        cs61a.fillStyle="#ffffff";
        cs61a.fillText("CS61A",25,55);
    }
};

var cs61b = {
    setup: function() {
        var canvas5 = document.getElementById('canvas5');
        var cs61b = canvas5.getContext('2d');

        cs61b.beginPath();
        cs61b.arc(50,50,40,0,2*Math.PI);
        cs61b.closePath();
        cs61b.lineWidth=10;
        cs61b.strokeStyle="#82CAFF";
        cs61b.stroke();

        cs61b.beginPath();
        cs61b.arc(50,50,32.5,0,2*Math.PI);
        cs61b.fillStyle="#3090C7";
        cs61b.fill();
        cs61b.closePath();

        cs61b.font="15px Arial";
        cs61b.fillStyle="#ffffff";
        cs61b.fillText("CS61B",25,55);
    }
};

var cs61c = {
    setup: function() {
        var canvas6 = document.getElementById('canvas6');
        var cs61c = canvas6.getContext('2d');

        cs61c.beginPath();
        cs61c.arc(50,50,40,1.5*Math.PI,0.5*Math.PI);
        cs61c.lineWidth=10;
        cs61c.strokeStyle="#3090C7";
        cs61c.stroke();

        cs61c.beginPath();
        cs61c.arc(50,50,40,0.5*Math.PI,1.5*Math.PI);
        cs61c.lineWidth=10;
        cs61c.strokeStyle="#82CAFF"; 
        cs61c.stroke();

        cs61c.beginPath();
        cs61c.arc(50,50,32.5,0,2*Math.PI);
        cs61c.fillStyle="#2B547E";
        cs61c.fill();
        cs61c.closePath();

        cs61c.font="15px Arial";
        cs61c.fillStyle="#ffffff";
        cs61c.fillText("CS61C",25,55);
    }
};

var circularProgress = {
    setup: function() {
        var canvas = document.getElementById('circularProgress');
        var circularProgress = canvas.getContext('2d');
        circularProgress.beginPath();
        circularProgress.arc()

    }

}


//<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  //  <path fill="none" stroke="#bfa2a2" d="M20,10 A10,10,0,0,0,20,30" stroke-width="5">
//</svg>  



//$(math1a.setup);
//$(math1b.setup);
//$(math54.setup);
//$(cs61a.setup);
//$(cs61b.setup);
//$(cs61c.setup);
//$('#canvas1').mouseenter(math1a.up);
//$('#canvas1').mouseleave(math1a.down); */
               
        