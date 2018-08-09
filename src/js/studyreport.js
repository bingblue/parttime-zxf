
// Morris
// ----------------------------------- 

(function(window, document, $, undefined){

  $(function(){
    $('.datetimepicker').datetimepicker({
      icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-chevron-up',
        down: 'fa fa-chevron-down',
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash'
      },
      format: 'YYYY-MM-DD hh:ss'
    })
    $('.datetimepicker2').datetimepicker({
      icons: {
        time: 'fa fa-clock-o',
        date: 'fa fa-calendar',
        up: 'fa fa-chevron-up',
        down: 'fa fa-chevron-down',
        previous: 'fa fa-chevron-left',
        next: 'fa fa-chevron-right',
        today: 'fa fa-crosshairs',
        clear: 'fa fa-trash'
      },
      format: 'YYYY-MM-DD hh:ss'
    })
  

    if ( typeof Morris === 'undefined' ) return

    var chartdata = [
        { y: "2018-05-01", a: 0, b: 0 },
        { y: "2018-05-02", a: 0,  b: 0 },
        { y: "2018-05-03", a: 50,  b: 40 },
        { y: "2018-05-04", a: 75,  b: 65 },
        { y: "2018-05-05", a: 50,  b: 40 },
        { y: "2018-05-06", a: 0,  b: 0 },
        { y: "2018-05-07", a: 0, b: 0 }
    ]

    // var donutdata = [
    //   {label: "Download Sales", value: 12},
    //   {label: "In-Store Sales",value: 30},
    //   {label: "Mail-Order Sales", value: 20}
    // ]

    // Line Chart
    // ----------------------------------- 

    new Morris.Line({
      element: 'morris-line',
      data: chartdata,
      xkey: 'y',
      ykeys: ["a", "b"],
      labels: ["在线时长(分钟)", "有效时长(分钟)"],
      lineColors: [ '#23b7e5', '#f05050' ],
      resize: true
    })

    // Donut Chart
    // ----------------------------------- 
    // new Morris.Donut({
    //   element: 'morris-donut',
    //   data: donutdata,
    //   colors: [ '#f05050', '#fad732', '#ff902b' ],
    //   resize: true
    // })

    // Bar Chart
    // ----------------------------------- 
    new Morris.Bar({
      element: 'morris-bar',
      data: chartdata,
      xkey: 'y',
      ykeys: ["a", "b"],
      labels: ["在线时长(分钟)", "有效时长(分钟)"],
      xLabelMargin: 2,
      barColors: [ '#23b7e5', '#f05050' ],
      resize: true
    })

    // Area Chart
    // ----------------------------------- 
    // new Morris.Area({
    //   element: 'morris-area',
    //   data: chartdata,
    //   xkey: 'y',
    //   ykeys: ["a", "b"],
    //   labels: ["Serie A", "Serie B"],
    //   lineColors: [ '#7266ba', '#23b7e5' ],
    //   resize: true
    // })

  })

})(window, document, window.jQuery)
