/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var myjson;
function get_api_data(ul) {
    var url = "https://ajpage.janjapanweb.com/apijson.php";
    $.ajax({
        url: url,
        type: "POST",
        data: {
            action: "api",
            username: localStorage.username,
            password: localStorage.password,
            auction_date: today,
            sql: encodeURI("select lot, images,id from main where lot in (" + ul.join(",") + ") and auction='" + company_name + "'")
        },
    beforeSend: function (xhr) {
        document.querySelector('#loading_circle').show();
    },
    success: function (data, textStatus, jqXHR) {
            document.querySelector('#loading_circle').hide();
            //handle the loaded data, if not empty
            myjson = JSON.parse(data);


            console.log(myjson);
    }
    });
}

var auction_names = {
    "BAYAUC": "BAYAUC"
}

function adapt_auctionname(a) {
    return auction_names[a];
}