/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
big_data.sort(function (a, b) {
            return Number(a.exlot_no) - Number(b.exlot_no) || getRealNumber(Number(b.bid_price)) - getRealNumber(Number(a.bid_price));
        });
 *
 */

var curcar = document.createElement("ons-carousel-item");


function generate_carousel_content()
{
    curcar.innerHTML = "";
    curcar.setAttribute("class","mainitem");
    var carousel = document.createElement("ons-carousel");
    carousel.setAttribute("initial-index", 1);
    carousel.setAttribute("style", "height: 100%; width: 100%");
    carousel.setAttribute("swipeable", "true");
    carousel.setAttribute("direction","vertical");
    carousel.setAttribute("overscrollable", "true");
    carousel.setAttribute("auto-scroll", "true");
    carousel.setAttribute("auto-refresh", "true");
    carousel.setAttribute("class", "maincarousel");

    var item1 = document.createElement("ons-carousel-item");
    var item3 = document.createElement("ons-carousel-item");

    if (ind_lot_index==0)
    {
        carousel.setAttribute("initial-index", 0);
        carousel.appendChild(curcar);
        carousel.appendChild(item3);
    }
    else if (ind_lot_index>0 && ind_lot_index<current_array.length){
        carousel.appendChild(item1);
        carousel.appendChild(curcar);
        carousel.appendChild(item3);
    }
    else if(ind_lot_index==current_array.length)
    {
        carousel.appendChild(item1);
        carousel.appendChild(curcar);
    }

    
    
    var scr = document.createElement("script");
    scr.innerHTML = `
$("ons-carousel.maincarousel").on("postchange", function(){
carousel_change(event);
}
);
`;
    carousel.appendChild(scr);

    return carousel;
}


