var is_touch_device = 'ontouchstart' in document.documentElement;
jQuery(document).on('click','.menu_touch',function(){
  if(jQuery(this).parent().is('.over')) return true;
  else {
    if(is_touch_device) return false;
  }
});

var window_width = 0;
var window_height = 0;
jQuery(window).resize(function(){
  window_height = jQuery(window).height();
  window_width = jQuery(window).width();
  if(jQuery('.mk_popup').length){
    mkPosition();
  }
});
jQuery(window).load(function(){
  set_height();
});
jQuery(document).on('click', '.search_submit', function(){
  jQuery(this).parents('form').submit();
  return false;
});
jQuery(document).on('click', '.mobile_menu_trigger', function(){
  jQuery('.menu_bar').slideToggle();
  return false;
});
var my_menu_timeout = 0;
jQuery(document).ready(function() {

  if(jQuery('.checkbox_form').length){
    jQuery('.checkbox_form').iCheck({
      checkboxClass: 'icheckbox_flat-blue_4ps',
      increaseArea: '20%'
    });
  }
  if(jQuery('.radio_form').length){
    jQuery('.radio_form').iCheck({
      radioClass: 'iradio_flat-blue_4ps',
      increaseArea: '20%'
    });
  }


  if(jQuery('.sel_form').length){
    jQuery('.sel_form').chosen({
      width: "100%",
      //disable_search_threshold: 10,
      allow_single_deselect: true
    });
  }

  jQuery('.bricks_wrapper:not(.full_stretch)').masonry({
    columnWidth: '.grid-sizer',
    gutter: '.gutter-sizer',
    itemSelector: '.brick_item',
    percentPosition: true
  });

  jQuery('.menu_menu a').mouseenter(function(){
    if(jQuery(this).hasClass('social_icon') || jQuery(this).hasClass('nomouse')){
      return false;
    }
    jQuery(this).addClass('over');
    var id = jQuery(this).attr('id').substr(5);
    if(jQuery('#sub_'+id).length){
      var sub_menu = jQuery('#sub_'+id);
      if(my_menu_timeout){
        clearTimeout(my_menu_timeout);
        jQuery('.sub_menu:visible').each(function(){
          if(jQuery(this)[0]!=jQuery(sub_menu)[0])
            jQuery(this).slideUp('fast');
        });
      }
      if(jQuery(sub_menu).is(":hidden"))
        jQuery(sub_menu).slideDown('fast');
    }
    return false;
  });

  jQuery('.menu_menu a').mouseleave(function(){
    if(jQuery(this).hasClass('social_icon') || jQuery(this).hasClass('nomouse')){
      return false;
    }
    jQuery(this).removeClass('over');
    var id = jQuery(this).attr('id').substr(5);
    if(jQuery('#sub_'+id).length){
      var sub_menu = jQuery('#sub_'+id);
      if(jQuery(sub_menu).is(":visible"))
        my_menu_timeout = setTimeout(function(){
          jQuery(sub_menu).slideUp('fast');
        }, 500);
    }
    return false;
  });

  jQuery('.sub_menu').mouseenter(function(){
    var id = jQuery(this).attr('id').substr(4);
    var sub_menu = jQuery(this).attr('id');
    jQuery('#menu_'+id).addClass('keep');
    if(my_menu_timeout){
      clearTimeout(my_menu_timeout);
//				jQuery('.sub_menu:visible').each(function(){
//					if(jQuery(this)[0]!=jQuery(sub_menu)[0])
//						jQuery(this).slideUp('fast');
//				});
    }
  }).mouseleave(function(){
    var id = jQuery(this).attr('id').substr(4);
    jQuery('#menu_'+id).removeClass('keep');
    my_menu_timeout = setTimeout(function(){
      jQuery('#sub_'+id).slideUp('fast');
    }, 500);
  });

  /*
   jQuery('.menu_menu > ul > li').mouseenter(function(){
   jQuery(this).addClass('over');
   sub_menu = jQuery(this).find('ul');
   if(my_menu_timeout){
   clearTimeout(my_menu_timeout);
   jQuery('.menu_menu > ul > li > ul:visible').each(function(){
   if(jQuery(this)[0]!=jQuery(sub_menu)[0])
   jQuery(this).slideUp('fast');
   });
   }
   if(jQuery(sub_menu).is(":hidden"))
   jQuery(sub_menu).slideDown('fast');
   return false;
   });

   jQuery('.menu_menu > ul > li').mouseleave(function(){
   jQuery(this).addClass('over');
   sub_menu = jQuery(this).find('ul');
   if(jQuery(sub_menu).is(":visible"))
   my_menu_timeout = setTimeout(function(){
   jQuery(sub_menu).slideUp('fast');
   }, 1000);

   return false;
   });
   */

  jQuery('.art_photos').innerfade({ speed: 'slow', timeout: 4000, type: 'sequence', containerheight: '200px' });

  set_height();

  jQuery('.art_thumb').click(function() {

    new_src = jQuery(this).attr('src');

    my_id = jQuery(this).attr('id');
    my_id = my_id.replace('th_','');


    par1 = jQuery(this).parent();
    jQuery(par1).find('.art_photos li').hide();
    jQuery(par1).find('.art_photos li#li_'+my_id).show();

  });

  jQuery('input[title!=""],textarea[title!=""]').hint();

  jQuery("a.article").fancybox(
    {
      openEffect			: 'elastic',
      closeEffect			: 'elastic',
      nextEffect			: 'elastic',
      prevEffect			: 'elastic',
      /*
       openOpacity 		: false,
       closeOpacity		: false,
       openEasing 			: false,
       closeEasing 		: false,
       */
      helpers:  {
        overlay 		: null
      }
    }
  );

  jQuery(function() {
    jQuery("#tree").treeview({
      collapsed: true,
      animated: "medium",
      control:"#sidetreecontrol"
    });
  });

});

