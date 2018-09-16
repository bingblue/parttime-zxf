$(function () {
    // 教务管理 - 班级管理 start
    $(".jq-curriculum-toogle").on('click', function() {
        var $this = $(this)
        if ($this.hasClass('fa-plus-square-o')) {
            $this.removeClass('fa-plus-square-o').addClass('fa-minus-square-o')
            $this.closest('.curriculum_body_one').siblings('.curriculum_body-child').show()
        } else {
            console.log("1");
            $this.removeClass('fa-minus-square-o').addClass('fa-plus-square-o')
            $this.closest('.curriculum_body_one').siblings('.curriculum_body-child').hide()
        }
    })
    $('.jq-curriculum-delete').click(function () {
        var $this = $(this)
        var name = $this.parent().siblings('.name').text()
        var className = $this.closest('.curriculum_body-child').siblings('.curriculum_body_one').find('.className').text()
        swal({
            title: "确定删除【" + className + "】的【" + name + "】课程吗？",
            //   text: "（默认密码：zxf888888）",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                var parent = $this.closest('.curriculum_body-child')
                $this.closest('.row').remove()
                parent.find('.row').each(function(index, ele) {
                    $(ele).find('.center').text(index + 1)
                })
                swal("删除成功", "success")
            }
        })
    })
    $(".jq-xc-table li").on('click', function () {
        var $this = $(this);
        if (!$this.hasClass('active')) {
            $this.addClass('active').siblings().removeClass('active')
        }
    })
    // 教务管理 - 班级管理 end
    // 学习任务 start
    $('.jq-xc-tab .xc-tab-head').on('click', 'li', function () {
        var $this = $(this),
            $left = $this.position().left,
            $index = $this.index()
        $this.siblings('.line').css('left', $left)
        $this.addClass('active').siblings().removeClass('active')
        $this.parent().siblings('.xc-tab-body').find('>li').eq($index).addClass('active').siblings().removeClass('active')
    });
    $('.jq-study-delete').click(function () {
        var $this = $(this)
        var name = $this.closest('tr').find('td:first').text()
        swal({
            title: "确定删除课程任务【" + name + "】吗？",
            //   text: "（默认密码：zxf888888）",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                $this.closest('tr').remove()
                swal("删除成功", "success")
            }
        })
    })
    // 学习任务 end
 })