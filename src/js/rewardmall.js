$(function () {
    $('.jq-xc-tab .xc-tab-head').on('click', 'li', function () {
        var $this = $(this),
            $left = $this.position().left,
            $index = $this.index()
        $this.siblings('.line').css('left', $left)
        $this.addClass('active').siblings().removeClass('active')
        $this.parent().siblings('.xc-tab-body').find('>li').eq($index).addClass('active').siblings().removeClass('active')
    });
 })