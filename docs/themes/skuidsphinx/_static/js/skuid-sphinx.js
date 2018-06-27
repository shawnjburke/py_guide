var searchHighlight;
var latestVer;
var desktopSize = true;
var mobileGlobal = false;
// Mobile global TOC functions
var expandGlobalTOC = function() {
  $('.mobile-global-toc').addClass('expand');
  $('.mobile-global-toc').slideDown(300)
  $('#g-closedMenu').show()
  $('#g-openMenu').hide()
}
var collapseGlobalTOC = function() {
  $('#mobile-global #globaltoc').removeClass('expand');
  $('#mobile-global #globaltoc').slideUp(300)
  $('#g-closedMenu').hide()
  $('#g-openMenu').show()
}
var elemsToShiftForMobileNav = '#landing-main, #docs-and-search-bar, #docs-and-search-bar h1, #landing-search h3, #main,.navbar-brand, .navbar-search-form, .breadcrumb-nav, #mobile-global'
var openMobileNav = function() {
  $('.navbar-nav').addClass('mobile-nav')
  $(elemsToShiftForMobileNav).addClass('mobile-nav-active')
  $('#openmobilenav').attr('style','display:none;cursor:pointer').attr('aria-hidden','true')
  $('#closemobilenav').attr('style','display:block;cursor:pointer').attr('aria-hidden','false')
}
var closeMobileNav = function(){
  collapseGlobalTOC()
  $('.navbar-nav').removeClass('mobile-nav')
  $(elemsToShiftForMobileNav).removeClass('mobile-nav-active')
  $('#closemobilenav').attr('style','display:none;cursor:pointer').attr('aria-hidden','true')
  $('#openmobilenav').attr('style','display:block;cursor:pointer').attr('aria-hidden','false')
}

