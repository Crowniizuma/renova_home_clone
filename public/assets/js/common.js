$(document).ready((function(){$(".parent").each((function(){var s=$(this).find(".child");$(this).mouseover((function(){o.removeClass("open"),l.removeClass("open"),e.removeClass("close_icon"),s.addClass("open")})),$(this).mouseleave((function(){s.removeClass("open")}))}));var e=$(".search_icon"),o=$(".search_bar");e.click((function(){l.removeClass("open"),o.toggleClass("open"),e.toggleClass("close_icon")}));var s=$(".lang_title"),l=$(".language_option");s.click((function(){o.removeClass("open"),e.removeClass("close_icon"),l.toggleClass("open")}));var a=new Swiper(".swiper",{spaceBetween:50,effect:"fade",autoplay:{delay:5e3},pagination:{el:".swiper-pagination",clickable:!0}}),n=$(".link_li");console.log("a"),a.on("slideChange",(function(){var e=a.activeIndex,o=$(n[e]);o.show(),n.not(o).hide();var s=$(".swiper-slide-visible");"white"==s.data().color&&$(".big_text").removeClass("black"),"black"==s.data().color&&$(".big_text").addClass("black")})),$(".scroll_container").click((function(){return $("html,body").animate({scrollTop:0},1500),!1}));var i=$(".panels_list");console.log("a"),i.slick({slidesToShow:3,slidesToScroll:3,arrows:!1,pauseOnHover:!1,dots:!0,responsive:[{breakpoint:1024,settings:{slidesToShow:1,slidesToScroll:1}}]})}));
//# sourceMappingURL=common.js.map