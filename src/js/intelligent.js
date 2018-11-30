$(function () {
  $('.jq-xc-tab .line').each(function(index, ele) {
    $(ele).css({width: $(ele).siblings('.active').innerWidth()})
})
$('.jq-xc-tab .xc-tab-head').on('click', 'li', function () {
    var $this = $(this),
        $left = $this.position().left,
        $index = $this.index()
    $this.siblings('.line').css({'left': $left, width: $this.innerWidth() + 'px' })
    $this.addClass('active').siblings().removeClass('active')
    $this.parent().siblings('.xc-tab-body').find('>li').eq($index).addClass('active').siblings().removeClass('active')
});
  // 同步课程table切换
  // calcTableHeight()
  $(".jq-xc-table li").on('click', function () {
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $this.addClass('active').siblings().removeClass('active')
    }
    // calcTableHeight()
  })
  function calcTableHeight() {
    var $maxHeight = 0;
    $('.jq-xc-table ul').each(function (index, ele) {
      if ($(ele).parent().hasClass('active')) {
        $maxHeight = Math.max($maxHeight, $(ele).height())
      }
    });
    $(".jq-xc-table").height($maxHeight)
  }
  $('.jq-del-j').click(function () {
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
  $('.jq-del-b').click(function () {
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
  $('.jq-del-k').click(function () {
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
  $('.jq-del-d').click(function () {
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
  // 修改、选择版本、课本、单元
  $("[data-target='#xgjiaocai']").click(function (event) {
    changeInputVal($(this))
  })
  $("[data-target='#xgkeben']").click(function (event) {
    changeInputVal($(this))
  })
  $("[data-target='#xgdanyuan']").click(function (event) {
    changeInputVal($(this))
  })
  function changeInputVal($this) {
    var name = $this.siblings('span').text()
    var dataTarget = $this.attr('data-target')
    console.log(name)
    var id = dataTarget.slice(1);
    $('#' + id).find('input').val(name)
  }
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
  $('.jq-del-sj').click(function () {
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
  $('body').on('click', '.jq-del-jz', function() {
    var $parent = $(this).closest('.form-group')
    $parent.remove()
    $(".jq-tm .jzteam").each(function(index, ele) {
      $(ele).empty();
      var $select = []
      $select.push('<option>请选择句子</option>')
      $(".jq-jz .form-group").each(function(index, ele) {
        $select.push(`<option>${((index + 1) > 9 ? (index + 1) : '0' +  (index + 1))}</option>`)
        $(ele).find('label.col-lg-1').html(`${((index + 1) > 9 ? (index + 1) : '0' +  (index + 1))}：`)
      })
      $(this).append($select.join(''))
    })
  })
  $('body').on('click', '.jq-del-tm', function() {
    $(this).closest('.form-group').remove()
    $(".jq-tm .form-group").each(function(index, ele) {
      $(ele).find('label.col-lg-1').html(`${((index + 1) > 9 ? (index + 1) : '0' +  (index + 1))}：`)
    })
  })
  $(".jq-add-jz").on("click", function (event) {
    event.preventDefault()
    var formGroup = [],
      $this = $(this),
      $index = $this.siblings('.form-group').length
    formGroup.push("<div class='form-group'>")
    formGroup.push("<label class='col-lg-1 control-label'>" +  (($index + 1) > 9 ? ($index + 1) : '0' +  ($index + 1)) + "：</label>")
    formGroup.push("<div class='col-lg-9'>")
    formGroup.push("<input type='text' name='" + ('name' + ($index + 1)) + "' placeholder='请输入句子' class='form-control'>")
    formGroup.push("</div>")
    formGroup.push(`<div class="col-lg-1">
    <a href="javascript:void(0)" class="btn btn-danger jq-del-jz">删除句子</a>
  </div>`)
    formGroup.push("</div>")
    $this.before(formGroup.join(''))
    // $(".jq-add-tm").click()
    setTimeout(function(){
      $('.jzteam').append("<option>" + (($index + 1) > 9 ? ($index + 1) : '0' +  ($index + 1))+"</option>")
    })
  })
  $(".jq-add-tm").on("click", function (event) {
    event.preventDefault()
    var formGroup = [],
      $this = $(this),
      $index = $this.siblings('.form-group').length
    formGroup.push("<div class='form-group'>")
    formGroup.push("<label class='col-lg-1 control-label'>" + (($index + 1) > 9 ? ($index + 1) : '0' +  ($index + 1))  + "：</label>")
    formGroup.push(`<div class="col-lg-2">
    <select name="account" class="form-control jzteam  m-b">
    </select>
  </div>`)
  formGroup.push(`<div class="col-lg-2">
  <select name="account" class="form-control m-b jq-tm-change">
    <option>修改</option>
    <option selected>增加</option>
    <option>删除</option>
  </select>
</div>
<label for="" class="control-label pull-left">在</label>
<div class="col-lg-2">
  <input type="text" placeholder="请输入" class="form-control">
</div>
<label for="" class="control-label pull-left">后增</label>
<div class="col-lg-2">
  <input type="text" placeholder="请输入" class="form-control">
</div><div class="col-lg-1">
<a href="javascript:void(0)" class="btn btn-danger jq-del-tm">删除题目</a>
</div></div>`)
    $this.before(formGroup.join(''))
    var $select = []
    $select.push('<option>请选择句子</option>')
    $(".jq-jz .form-group").each(function(index, ele) {
      $select.push(`<option>${((index + 1) > 9 ? (index + 1) : '0' +  (index + 1))}</option>`)
    })
    $('.jzteam:last').append($select.join(''))
  })
  $('body').on('change', '.jq-tm-change', function() {
   var $val = $(this).val()
   var $one = $(this).parent().siblings('.pull-left').eq(0)
   var $two = $(this).parent().siblings('.pull-left').eq(1)
   if ($val == '修改') {
     console.log('1')
    $one.html('&nbsp;&nbsp;&nbsp;')
    $two.text('改为')
   } else {
    $one.html('在')
    if ($val === '增加') {
      $two.text('后增')
    } else {
      $two.text('后删')
    }
   }
  })
  // 上传mp3
  $('body').on('change', '.file-ipt', function () {
    upload(this)
  })
  function upload(target) {
    let file = target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function (e) {
      var str = "<div class='xc-audio'><audio src=" + e.target.result + " controls=''></audio>" +
        "<p><button type='reset' class='btn btn-warning cancel jq-auto-delete'><i class='fa fa-fw fa-times'></i><span>" + file.name + "</span></button></p></div>"
      $(target).closest('div').append(str).find('.audio-type').hide()
      $('.fileinput-button').hide()
    }
  }
  $("body").on('click', '.jq-auto-delete', function () {
    var $this = $(this);
    $this.closest('.fileinput-box').find('.audio-type,.fileinput-button').show()
    $this.closest('.xc-audio').remove()
  })
  // 图片上传
  $(".jq-add-img,.img-group-item .btn").on('click', function () {
    $(this).siblings('.fileImg').click()
  })
  $('body').on('change','.fileImg',function(){
    uploadImg(this)
  })
  function uploadImg (target) {
    let file = target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(e) {
      $(target).siblings('img').attr('src', e.target.result).show()
      $(target).siblings('.btn').show();
      $(target).parent().find('.img-group-up').hide();
    }
  }
})