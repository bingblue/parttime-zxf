$(function () {
    $('.jq-xc-tab .xc-tab-head').on('click', 'li', function () {
      var $this = $(this),
          $left = $this.position().left,
          $index = $this.index()
      $this.siblings('.line').css('left', $left)
      $this.addClass('active').siblings().removeClass('active')
      $this.parent().siblings('.xc-tab-body').find('>li').eq($index).addClass('active').siblings().removeClass('active')
    });
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
    $('.jq-del-j').click(function(){
      swal({
        title: "确认删除该阶段吗？",
        text: "阶段下的全部课程都将被删除",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
      }, function (isConfirm) {
        if (isConfirm) {
          swal("删除成功", "success")
        }
      })
    })
    $('.jq-del-b').click(function(){
      swal({
        title: "确认删除该版本吗？",
        text: "版本下全部内容都将被删除",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
      }, function (isConfirm) {
        if (isConfirm) {
          swal("删除成功", "success")
        }
      })
    })
    $('.jq-del-k').click(function(){
      swal({
        title: "确认删除该课本吗？",
        text: "课本下的全部单元都将被删除",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
      }, function (isConfirm) {
        if (isConfirm) {
          swal("删除成功", "success")
        }
      })
    })
    $('.jq-del-d').click(function(){
      swal({
        title: "确认删除该单元吗？",
      //   text: "（默认密码：zxf888888）",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
      }, function (isConfirm) {
        if (isConfirm) {
          swal("删除成功", "success")
        }
      })
    })
    /**
     * 上传
     */
    $(".jq-fileinput-button").on('click', function () {
      $('.file').click()
    });
    // 听力测试 清空表单
    $('.jq-clear-form').on('click', function () {
      swal({
        title: "确认清空本页试题吗？",
      //   text: "（默认密码：zxf888888）",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "确认",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
      }, function (isConfirm) {
        if (isConfirm) {
          swal("清空成功", "success")
        }
      })
    })
    $('.jq-del-sj').click(function(){
      swal({
        title: "确认删除该试卷【试卷】吗？",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "删除",
        cancelButtonText: "取消",
        closeOnConfirm: false,
        closeOnCancel: true
      }, function (isConfirm) {
        if (isConfirm) {
          swal("删除成功", "success")
        }
      })
    })
    $(".jq-add-jz").on("click", function(event) {
      event.preventDefault()
      var formGroup = [],
          $this = $(this),
          $index = $this.siblings('.form-group').length
      formGroup.push("<div class='form-group'>")
        formGroup.push("<label class='col-lg-1 control-label'>" + ($index + 1) + "：</label>")
        formGroup.push("<div class='col-lg-11'>")
          formGroup.push("<input type='text' name='" + ('name' + ( $index + 1 )) + "' placeholder='请输入句子' class='form-control'>")
        formGroup.push("</div>")
      formGroup.push("</div>")
      $this.before(formGroup.join(''))
    })

    // 上传mp3
    $('body').on('change','.file-ipt',function(){
      upload(this)
    })
    function upload (target) {
      let file = target.files[0]
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        var str = "<div class='xc-audio'><audio src="+ e.target.result +" controls=''></audio>" +
        "<p><button type='reset' class='btn btn-warning cancel jq-auto-delete'><i class='fa fa-fw fa-times'></i><span>" + file.name + "</span></button></p></div>"
        $(target).closest('div').append(str).find('.audio-type').hide()
        $('.fileinput-button').hide()
      }
    }
    $("body").on('click','.jq-auto-delete', function() {
      var $this = $(this);
      $this.closest('.fileinput-box').find('.audio-type,.fileinput-button').show()
      $this.closest('.xc-audio').remove()
    })
 })