(function () {
  if (typeof omsOnInit === 'function') {
    omsOnInit(function () {
      require(['jquery', 'oms/context'], function ($, Context) {
        doWork($, Context.siteLanguage);
      });
    });
  } else {
    doWork($, siteLanguage);
  }

  function doWork($, siteLanguage) {
    $.getJSON("/menu.json", function (data) {
      var checkExist = setInterval(function () {
        if ($('#main-menu-top').length) {
          clearInterval(checkExist);
          var pages = data.languages[siteLanguage.urlKey];
          for (var i in pages) {
            var page = pages[i];
            if (page.children != null && page.children != undefined) {
              var $navLi = $("#nav-li-page-" + page.id);
              var $navHref = $("#nav-a-page-" + page.id);
              //disable main link
              $navHref.attr("href", "#");

              $navLi.addClass("dropdown");
              var $ul = $("<ul/>", { "class": "dropdown-menu", "role": "menu" });
              for (var childIdx in page.children) {
                var child = page.children[childIdx];
                $ul.append(
                  $("<li/>", { "id": "nav-li-page-" + child.id })
                    .append(
                      $("<a/>", { "href": child.url, "id": "nav-a-page-" + child.id }).append(
                        child.title
                        )
                      ))
              }
              $navLi.append($ul);
            }
          }
        }
      }, 50);
    });
  }
})();

