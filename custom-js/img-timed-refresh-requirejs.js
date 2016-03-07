(function () {
  if (typeof omsOnInit === 'function') {
    omsOnInit(doWork);
  } else {
    doWork();
  }

  function doWork() {
    require(['jquery'], function (jq) {
      function updateRefreshableImages() {
        if (jq('.img-timed-refresh').size() > 0) {
          jq('.img-timed-refresh').each(function () {
            var $img = jq(this);
            var imgSrc = $img.attr("src");
            var originalSrc = $img.data("src");
            var newSrc = imgSrc;
            var dateStr = "dtUpdate=" + new Date().getTime();
            if (originalSrc == null || originalSrc == undefined) {
              $img.data("src", imgSrc);
            }
            if (imgSrc.indexOf("dtUpdate") > 0) {
              newSrc = imgSrc.replace(/dtUpdate=\d*/, dateStr);
            } else {
              if (imgSrc.indexOf("?") > 0) {
                newSrc = imgSrc + "&" + dateStr;
              }
              else {
                newSrc = imgSrc + "?" + dateStr;
              }
            }
            $img.attr("src", newSrc);
          });
          setTimeout(updateRefreshableImages, 5000);
        }
      }
      updateRefreshableImages();
    });
  }
})();