var populate_data = function ()
{
    var br = "<br>";

    this.data = big_data.myIndexOf(ind_lot_lotno); //is an array of JSON objects
    var caritem = this;
    
    caritem.classList.add(this.data[0].lotid);
    //img START
    var imgcarousel = document.createElement("ons-carousel");
    imgcarousel.setAttribute("initial-index", 0);
    imgcarousel.setAttribute("swipeable", "true");
    imgcarousel.setAttribute("auto-scroll", "true");
    imgcarousel.setAttribute("class", "img");

    var imgcarouselitem0 = document.createElement("ons-carousel-item");
    var imgcarouselitem1 = document.createElement("ons-carousel-item");
    var imgcarouselitem2 = document.createElement("ons-carousel-item");
    var imgcol0 = document.createElement("ons-col");
    var imgcol1 = document.createElement("ons-col");
    var imgcol2 = document.createElement("ons-col");
    var imgrow0 = document.createElement("ons-col");
    var imgrow1 = document.createElement("ons-col");
    var imgrow2 = document.createElement("ons-col");

    imgrow0.appendChild(imgcol0);
    imgrow1.appendChild(imgcol1);
    imgrow2.appendChild(imgcol2);
    
    imgcarousel.appendChild(imgcarouselitem0);
    imgcarousel.appendChild(imgcarouselitem1);
    imgcarousel.appendChild(imgcarouselitem2);
    var indimg = document.createElement("img");
    indimg.setAttribute("class","indimg_sheet")
    
    indimg.src = getOldURL(this.data[0].auction_sheet);
    var indimgf = document.createElement("img");
    indimgf.setAttribute("class","indimg")
    indimgf.src = getOldURL(this.data[0].front_image);
    var indimgr = document.createElement("img");
    indimgr.setAttribute("class","indimg")
    indimgr.src = getOldURL(this.data[0].rear_image);
    imgcarouselitem0.appendChild(imgrow0);
    imgcarouselitem1.appendChild(imgrow1);
    imgcarouselitem2.appendChild(imgrow2);
    imgcol0.appendChild(indimg);
    imgcol1.appendChild(indimgf);
    imgcol2.appendChild(indimgr);

    //indimg.style = "width:100%;";
    //var imgdiv = document.createElement("div");
    //imgdiv.setAttribute("class", "center-content");
    //imgdiv.appendChild(indimg);
    var indpagecol = document.createElement("ons-col");
    indpagecol.setAttribute("style", "height:30%")
    var indpagerow = document.createElement("ons-row");
    indpagerow.appendChild(imgcarousel);
    indpagerow.appendChild(indpagecol);
    caritem.appendChild(indpagerow);
    imgcarousel.refresh();
    //img END

    //info section wrappers
    var indpagerow2 = document.createElement("ons-row");
    var indpagecol21 = document.createElement("ons-col");
    var indpagecol22 = document.createElement("ons-col");
    indpagerow2.appendChild(indpagecol21);
    indpagerow2.appendChild(indpagecol22);
    //info section wrappers END

    //aucname lot
    var company_name1 = document.createElement("h2");
    company_name1.id = "aucname";
    company_name1.innerHTML = this.data[0].company_name;
    indpagecol21.appendChild(company_name1);
    var exlot_no = document.createElement("h3");
    exlot_no.id = "exlot";
    exlot_no.innerHTML = this.data[0].exlot_no;
    indpagecol21.appendChild(exlot_no);
    //aucname lot END
    caritem.appendChild(indpagerow2);

    //bid price
    var bid_price = document.createElement("h2");
    bid_price.id = "bidprice";
    bid_price.innerHTML = this.data[0].bid_price != "" ? this.data[0].bid_price : "?";
    indpagecol22.appendChild(bid_price);
    var remarks1 = document.createElement("h4");
    remarks1.id="remarks";
    remarks1.innerHTML = this.data[0].remarks;
    indpagecol22.appendChild(remarks1);

    //remaining details
    var remaining_details_row = document.createElement("ons-row");
    var remaining_details_col0 = document.createElement("ons-col");
    var remaining_details_col1 = document.createElement("ons-col");
    var remaining_details_col2 = document.createElement("ons-col");

    remaining_details_col0.innerHTML = this.data[0].car_name + br + this.data[0].type + br + this.data[0].grade;
    remaining_details_col1.innerHTML = this.data[0].year + br + this.data[0].shift + br + this.data[0].mileage;
    remaining_details_col2.innerHTML = "検：" + this.data[0].inspect + br + "評：" + this.data[0].condition + " (" + this.data[0].ext_grade + "/" + this.data[0].int_grade + ")";

    remaining_details_row.appendChild(remaining_details_col0);
    remaining_details_row.appendChild(remaining_details_col1);
    remaining_details_row.appendChild(remaining_details_col2);
    caritem.appendChild(remaining_details_row);
    //remaining details END

    var ind_remark_row = document.createElement("ons-row");
    var ind_remarkcol = document.createElement("ons-col");
    var ind_input = document.createElement("div");
    ind_input.id = "indinput";
    ind_input.setAttribute("class", "buyer_remark");
    ind_input.setAttribute("onmousedown","show_remark_modal()");
    ind_input.attachMessageData = attach_message_data;
    ind_input.getByLotid = get_by_lotid;
    ind_input.idbAddLot = idb_add_lot;
    ind_input.updateLot = update_entry;
    ind_input.saveStatus = save_status;
    ind_input.getByLotid(); //also get the status?
    ind_input.setAttribute("lotid", this.data[0].lotid);

    ind_remark_row.appendChild(ind_remarkcol);
    ind_remarkcol.appendChild(ind_input);
    caritem.appendChild(ind_remark_row);

    //control&&management
    var ind_contolpanel_row = document.createElement("ons-row");
    var ind_conpancol = document.createElement("ons-col");
    ind_contolpanel_row.appendChild(ind_conpancol);
    ind_conpancol.innerHTML = speed_dial_ind;
    caritem.appendChild(ind_contolpanel_row);
    //control&&management END

    document.querySelector("ons-speed-dial").showItems();
    $(".fab--bottom__right").css("bottom", "0");
    //
    //logging
    console.log(curcar);

    $(".buyer_remark")[0].getByLotid();

    if(ons.orientation.isLandscape())
    {
        $("ons-row").css({"float":"left", "width":"49%"});
    } 
    else {
        $("ons-row").css({"float":"none", "width":"100%"});
    }
    ons.orientation.on('change', function() {
        if(ons.orientation.isLandscape())
        {
        $("ons-row").css({"float":"left", "width":"49%"});
        } 
        else {
        $("ons-row").css({"float":"none", "width":"100%"});
        }
    });
}

function indlot_kanri(event)
{
    var et = event.currentTarget;
    etppp = et.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement;
    console.log();
}

function carousel_change(event)
{
    console.log(event.target);
    if (event.target.classList.contains("maincarousel"))
    {
        console.log(event.activeIndex);
        //temporary setup    
        //curcar = $("ons-carousel ons-carousel-item")[event.activeIndex].outerHTML;            

            if(event.activeIndex==0)
        {
            ind_lot_index--;
            ind_lot_lotno = current_array[ind_lot_index];
            }
            else {
            ind_lot_index++;
            ind_lot_lotno = current_array[ind_lot_index];
        }
        $("#carousel").html(generate_carousel_content());
        curcar.populate_data();

    } else {
        //the other one
    }
}