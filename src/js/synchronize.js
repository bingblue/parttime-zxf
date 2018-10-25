$(function () {
  // 同步课程table切换
  // calcTableHeight()
  $(".jq-xc-table li").on('click', function () {
    var $this = $(this);
    if (!$this.hasClass('active')) {
      $('.jq-xc-table li.active').removeClass('active')
      $this.addClass('active').parents('li').each(function(index, ele){
        $(ele).addClass('active')
      })
      $this.addClass('active').find('ul').each(function(index, ele){
        $(ele).find('li').eq(0).addClass('active')
      })
    }
    // calcTableHeight()
  })
  function calcTableHeight() {
    var $maxHeight = 0;
    $('.jq-xc-table li.active').each(function (index, ele) {
      $maxHeight = Math.max($maxHeight, $(ele).siblings().length+1)
    })
    $(".jq-xc-table").height($maxHeight*58+10)
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
  // 修改课程阶段、选择版本、课本、单元
  $("[data-target='#xgjieduan']").click(function(event){
    changeInputVal($(this))
  })
  $("[data-target='#xgjiaocai']").click(function(event){
    changeInputVal($(this))
  })
  $("[data-target='#xgkeben']").click(function(event){
    changeInputVal($(this))
  })
  $("[data-target='#xgdanyuan']").click(function(event){
    changeInputVal($(this))
  })
  function changeInputVal($this) {
    var name = $this.siblings('span').text()
    var dataTarget = $this.attr('data-target')
    console.log(name)
    var id = dataTarget.slice(1);
    $('#' + id).find('input').val(name)
  }
  // 单词列表-删除单词
  $('.jq-del-word').click(function () {
    var $word = $(this).parent().siblings().eq(1).text()
    console.log($word)
    swal({
      title: "确认删除单词【" + $word + "】吗？",
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
  });
  // 句子列表-删除句子
  $('.jq-del-sentence').click(function () {
    var $word = $(this).parent().siblings().eq(1).text()
    console.log($word)
    swal({
      title: "确认删除句子【" + $word + "】吗？",
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
  });
  /**
   * 增加词性词意
   */
  $('.jq-add-wordMean').click(function () {
    $('.jq-wordMean-demo').eq(0).clone().appendTo('.jq-wordMean')
  })
  /**
   * 编辑单词tab切换
   */
  $('.jq-xc-tab .xc-tab-head').on('click', 'li', function () {
    var $this = $(this),
      $left = $this.position().left,
      $index = $this.index()
    $this.siblings('.line').css('left', $left)
    $this.addClass('active').siblings().removeClass('active')
    $this.parent().siblings('.xc-tab-body').find('>li').eq($index).addClass('active').siblings().removeClass('active')
  })
  /**
   * 上传
   */
  $(".jq-fileinput-button").on('click', function () {
    $('.file').click()
  })
  /** 
   * 编辑句子、编辑课文
   * 增加一行输入框
   */
  $(".jq-sentence-addInput,.jq-test-addInput").on('click', function (event) {
    event.preventDefault()
    var $this = $(this)
    $this.before(addInput(10, '请输入', 'sentence'))
  });
  /**    
   * 课文编辑/默写填空添加一行input
   */
  $(".jq-test-mx").on('click', function (event) {
    event.preventDefault()
    var $this = $(this)
    $this.before(addInput(10, '请输入答案', 'blank'))
    return false;
  });
  /**
   * 添加一行输入框
   * @param {any} length 数量
   * @param {any} placeholder 提示语 
   * @param {any} name input name 属性
   * @returns {String} doom节点
   */
  function addInput(length, placeholder, name) {
    inputArray = []
    inputArray.push('<div>')
    for (let index = 0; index < length; index++) {
      inputArray.push("<div class='col-xs-1'>")
      inputArray.push('<input type="text" placeholder=' + placeholder + ' class="form-control" name="' + name + '"/>')
      inputArray.push("</div>")
    }
    inputArray.push('</div>')
    inputArray = inputArray.join('')
    return inputArray
  }

  // 课文编辑 删除句子
  $("body").on('click', '.jq-delete-text-ju', function() {
    $(this).closest('.form-group-box').remove()
    sortTextJu()
  })
  $(".jq-add-text-ju").click(function() {
    addTexTJu()
  })
  function sortTextJu() {
    $(".form-group-box").each(function(index, ele) {
      $(ele).find('label').eq(0).text(`第${index + 1}句`)
    })
  }
  function addTexTJu () {
  $(".jq-add-text-ju").before(`<div class="form-group-box">
    <div class="form-group col-xs-12">
      <label class="col-lg-1 control-label">第1句：</label>
      <div class="col-lg-11">
        <a class="btn btn-default jq-delete-text-ju">删除</a>
      </div>
    </div>
    <div class="form-group col-xs-12">
      <label class="col-lg-1 control-label xc-nowrap">请填写：</label>
      <div class="col-lg-11">
        <input type="text" class="form-control" placeholder="请输入英文句子" />
      </div>
    </div>
    <div class="form-group col-xs-12">
      <label class="col-lg-1 control-label">句意：</label>
      <div class="col-lg-11">
        <input type="text" class="form-control" placeholder="请输入句意" />
      </div>
    </div>
    <div class="form-group col-xs-12">
      <label class="col-lg-1 control-label">发音：</label>
      <div class="col-lg-11">
        <div class="fileinput-box">
          <span class="btn btn-default fileinput-button">
            <i class="fa fa-fw fa-upload"></i>
            <span>上传文件</span>
            <input type="file" class="file-ipt" name="files[]">
          </span>
          <p class="audio-type">支持扩展名：mp3</p>
        </div>
      </div>
    </div>
  </div>`)
  sortTextJu()
  }

  // 上传mp3
  $('body').on('change','.file-ipt',function(){
    upload(this)
  })
  function upload (target) {
    var files = Array.prototype.slice.call(target.files)
    console.log(files)
    files.forEach(function(item) {
      let file = item
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = function(e) {
        var str = "<div class='xc-audio'><audio src="+ e.target.result +" controls=''></audio>" +
        "<p><button type='reset' class='btn btn-warning cancel jq-auto-delete'><i class='fa fa-fw fa-times'></i><span>" + file.name + "</span></button></p></div>"
        $(target).closest('div').append(str)
        // $(target).closest('div').append(str).find('.audio-type').hide()
        // $('.fileinput-button').hide()
      }
    });
  }
  $("body").on('click','.jq-auto-delete', function() {
    var $this = $(this);
    $this.closest('.xc-audio').remove()
  })
})