jQuery(document).on('click', '.submit_form', function(){
  var action = jQuery(this).data('action');
  var cur_form = jQuery(this).parents('.ajax_form');
  var butt_name = jQuery(this).attr('name');
  if(!butt_name)
    butt_name = 'send';
  jQuery(cur_form).find('.blur').val('');
  jQuery(cur_form).find('.text_error').removeClass('text_error');
  my_data = 'page=' + action + '&' + butt_name + '=1';
  error = 0;
  error_list = "Alle velden invullen aub.<br />";
  jQuery(cur_form).find("input[type=text], input[type=hidden], textarea, select, input[type=radio]:checked, input[type=checkbox]:checked").each(function() {
    var alert = '';
    if(jQuery(this).data('alert')){
      alert = jQuery(this).data('alert');
    }else{
      alert = (jQuery(this).attr('name')).replace(/_/g, ' ');
    }
    if(jQuery(this).hasClass('captcha') && (jQuery(this).val() != 2 || !jQuery(this).val())){
      error = 1;
      error_list += "<br />" + alert;
      jQuery(this).addClass('text_error');
    }
    if(jQuery(this).hasClass('validate') && (!jQuery(this).val())){
      error = 1;
      error_list += "<br />" + alert;
      jQuery(this).addClass('text_error');
    }
    if(jQuery(this).hasClass('email_validate') && jQuery(this).val() && !isValidEmailAddress(jQuery(this).val())){
      error = 1;
      error_list += "<br />" + alert;
      jQuery(this).addClass('text_error');
    }
    if(jQuery(this).hasClass('website_validate') && jQuery(this).val() && !is_valid_url(jQuery(this).val())){
      error = 1;
      error_list += "<br />" + alert;
      jQuery(this).addClass('text_error');
    }

    my_data += "&" + jQuery(this).attr('name') + "=" + encodeURIComponent(jQuery(this).val());
  });

  jQuery(cur_form).find('.row_label').removeClass('text_error_2');

  var inp_ar = new Array();

  jQuery(cur_form).find("input[type=radio].validate, input[type=checkbox].validate").each(function(){
    var f_name = jQuery(this).attr('name');
    if(!inp_ar[f_name]){
      inp_ar[f_name] = 1;
      var u_name = f_name.replace(/_/g, ' ');
      u_name = u_name.replace(/\[\]/g, '');

      if(jQuery(cur_form).find('input[name="' + f_name + '"]:checked').length==0){
        error = 1;
        error_list += "<br />" + u_name;
        jQuery(this).parents('.row').find('.row_label').addClass('text_error_2');
      }
    }

  });


  jQuery('input[title!=""], textarea[title!=""]').hint();

  if(error==0){
    jQuery.ajax({
      type: "POST",
      url: "/ajax.php",
      data: my_data,
      success: function(msg){
        jQuery(cur_form).html(msg);
      }
    });
  }else{
    jQuery.fancybox(
      error_list,
      {
        openEffect			: 'none',
        closeEffect			: 'none',
        openOpacity 		: false,
        closeOpacity		: false,
        openEasing 			: false,
        closeEasing 		: false,
        autoSize			: true,
        helpers:  {
          overlay 		: null
        }
      }
    );
    setTimeout ( "jQuery.fancybox.close()", 3000 );
  }

});

function set_height(){
  jQuery('.art_photos').each(function(){
    my_height = 0;
    jQuery(this).find('img').each(function(){
      aux_height = jQuery(this).height();
      if(!aux_height){
        var copied_elem = jQuery(this).clone()
          .attr("id", false)
          .css({visibility:"hidden", display:"block",
            position:"absolute"});
        jQuery("body").append(copied_elem);
        aux_height = copied_elem.height();
        copied_elem.remove();
      }
      if(aux_height > my_height)
        my_height = aux_height;
    });

    if(my_height)
      jQuery(this).css('height', my_height+'px');
  });
}

