$(function () {
    $('.jq-xc-tab .xc-tab-head').on('click', 'li', function () {
        var $this = $(this),
            $left = $this.position().left,
            $index = $this.index()
        $this.siblings('.line').css('left', $left)
        $this.addClass('active').siblings().removeClass('active')
        $this.parent().siblings('.xc-tab-body').find('>li').eq($index).addClass('active').siblings().removeClass('active')
    });
    // 学校列表 重置密码
    $('.jq-reset-pw').click(function(){
        swal({
        title: "确认重置学校 【学校名】的校长账户密码吗？",
        text: "（默认密码：zxf888888）",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确认重置",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
        }, function (isConfirm) {
        if (isConfirm) {
            swal("修改成功", "success")
        }
        })
    })
})