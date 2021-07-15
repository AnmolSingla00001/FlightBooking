//var travellers = document.querySelector('.travellers')[0];
// var travellers = document.getElementById('travellers');
// var button = document.getElementById('search');
// button.addEvntListener(onclick, fun);
//import Flights from "/data.js";
let flights = [
    {
        "flight": "F001A",
        "from": "Pune",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F011A",
        "from": "Pune",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F021A",
        "from": "Pune",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 8000
    },
    {
        "flight": "F031A",
        "from": "Pune",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F041A",
        "from": "Pune",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F001B",
        "from": "Pune",
        "to": "Goa",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F001C",
        "from": "Pune",
        "to": "Delhi",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F001D",
        "from": "Pune",
        "to": "Bangalore",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F002A",
        "from": "Delhi",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F002B",
        "from": "Delhi",
        "to": "Goa",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F002C",
        "from": "Delhi",
        "to": "Pune",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F002D",
        "from": "Delhi",
        "to": "Bangalore",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F003A",
        "from": "Mumbai",
        "to": "Delhi",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F003B",
        "from": "Mumbai",
        "to": "Goa",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F003C",
        "from": "Mumbai",
        "to": "Pune",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F003D",
        "from": "Mumbai",
        "to": "Bangalore",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F004A",
        "from": "Bangalore",
        "to": "Delhi",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F004B",
        "from": "Bangalore",
        "to": "Goa",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F004C",
        "from": "Bangalore",
        "to": "Pune",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F004D",
        "from": "Bangalore",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F005A",
        "from": "Goa",
        "to": "Delhi",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F005B",
        "from": "Goa",
        "to": "Bangalore",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F005C",
        "from": "Goa",
        "to": "Pune",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    },
    {
        "flight": "F005D",
        "from": "Goa",
        "to": "Mumbai",
        "depTime": "2021-08-20 14:30",
        "arrTime": "2021-08-20 14:30",
        "price": 5600
    }
];
function fun() {
    //alert(document.getElementById('oneway').checked);
    // var container = document.querySelector(".city");

    // alert("hellow wowjej" + document.getElementById('departure').value);
    // document.getElementById('travellers').value = 234;

    // //container.innerHTML = `<tr><td>< input type = "radio" class="dep_card_selected" name = "flightType" value = "001A"name = "dep_card_selected" id = "oneWay" ><span>INR 5000.00<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp001A<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPune to Delhi<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : 10:00 AM <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : 12:30 PM<br /> </span></td ></tr ><tr><td>< input type = "radio" class="dep_card_selected" name = "flightType" value = "001A"name = "dep_card_selected" id = "oneWay" ><span>INR 5000.00<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp001A<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPune to Delhi<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : 10:00 AM <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : 12:30 PM<br /> </span></td ></tr >`;
    // //container.innerHTML = `<li>< input type = "radio" class="dep_card_selected" name = "flightType" value = "001A"name = "dep_card_selected" id = "oneWay" ><span>INR 5000.00<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp001A<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPune to Delhi<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : 10:00 AM <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : 12:30 PM<br /> </span></li ><li>< input type = "radio" class="dep_card_selected" name = "flightType" value = "001A"name = "dep_card_selected" id = "oneWay" ><span>INR 5000.00<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp001A<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPune to Delhi<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : 10:00 AM <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : 12:30 PM<br /> </span></li >`;
    // var sum = "";
    // a = '<tr><td background-color:"black"> <input type="radio" id="html" name="fav_language" value="HTML"><label for="html"><span>INR 5000.00<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp001A<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPune to Delhi<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : 10:00 AM <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : 12:30 PM<br /> </span></label></td></tr>';
    // for (var i = 0; i <= 5; i++) {
    //     sum = sum + a;
    // }
    // container.innerHTML = sum;
    // alert(Flights);

    let oneway = document.getElementById('oneway').checked;
    let twoway = document.getElementById('return').checked;
    let from = document.getElementById('fromDL').value;
    let to = document.getElementById('toDL').value;
    let dpt_date = document.getElementById('departure').value;
    let back_date = document.getElementById('return_date').value;
    let travellers = document.getElementById('travellers').value;
    let count = 0;
    if (!oneway && !twoway) {
        alert("Select either One Way or Return");
        count = 1;
    }
    else if (from == "" || to == "" || from == to) {
        alert("Select the appropriate departure and destination city");
        count = 1;
    }
    else if (dpt_date == "" || new Date(dpt_date) <= new Date()) {
        alert("Select the departure date after today's date");
        count = 1;
    }
    else if (twoway == true && (back_date == "" || new Date(back_date) <= new Date() || new Date(back_date) < new Date(dpt_date))) {
        alert("Select appropriate Return date");
        count = 1;
    }
    if (count == 0) {
        let container = document.querySelector(".city");
        let container1 = document.querySelector(".city1");
        let one_arr = "";
        let ret_arr = "";
        let flag = 0;
        let flag1 = 0;
        for (let i = 0; i < flights.length; i++) {
            let fly_from = flights[i].from;
            let fly_to = flights[i].to;
            let fly_dt = flights[i].depTime.split(" ")[0];
            //console.log(new Date() + "  " + new Date(dpt_date) + "   " + fly_dt + "   " + new Date(fly_dt));
            console.log(fly_from + "   " + from + "   " + fly_to + "   " + to + "   " + new Date(dpt_date) + "   " + new Date(fly_dt));
            if (fly_from == from && fly_to == to && dpt_date == fly_dt) {
                flag = flag + 1;
                one_arr = one_arr + '<tr><td background-color:"black"> <input type="radio" onclick=fun2(' + flights[i].price + ',"from") id="rb_to" name="rb_to" value=' + flights[i].flight + '><label for="rb_to"><span>INR ' + flights[i].price + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].flight + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].from + ' to ' + flights[i].to + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : ' + flights[i].depTime + ' <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : ' + flights[i].arrTime + '<br /> </span></label></td></tr>';
            }

            else if (twoway == true && fly_from == to && fly_to == from && back_date == fly_dt) {
                flag1 = flag1 + 1;
                ret_arr = ret_arr + '<tr><td background-color:"black"> <input type="radio" onclick=fun2(' + flights[i].price + ',"to") id="rb_from" name="rb_from" value=' + flights[i].flight + '><label for="rb_from"><span>INR ' + flights[i].price + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].flight + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].from + ' to ' + flights[i].to + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : ' + flights[i].depTime + ' <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : ' + flights[i].arrTime + '<br /> </span></label></td></tr>';
            }
        }
        if (flag > 0) {
            container.innerHTML = one_arr;
        }
        else {
            container.innerHTML = "";
        }
        if (flag1 > 0) {
            container1.innerHTML = ret_arr;
        }
        else {
            container1.innerHTML = "";
        }

    }

}