var moveSideBars = function() {
  if (!desktopSize) {
    $('#page-buttons').appendTo('.navbar-nav')
    $('#mobile-local').insertAfter('#main h1 .headerlink')
    $('.sidebar-global').appendTo('#mobile-global')
  } else {
    $('#page-buttons').appendTo('#localtoc')
    $('.sidebar-local').insertBefore('#main')
    $('.sidebar-global').prependTo('#page-container')
  }
}
var moveSearchBar = function() {
 if (!desktopSize) {
    $('.navbar-search-form').insertAfter($('.navbar-brand'))
    $('#searchbar-icon').insertAfter('.navbar-brand')
    $(".navbar-search-form").removeClass('hide')
  } else {
    if ($('#landing-main').length == 1) {
      $('.navbar-search-form').appendTo($('#landing-search'))
    } else {
        $('.navbar-search-form').appendTo($('#docs-and-search-bar .nav-container'))
      }
    $('#searchbar-icon').prependTo('.navbar-search-form')
    $('.navbar-search-form').appendTo($('#docs-and-search-bar .nav-container'))
    $(".navbar-search-form").removeClass('hide')
 }
}
var toggleSearchBar = function() {
  $(".navbar-search-form").animate({width:'toggle'});
  if ($('#searchbar-toggle').attr('aria-expanded') == false){
    $('#searchbar-toggle').attr('aria-expanded', 'true')
  } else {
    $('#searchbar-toggle').attr('aria-expanded', 'false')
  }
}
$( document ).ready(function() {
  // Determine active TOC
  try {
    var activeSection = $('.current').not('.toctree-l1 > ul.current').not('a');
    if(activeSection.last().children('ul').length){activeSection.last().children('ul').addClass('toc-active')} else {activeSection.last().parent().addClass('toc-active')}
  } catch(e){}
  // Embed Font Awesome CDN
  var scriptSource = 'https://use.fontawesome.com/685baec918.js';
  var scriptElem = document.createElement('script');
  scriptElem.type = 'text/javascript';
  scriptElem.src = scriptSource;
  document.head.appendChild(scriptElem);
  // Replace any fa-icon roles
  $('.fa-icon').each(function(){
    $(this).html('<i class="fa ' + $(this).html() + '" aria-hidden="true"></i>')
  })

  // Temp index fix
  $('a').each( function(a) {
    var minusIndex = this.href.replace(/index.html/i, '')
    $(this).attr('href', minusIndex)
  })
  // Lightbox
  // Show proper cursor only if img
  $('.reference.internal').has("img").hover(function(){
    $(this).css("cursor", "zoom-in")
  });
  // Open Lightbox
  $('.reference.internal').has("img").on('click', function(e) {
    e.preventDefault();
    var image = $(this).attr('href');
    $('html').addClass('no-scroll');
    $('body').append('<div class="lightbox-opened"><img src="' + image + '"></div>');
  });

  // Close Lightbox
    $('body').on('click', '.lightbox-opened', function() {
    $('html').removeClass('no-scroll');
    $('.lightbox-opened').remove();
  });

  // Cards
  $('.card').hover(function() {
    $(this).addClass('card-hover')
    $(this).css("cursor", "pointer")
   }, function() {$(this).removeClass('card-hover') })
  $('.card').click(function() {
    window.location=$(this).find('a').attr('href');
    return false;
  })
  getVersions()

  // IMG style
  document.querySelectorAll('img').forEach(function(e) {e.removeAttribute('style');})
  //headerlinks
  var linkIcon = '<i class="fa fa-link" aria-hidden="true"></i>'
  document.querySelectorAll('.headerlink').forEach(function(e){e.innerHTML = linkIcon; e.setAttribute('title','Copy link to section'); e.setAttribute('onclick', 'copyText(this, this.href)');})
  // Search highlighting
  if (window.location.href.includes('highlight=')){
    searchHighlight = true
    $('#searchToggle').attr('style','display:inline-block');
  }
  //Quick find
  if (document.querySelector('#quickfind')) {$('#main, .g-menu-btn').click(function() {
    if ($('#quickfind').val().length == 0) {
      $('#globaltoc').children('ul').not('.current').hide()
      $("[class^='toctree']").not('.current').children('.toc-collapsible-btn').each(function() {
        tocTarget = this;
        tocCollapse();})
      }
    }
  )}
  ////////////////
  // Mobile TOC//
  ///////////////
  // Close mobile nav if user clicks into body
  $('#app > .container, .navbar-search-form, #landing-main').click(function(){
    if($('#main, #landing-main').hasClass('mobile-nav-active')){closeMobileNav()}
    })
  $(window).resize(function() {
    if ($(window).width() >= 1024) {
      if (!mobileGlobal) {
        expandGlobalTOC()
        mobileGlobal = true
      }
    }
    if ($(window).width() < 1024) {
      if (mobileGlobal) {

        collapseGlobalTOC()
        mobileGlobal = false
      }
    }
    if ($(window).width() >= 768) {
      if (!desktopSize) {
        desktopSize = true;
        closeMobileNav()
        moveSearchBar()
      }
    }
    if ($(window).width() < 768) {
      if (desktopSize) {
        desktopSize = false;
        moveSearchBar()
      }
    }
  })
  $('.g-menu-btn').click(function(){
    if ($('#mobile-global #globaltoc').hasClass('expand')){
        collapseGlobalTOC();
      } else {
        expandGlobalTOC();
      }
    })
  // Mobile local TOC functions
  $('#mobile-local #localtoc').children().not('#page-buttons').slideToggle(0);
  $('.menu-btn').click(function(){
    if ($('#mobile-local #localtoc').hasClass('expand')){
          $('#mobile-local #localtoc').removeClass('expand');
          $('#mobile-local #localtoc').children().not('#page-buttons').slideToggle(300);
          $('#closedMenu').show()
          $('#openMenu').hide()
                        } else {
          $('#mobile-local #localtoc').addClass('expand');
          $('#mobile-local #localtoc').children().not('#page-buttons').slideToggle(300);
          $('#closedMenu').hide()
          $('#openMenu').show()
        }
      })
  // Hide empty TOCs on desktop
  if ($('ul.current > li > ul').children().length == 0) {
    $('ul.current > li > ul').hide();
  }
  // Hide empty mobile global TOC if no children
  if ($('ul.current').children().length == 0){
    $('.g-menu-btn').hide();
  }
  // Hide empty mobile slider menus
  if ($('#mobile-local #localtoc > ul > li').children().length == 1) {
    $('#mobile-local #localtoc > ul > li').hide();
    $('#mobile-local #localtoc-btn').hide();
  }
  // Hide mobile local TOC if no items besides title
  if ($('#mobile-local #localtoc').find('li').length <= 1) {
    $('#mobile-local').hide()
  }

  // Constructors
  $('.property').siblings('.descclassname').show()
  $('.property').hide()

  /////////////////////////
  // Expandable sections //
  /////////////////////////

  // Check for collapsible signaler
  $(':header:contains("[[]]")').html(function (i, t) {
    $(this).addClass('collapsible');
    return t.replace('[[]]', '<span class="hidden"> </span>');
  })
  $('.collapsible').addClass('collapsed');
  $('.collapsible').attr('aria-expanded','false')
  $('.collapsible').siblings().slideToggle(0);
  // Remove signaler from references—toc and in main
  $('.reference:contains("[[]]")').html(function (i, t) {
    return t.replace('[[]]', '<span class="hidden"> </span>');
  })

  // Make it clickable
  $('.collapsible').click( function() {
    if ($(this).hasClass('collapsed')){
      $(this).removeClass('collapsed');
      $(this).attr('aria-expanded','true')
      $(this).siblings().slideToggle(300);
      $("span[id]").attr('style','display: none;')
      $(this).siblings().not('span').wrapAll('<div class="colsection"></div>');
      $(this).after($(this).siblings(".colsection"));
    } else {
      $(this).addClass('collapsed');
      $(this).attr('aria-expanded','false')
      $(this).siblings('.colsection').children().slideToggle(300);
      $("span[id]").attr('style','display: none;')
      $(this).siblings('.colsection').children().unwrap();
    }
  });
  // init
  $('.ifin:contains("[[]]")').html(function (i, t) {
    $(this).parent().addClass('ifin collapsible-ifin');
    var ifin = $(this).text().replace('[[]]','')
    $(this).parent().text(ifin)
  })
  $('.collapsible-ifin').addClass('collapsed');
  $('.collapsible-ifin').attr('aria-expanded','false')
  $('.collapsible-ifin').next('blockquote').slideToggle(0);

  // click
  $('.collapsible-ifin').click( function() {
    if ($(this).hasClass('collapsed')){
      $(this).removeClass('collapsed');
      $(this).attr('aria-expanded','true')
      $(this).next('blockquote').slideToggle(300);
    } else {
      $(this).addClass('collapsed');
      $(this).attr('aria-expanded','false')
      $(this).next('blockquote').slideToggle(300);
    }
  });
  // Keyboard navigation for collapsible sections
  $(".collapsible").attr("tabindex", "0");
  $(".collapsible").on("keydown", function(e){
    if(e.which === 13){
      $(this).trigger("click");
    }
  });
  // Keyboard navigation for collapsible sections
  $(".collapsible-ifin").attr("tabindex", "0");
  $(".collapsible-ifin").on("keydown", function(e){
    if(e.which === 13){
      $(this).trigger("click");
    }
  });

  $('.show-all-child-sections').attr("role","button").attr("aria-pressed","false").attr("tabindex","0").attr("onclick","toggleChildSections(event)").attr("onKeyPress","expandChildSections(event)")
  // Remove unneeded TOC 1 button
  //$('li.toctree-l1 > button').remove()
  //$('li.toctree-l1 > a').remove()
  // Unhide section if user is referred its anchor
  function unhideCollapsed()
  {
    try {
    var anchorName = document.location.hash.substring(1);
    var collapsedAnchor = $("[id=" + anchorName + "]").children(".collapsed");
    $(collapsedAnchor).removeClass('collapsed');
    $(collapsedAnchor).attr('aria-expanded','true');
    $(collapsedAnchor).siblings().slideToggle(300);
    $("span[id]").attr('style','display: none;');
    $(collapsedAnchor).siblings().wrapAll('<div class="colsection"></div>');
    $(collapsedAnchor).after($(collapsedAnchor).siblings(".colsection"));
    } catch (e) {}
    try {
      var anchorName = document.location.hash.substring(1);
      var collapsedAnchor = $("[id=" + anchorName + "]").siblings(".collapsed");
      $(collapsedAnchor).removeClass('collapsed');
      $(collapsedAnchor).attr('aria-expanded','true');
      $(collapsedAnchor).siblings().slideToggle(300);
      $("span[id]").attr('style','display: none;');
      $(collapsedAnchor).siblings().wrapAll('<div class="colsection"></div>');
      $(collapsedAnchor).after($(collapsedAnchor).siblings(".colsection"));
    } catch (e) {}
  }
  unhideCollapsed();
  // Unhide section if user changes hash in page
  $(window).on('hashchange', function(e){
   unhideCollapsed();
  });

  //////////////////////////
  // Guides dropdown menu //
  //////////////////////////

  $(".nav-dropdown").on("keydown", function(e){
    if(e.which === 13){
      $(this).toggleClass("showdrop");
      $('.nav-sub-menu').attr("aria-hidden", function(index, attr) {return attr == "true" ? "false" : "true"});
      $('.nav-sub-menu', this).toggle();
    }
  });
  // Guides dropdown
  $("li.nav-dropdown").hover(function() {
    $(this).addClass("showdrop")
    $('.nav-sub-menu').attr("aria-hidden", "false")
    $(".nav-sub-menu").show();
  }, function() {
    $('.nav-sub-menu').attr("aria-hidden", "true")
    $(this).removeClass("showdrop");
    $(".nav-sub-menu").hide()
  });
  // toc Nav
  function tocCollapse() {
    $(tocTarget).addClass('collapsed');
    $(tocTarget).attr('aria-expanded','false')
    $(tocTarget).siblings('ul').slideUp(slideTime);
  }
  function tocOpen() {
    $(tocTarget).removeClass('collapsed');
    $(tocTarget).attr('aria-expanded','true')
    $(tocTarget).siblings('ul').children('li').show();
    $(tocTarget).siblings('ul').slideDown(slideTime);
  }
  $("[class^='toctree']").has('ul').prepend("<button class=\"toc-collapsible-btn collapsible collapsed\" type=\"button\"></button>")
  slideTime = 0
  tocTarget = "#globaltoc .toc-collapsible-btn"
  tocCollapse()
  tocTarget = "#globaltoc .current > .toc-collapsible-btn"
  tocOpen()
  slideTime = 200
  $('.toc-collapsible-btn').click(function() {
    tocTarget = this
    if ($(this).hasClass('collapsed') == true) {
      tocOpen();
    } else {
      tocCollapse();
    }
  })
  // TOC button color set
  $("[class^='toctree']").each(function() {
    if ($(this).css('background-color') == "rgb(255, 255, 255)") {
      $(this).find('.toc-collapsible-btn').css('color','#098297')}
  })
  // Quick find
  var setDisplayToContents = function(){$(".toctree-l1").css('display','contents');
      $("#globaltoc ul").css('display','contents');}
  $('#quickfind').click(function() {
     if ($('#quickfind').val().length === 0) {
      $('#globaltoc').find('*').not('.g-menu-btn').not('#globaltoc > ul').not('.toctree-l1').not('.toc-collapsible-btn').not('#g-closedMenu').not('#g-openMenu').show();
      setDisplayToContents()
      $('.toc-collapsible-btn').each(function () {
        tocTarget = this;
        tocOpen();
      })
    }
  })
  $('#quickfind').keydown(function() {
    $('.toc-collapsible-btn').each(function () { // Reopen collapsed sections so user understands why searches appear within them
        tocTarget = this;
        slideTime = 0;
        tocOpen();
        slideTime = 200;
      })
  })
  $('#quickfind').keyup(function() {
    var findFor = this.value.toLowerCase();
    $('#globaltoc .reference').each(function() {
      var itemLC = $(this).text().toLowerCase();
      (itemLC.indexOf(findFor) > -1) ? $(this).parents().not('.toctree-l1').show() : $(this).parent().hide();
      setDisplayToContents()
    })
  })
  // Check page buttons
  if (window.location.href.includes('search.html')) {$('#page-buttons').remove()}
  if (document.querySelectorAll('#main .collapsible, #main .collapsible-ifin').length > 1) {$('#showAll').attr('style','display:inline-block;');$('#hideAll').attr('style','display:inline-block;')}
  // Remove unneeded TOC 1 button
  $('#globaltoc > ul.current > li > button').remove()
  // Fix code literals that overflow
  $('code.literal').parent('p').css('overflow','auto')
  // Check window size on load
  $(window).on("load", function(){
    collapseGlobalTOC()
    $('#mobile-local').insertAfter('#main h1 .headerlink').removeClass('hide')
    if ($(window).width() >= 768) {
      desktopSize = true
      moveSearchBar()
    }
    if ($(window).width() < 768) {
      desktopSize = false
      moveSearchBar()
    }});
  })
