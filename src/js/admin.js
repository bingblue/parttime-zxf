$(function() {
    $('.jq-xc-tab .xc-tab-head').on('click', 'li', function () {
        var $this = $(this),
            $left = $this.position().left,
            $index = $this.index()
        $this.siblings('.line').css('left', $left)
        $this.addClass('active').siblings().removeClass('active')
        $this.parent().siblings('.xc-tab-body').find('>li').eq($index).addClass('active').siblings().removeClass('active')
    });
    $('.jq-admin-radio ul li').on('click', function() {
        var $this = $(this)
        if ($this.hasClass('active')) {
            $this.removeClass('active').siblings().addClass('active')
        } else {
            $this.addClass('active').siblings().removeClass('active')
        }
    })
    $('.jq-admin-reset').on('click', function() {
        var $this = $(this)
        var $parent = $this.parent().parent()
        var $td = $parent.find('td')
        var $code = $td.eq(0).text()
        var $name = $td.eq(5).text()
        var title = "确定重置运营【" + $code + "】【" + $name + "】的账户密码吗?"
        swal({
            title: title,
            text: "（默认密码：zxf888888）",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                swal('重置密码成功!', "success")
            }
        })
    })
    $('.jq-admin-toogle').on("click", function () {
        var $this = $(this)
        var isStop = $this.hasClass('stop')
        var $parent = $this.parent().parent()
        var $td = $parent.find('td')
        var $code = $td.eq(0).text()
        var $name = $td.eq(5).text()
        var title = isStop ? "确定停用运营账号【" + $code + "】【" + $name + "】吗？": "确定启用该教师账号吗？"
        var $message = isStop ? '停用账号成功!' : "启用账号成功!" 
        swal({
            title: title,
            //   text: "（默认密码：zxf888888）",
            showCancelButton: true,
            confirmButtonColor: "#DD6B55",
            confirmButtonText: "确定",
            cancelButtonText: "取消",
            closeOnConfirm: false,
            closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                if (isStop) {
                    $td.eq(2).removeClass('blue').text('停用')
                    $this.removeClass('stop').addClass('up').text('启用账号')
                } else {
                    $td.eq(2).addClass('blue').text('正常')
                    $this.removeClass('up').addClass('stop').text('停用账号')
                }
               
                swal($message, "success")
            }
        })
    })
    // 编辑权限
    $('.jq-power-toogle').on('click', function () {
        var $this = $(this)
        var $table = $this.parent().siblings('.table-admin')
        if ($this.hasClass('edit')) {
            $this.removeClass('edit').text('编辑权限')
            $table.removeClass('edit')
            console.log('保存请求')
        } else {
            $this.addClass('edit').text('保存')
            $table.addClass('edit')
        }
    })
    $(".jq-admin-edit td input").on('change', function() {
        var $this = $(this)
        var isChecked = $this.prop('checked')
        var $siblings = $this.closest('.checkbox').siblings()
        var index = $this.closest('td').index()
        var $th = $(".jq-admin-edit th:eq(" + index  + ")")
        if (isChecked) {
            $siblings.addClass('blue').text('有')
            if (checkAll(index)) {
                $th.find('input').prop('checked',true)
            }
        } else {
            $siblings.removeClass('blue').text('无')
                $th.find('input').prop('checked',false)
        }
    })
    function checkAll (num) {
        var $tr = $(".jq-admin-edit tbody tr")
        var ischeckAll = true;
        $tr.each(function (index, ele) {
            var isChecked = $(ele).find('td').eq(num).find('input').prop('checked');
            if (!isChecked) {
                ischeckAll = false
            }
        })
        return ischeckAll;
    } 
    $(".jq-admin-edit th input").on('change', function() {
        var $this = $(this)
        var isChecked = $this.prop('checked')
        var $siblings = $this.closest('.checkbox').siblings()
        var num = $this.closest('th').index()
        var $tr = $(".jq-admin-edit tbody tr")
            $tr.each(function (index, ele) {
                var $input = $(ele).find('td').eq(num).find('input')
                if (isChecked) {
                    $input.prop('checked', true).closest('.checkbox').siblings().addClass('blue').text('有')
                } else {
                    $input.prop('checked', false).closest('.checkbox').siblings().removeClass('blue').text('无')
                }
            })
    })
})