function fn_btnFilter() {
    // alert("Filter");
    let minPrice = document.getElementById('min').value;
    let maxPrice = document.getElementById('max').value;
    let flightClass = document.getElementById('flightClass').value;
    let flgErr = false;

    if (minPrice == "" || maxPrice == "") {
        alert("Minimum Price or Maximum Price can't be left empty.");
        flgErr = true;
    }

    if (!flgErr) {
        let oneway = document.getElementById('oneway').checked;
        let twoway = document.getElementById('return').checked;
        let from = document.getElementById('fromDL').value;
        let to = document.getElementById('toDL').value;
        let dpt_date = document.getElementById('departure').value;
        let back_date = document.getElementById('return_date').value;
        let travellers = document.getElementById('travellers').value;
        let count = 0;

        let flag = 0;
        let flag1 = 0;
        let container = document.querySelector(".city");
        let container1 = document.querySelector(".city1");
        let one_arr = "";
        let ret_arr = "";
        if (!oneway && !twoway) {
            alert("Select either One Way or Return");
            count = 1;
        }
        else if (from == "" || to == "" || from == to) {
            alert("Select the appropriate departure and destination city");
            count = 1;
        }
        else if (dpt_date == "" || new Date(dpt_date) <= new Date()) {
            alert("Select the departure date after today's date");
            count = 1;
        }
        else if (twoway == true && (back_date == "" || new Date(back_date) <= new Date() || new Date(back_date) < new Date(dpt_date))) {
            alert("Select appropriate Return date");
            count = 1;
        }
        if (count == 0) {
            for (let i = 0; i < flights.length; i++) {
                let fly_from = flights[i].from;
                let fly_to = flights[i].to;
                let fly_dt = flights[i].depTime.split(" ")[0];
                //console.log(new Date() + "  " + new Date(dpt_date) + "   " + fly_dt + "   " + new Date(fly_dt));
                console.log(fly_from + "   " + from + "   " + fly_to + "   " + to + "   " + new Date(dpt_date) + "   " + new Date(fly_dt));
                if (fly_from == from && fly_to == to && dpt_date == fly_dt && ((flights[i].price * flightClass) >= minPrice) && ((flights[i].price * flightClass) <= maxPrice)) {
                    flag = flag + 1;
                    one_arr = one_arr + '<tr><td background-color:"black"> <input type="radio" onclick=fun2(' + flights[i].price + ',"from") id="rb_to" name="rb_to" value=' + flights[i].flight + '><label for="rb_to"><span>INR ' + flights[i].price * flightClass + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].flight + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].from + ' to ' + flights[i].to + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : ' + flights[i].depTime + ' <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : ' + flights[i].arrTime + '<br /> </span></label></td></tr>';

                }

                else if (twoway == true && fly_from == to && fly_to == from && back_date == fly_dt && ((flights[i].price * flightClass) >= minPrice) && ((flights[i].price * flightClass) <= maxPrice)) {
                    flag1 = flag1 + 1;
                    ret_arr = ret_arr + '<tr><td background-color:"black"> <input type="radio" onclick=fun2(' + flights[i].price + ',"to") id="rb_from" name="rb_from" value=' + flights[i].flight + '><label for="rb_from"><span>INR ' + flights[i].price * flightClass + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].flight + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + flights[i].from + ' to ' + flights[i].to + '<br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspDeparts At : ' + flights[i].depTime + ' <br />&nbsp&nbsp&nbsp&nbsp&nbsp&nbspArrives At : ' + flights[i].arrTime + '<br /> </span></label></td></tr>';
                }
            }
        }
        if (flag > 0) {
            container.innerHTML = one_arr;
        }
        else {
            container.innerHTML = "";
        }
        if (flag1 > 0) {
            container1.innerHTML = ret_arr;
        }
        else {
            container1.innerHTML = "";
        }
    }
}


// function fun2(price, way) {
//     alert(price);
//     document.getElementById('lblTotal').innerHTML = price;
// }

let toPrice = 0;
let fromPrice = 0;
function fun2(price, way) {
    if (way == "to") {
        toPrice = parseInt(price);
    }
    if (way == "from") {
        fromPrice = parseInt(price);
    }
    document.getElementById('lblTotal').innerHTML = (toPrice + fromPrice) * parseInt(document.getElementById('travellers').value);
}


function fn_btnBook() {
    alert("Your Flight Has Been Booked!");
}