function formatTitle(title, currentArray, currentIndex, currentOpts) {
  return '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tbody><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main"><a href="/get_image.php?img='+title+'" title="Download">Download</a></td><td id="fancybox-title-float-right"></td></tr></tbody></table>';
}

function isValidEmailAddress(emailAddress) {
  //var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  var pattern = new RegExp(/^(?:[\w\d]+\.?)+@(?:(?:[\w\d]\-?)+\.)+\w{2,4}$/i);
  return pattern.test(emailAddress);
}

function isValidNumber(strString)
{
  var strValidChars = "0123456789";
  var strChar;
  var blnResult = true;
  if (strString.length == 0) return false;
  for (i = 0; i < strString.length && blnResult == true; i++)
  {
    strChar = strString.charAt(i);
    if (strValidChars.indexOf(strChar) == -1)
    {
      blnResult = false;
    }
  }
  if(blnResult){
    if(parseInt(strString)<1 || parseInt(strString)>10)
      return false;
  }
  return blnResult;
}

function isNumeric(string){
  var numericExpression = /^[0-9]+$/;
  if(string.match(numericExpression)) {
    return true;
  } else {
    return false;
  }
}

function validateNumber(event) {
  var key = window.event ? event.keyCode : event.which;

  if (event.keyCode == 8 || event.keyCode == 46
    || event.keyCode == 37 || event.keyCode == 39) {
    return true;
  }
  else if ( key < 48 || key > 57 ) {
    return false;
  }
  else return true;
};

function validateUsername(fld) {
  var res = true;
  var illegalChars = /\W/; // allow letters, numbers, and underscores

  if (fld == "") {
    res = false;
  } else if ((fld.length < 5) || (fld.length > 15)) {
    res = false;
  } else if (illegalChars.test(fld)) {
    res = false;
  }
  return res;
}

function validatePassword(fld) {
  var res = true;
  var illegalChars = /[\W_]/; // allow only letters and numbers

  if (fld == "") {
    res = false;
  } else if ((fld.length < 5) || (fld.length > 15)) {
    res = false;
  } else if (illegalChars.test(fld)) {
    res = false;
  }

  return res;
}

function is_valid_url(url)
{
  return url.match(/((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[.\!\/\\w]*))?)/);
}

function number_format (number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

function isValidUserName(userName){
  var pattern = new RegExp(/^(\w){3,}$/i);
  return pattern.test(userName);
}

function isValidPassWord(passWord){
  var pattern = new RegExp(/^(\S){4,}$/i);
  return pattern.test(passWord);
}

jQuery(document).on('click','.mk_button', function(){

  var item_id = '';
  if(jQuery(this).data('id'))
    item_id = jQuery(this).data('id');

  var my_action = '';
  if(jQuery(this).data('action')){
    my_action = jQuery(this).data('action');
  }

  var address = "page=" + my_action + '&item_id='+item_id;
  if(my_action){
    mkPopupOpen(address);
  }
});
jQuery(document).on('click','.mk_overlay, .mk_close', function(){
  mkPopupClose();
  return false;
});

var mk_loader = '<img src="/images/ajax-loader.gif" alt="loading..." class="mk_loader" />';

function mkPopupClose(){
  jQuery('.mk_overlay').remove();
  jQuery('.mk_popup').remove();
  jQuery('.mk_loader').remove();
  return false;
}

function mkPosition(){
  if(!window_height) window_height = jQuery(window).height();
  if(!window_width) window_width = jQuery(window).width();
  jQuery('.mk_popup').attr('style','');
  var mk_w = jQuery('.mk_popup').width();
  var mk_h = jQuery('.mk_popup').height();
  var mk_t = window_width*2.5/100;
  var posleft = (window_width-mk_w)/2;
  if(posleft<mk_t) posleft = mk_t;
  var postop = (window_height-mk_h)/2;
  if(postop<mk_t) postop = mk_t;
  postop+= jQuery(window).scrollTop();
  if(mk_w > (window_width - 2*posleft)){
    var mk_w = window_width - 2*posleft;
    jQuery('.mk_popup').css({'width': mk_w+'px'});
  }

  jQuery('.mk_popup').css({'top': postop+'px','left': posleft+'px'});
}

function mkPopupOpen(address){
  jQuery('body').append(mk_loader);
  if(!jQuery('.mk_overlay').length){
    jQuery('body').append('<div class="mk_overlay">');
  }
  if(!jQuery('.mk_popup').length){
    jQuery('body').append('<div class="mk_popup">');
  }
  jQuery.ajax({
    type: "GET",
    url: "/ajax.php",
    data: address,
    success: function(msg){
      jQuery('.mk_loader').remove();
      jQuery('.mk_popup').html(msg);
      mkPosition();
    }
  });
}