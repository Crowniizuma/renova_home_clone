alert("aaaaa"),$(document).ready((function(){$(".parent").each((function(){var a=$(this).find(".child");$(this).mouseover((function(){o.removeClass("open"),s.removeClass("open"),e.removeClass("close_icon"),a.addClass("open")})),$(this).mouseleave((function(){a.removeClass("open")}))}));var e=$(".search_icon"),o=$(".search_bar");e.click((function(){s.removeClass("open"),o.toggleClass("open"),e.toggleClass("close_icon")}));var a=$(".lang_title"),s=$(".language_option");a.click((function(){o.removeClass("open"),e.removeClass("close_icon"),s.toggleClass("open")}));var l=new Swiper(".swiper",{spaceBetween:50,effect:"fade",autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}}),n=$(".link_li");console.log("a"),l.on("slideChange",(function(){var e=l.activeIndex,o=$(n[e]);o.show(),n.not(o).hide();var a=$(".swiper-slide-visible");"white"==a.data().color&&$(".big_text").removeClass("black"),"black"==a.data().color&&$(".big_text").addClass("black")})),$(".scroll_container").click((function(){return $("html,body").animate({scrollTop:0},1500),!1}));var i=$(".panels_list");console.log("a"),i.slick({slidesToShow:3,slidesToScroll:3,arrows:!1,pauseOnHover:!1,dots:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]})}));
//# sourceMappingURL=common.js.map