// Additional functions
function toggleChildSections(event){
    toggleButton(event.target);
  }
  function toggleButton(element) {
    var pressed = (element.getAttribute("aria-pressed") === "true");
    element.setAttribute("aria-pressed", !pressed);
    var target = $(element).parent().siblings()
    if (!pressed){
      $(element).text('Hide all sections')
      expandAll(target)
    } else{
      $(element).text('Show all sections')
      collapseAll(target)
    }
  }
function expandAll(target){
  if (!target) {var target = '#main'}
  $(target).find('.collapsible').siblings('.colsection').children().unwrap();
  $(target).find('.collapsible').siblings().slideDown(300);
  $(target).find('.collapsible').removeClass('collapsed');
  $(target).find('.collapsible').attr('aria-expanded','true')
  $(target).find('.collapsible').each(function addColSecAll(){$(this).siblings().wrapAll('<div class="colsection"></div>')});
  // ifins
  $(target).find('.collapsible-ifin').removeClass('collapsed');
  $(target).find('.collapsible-ifin').attr('aria-expanded','true')
  $(target).find('.collapsible-ifin').next('blockquote').slideDown(300);
}

function collapseAll(target){
  if (!target) {var target = '#main'}
  $(target).find('.collapsible').siblings('.colsection').children().slideToggle(300);
  $(target).find("span[id]").attr('style','display: none;')
  $(target).find('.collapsible').siblings('.colsection').children().unwrap();
  $(target).find('.collapsible').addClass('collapsed');
  $(target).find('.collapsible').attr('aria-expanded','false')
  // ifins
  $(target).find('.collapsible-ifin').addClass('collapsed');
  $(target).find('.collapsible-ifin').attr('aria-expanded','false')
  $(target).find('.collapsible-ifin').next('blockquote').slideUp(300);
}

