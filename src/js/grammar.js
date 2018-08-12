$(function () {
    // 同步课程table切换
    calcTableHeight()
    $(".jq-xc-table li").on('click', function () {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active').siblings().removeClass('active')
        }
        calcTableHeight()
    })
    function calcTableHeight () {
     var $maxHeight = 0;
     $('.jq-xc-table ul').each(function(index, ele) {
          if($(ele).parent().hasClass('active')){
              $maxHeight = Math.max($maxHeight, $(ele).height())
          }
     });
     $(".jq-xc-table").height($maxHeight)
    }
    // 单选题、填空题删除按钮
    $('.jq-del-choice').click(function () {
        swal({
            title: "确定删除本题吗？",
            //   text: "（默认密码：zxf888888）",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                swal("删除成功", "success")
            }
        })
    })
 })