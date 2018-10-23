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
    // 权限更改切换
    $('.jq-power-conter li').on('click', function() {
        var $this = $(this),
            $index = $this.index()
        if (!$this.hasClass('active')) {
            $this.addClass('active').siblings().removeClass('active')
            changeBody($index)
        }
        function changeBody (index) {
            $('.jq-power-body>ul').eq(index).addClass('active').siblings().removeClass('active')
            reviewAll()
        }
    })
    $('.jq-power-all').on('change', function() {
        var ischeck = $(this).prop('checked');
        if (ischeck) {
            $('.jq-power-body .active .pull-right').prop('checked', true)
        } else {
            $('.jq-power-body .active .pull-right').prop('checked', false)
        }
    })
    $('.jq-power-body li .pull-right').on('change', function() {
        reviewAll()
    })
    function reviewAll () {
        var checkAll = true;
        $('.jq-power-body .active .pull-right').each(function(index, ele) {
            var ischeck = $(ele).prop('checked')
            if (!ischeck) {
                checkAll = false;
                return false;
            }
        })
        if (checkAll) {
            $('.jq-power-all').prop('checked', true)
        } else {
            $('.jq-power-all').prop('checked', false)
        }
    }
    reviewAll()

    // 学校辖区
    $(".province-item-1").ProvinceCity();
    $.each( citydatalist , function(index,data){
	    $('#provinceSelect').append("<option value='"+data.id+"'>"+data.name+"</option>");
	});
    $('body').on('click', '.jq-delete-xiaqu', function(){
        var $this = $(this)
        swal({
        title: "确认删除此辖区吗？",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确认重置",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
        }, function (isConfirm) {
            if (isConfirm) {
                swal("删除成功", "success")
                $this.closest('.form-group').remove();
            }
        })
    })
    $('.jq-add-xiaqu').click(function() {
        var className = 'province-itemi-' + new Date().getTime()
        var $div = $('<div class="' + className +' form-group" province="310000" city="310100"></div>')
        $(this).closest('.form-group').before($div)
        $('.' + className).ProvinceCity();
    })
})