function versionPick(p1){
  var clickedVer = p1.textContent;
  var hostAndVer = "docs.skuid.com\/"
  var fullURL = hostAndVer.concat(clickedVer,"\/")
  var siteVer = new RegExp("docs.skuid.com\/[^\/]+\/")
  window.location.href = document.location.href.replace(siteVer, fullURL)
}
function goToLatest(){
  var clickedVer = 'latest';
  var hostAndVer = "docs.skuid.com\/"
  var fullURL = hostAndVer.concat(clickedVer,"\/")
  var siteVer = new RegExp("docs.skuid.com\/[^\/]+\/")
  window.location.href = document.location.href.replace(siteVer, fullURL)
}
var goToLatestElem = document.getElementById('goToLatest')
if(goToLatestElem){goToLatestElem.onclick = goToLatest}
var getVersions = function() {
    try {
        var versions;
        function reqListener () {
        versions = (this.responseText.split('\n'));
        }
        var vUrl = "/versions.txt"
        var vReq = new XMLHttpRequest();
        vReq.addEventListener("load", reqListener);
        vReq.open("GET", vUrl);
        vReq.onload = function (e) {
        if (vReq.readyState === 4) {
            if (vReq.status === 200) {
                latestVer = versions[0]
                versions.forEach(function(vNum){
                  var vItem = document.createElement('a')
                  vItem.className = 'dropdown-item'
                  vItem.setAttribute('href','#')
                  vItem.setAttribute('onclick','versionPick(this)')
                  vItem.innerText = vNum
                  try {
                      $('.dropdown-menu').append(vItem)
                    } catch(e){}
                })
              versionCheck()
            } else {
              console.error(vReq.statusText);
            }
          }
        };
        vReq.send();
      }
      catch(e){}
};
var versionCheck = function() {
  var verNum = $('#verNum')[0].innerText
  if(verNum != latestVer){
    isLatest = false;
    $($('#version-warning')[0].innerHTML).prependTo('#main')
    if(document.querySelector('#welcome-to-skuid-docs')){$('.version-warning-box').css('margin-top','48px')} // If on landing page, avoid navbar
  } else {
    isLatest = true;
  }
}
var copyText = function(e, attr) {
  var copyBlock = document.createElement('input');
  copyBlock.setAttribute('display','none');
  copyBlock.value = attr;
  document.querySelector('body').appendChild(copyBlock);
  copyBlock.select();
  document.execCommand("Copy");
  copyBlock.remove();
}
var toggleSearchHighlighting = function() {
  if (searchHighlight){
    document.querySelectorAll('dt:target,.highlighted').forEach(function(e){$(e).addClass('transparent-bg')});
    $('#searchToggle').text("Search Term Highlighting: Off")
    searchHighlight = false;
  } else
  {
    document.querySelectorAll('dt:target,.highlighted,.transparent-bg').forEach(function(e){$(e).removeClass('transparent-bg')});
    $('#searchToggle').text("Search Term Highlighting: On")
    searchHighlight = true;
  }
}
var openedSections;
var cmdFOn;
var saveSectionsAndExpandAll = function(){
  openedSections = $('#main .collapsible').not('.collapsed');
  expandAll();
  cmdFOn = 1
}
var closeSectionsAndExpandSaved = function(){
  collapseAll();
  openedSections.click();
  cmdFOn = 0;
}
$(document).on("keydown", function (e) { if (e.keyCode == 70 && e.ctrlKey || e.keyCode == 70 && e.metaKey) {
  saveSectionsAndExpandAll();
} });