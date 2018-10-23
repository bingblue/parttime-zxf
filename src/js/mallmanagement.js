$(function(){
  $(".jq-create").click(function(){
    swal({
      title: "创建商品",
      text: text(),
      html: true,
      type: "input",
      showCancelButton: true,
      confirmButtonColor: "#4b91ea",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
  // 修改
  $(".jq-edit").click(function(){
    var $this = $(this);
    var $tr = $this.closest('tr')
    var productName = $tr.find('td').eq(1).text()
    var price =  $tr.find('td').eq(4).text()
    var num =  $tr.find('td').eq(5).text()
    var imgSrc = $tr.find('td').eq(3).find('img').attr('src')
    swal({
      title: "修改商品",
      text: text(productName, price, num,imgSrc),
      html: true,
      type: "input",
      showCancelButton: true,
      confirmButtonColor: "#4b91ea",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("修改成功", "success")
      }
    })
  })
 
  // 删除
  $('.jq-del').click(function(){
    swal({
      title: '',
      text: '你确定要删除吗？',
      showCancelButton: true,
      type: 'error',
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("删除成功", "")
      }
    })
  })
  // 取消
  $('.jq-cancel').click(function(){
    var isTrue = true;
    $("#table-ext-1 [type='checkbox']").each(function(index, ele){
      if ($(ele).is(':checked')) {
        isTrue = false
        return false
      }
    })
    if (isTrue) {
      swal({
        title: '',
        text: '请先勾选订单？',
        type: 'error'
      })
      return false
    }
    swal({
      title: '',
      text: '确认取消该订单吗？',
      showCancelButton: true,
      type: 'error',
      confirmButtonText: "确认",
      cancelButtonText: "放弃取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("取消成功", "")
      }
    })
  })
  // 发货
  $('.jq-plsend').click(function(){
    var isTrue = true;
    $("#table-ext-1 [type='checkbox']").each(function(index, ele){
      if ($(ele).is(':checked')) {
        isTrue = false
        return false
      }
    })
    if (isTrue) {
      swal({
        title: '',
        text: '请先勾选订单？',
        type: 'error'
      })
      return false
    }
    swal({
      title: "发货",
      text: send(),
      html: true,
      type: "input",
      showCancelButton: true,
      confirmButtonColor: "#4b91ea",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("确认成功", "")
      }
    })
  })
  $('.jq-send').click(function(){
    swal({
      title: "发货",
      text: send(),
      html: true,
      type: "input",
      showCancelButton: true,
      confirmButtonColor: "#4b91ea",
      confirmButtonText: "确认",
      cancelButtonText: "取消",
      closeOnConfirm: false,
      closeOnCancel: true
    }, function (isConfirm) {
      if (isConfirm) {
        swal("确认成功", "")
      }
    })
  })
  // 上传图片
  $('body').on('change','.file-ipt',function(){
    upload(this)
  })
  
})
function upload (target) {
  let file = target.files[0]
  let reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = function(e) {
    $(target).parent('span').siblings('img').attr('src', e.target.result)
    $(target).siblings('img').css('display', 'inline-block')
    $(target).siblings('span').html('更换图片')
  }
}

function text (productName='', price ='', num ='', imgSrc = '') {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">商品名称：</label>
           <div class="col-sm-6">
            <input type="text" value="${productName}"  name="name" placeholder="请输入商品名称" required class="form-control">
          </div>
        </div>
        <div class="form-group">
           <label class="control-label col-sm-5">价格：</label>
           <div class="col-sm-6">
            <input type="number" value="${price}" name="price" placeholder="请输入价格" required class="form-control">
          </div>
        </div>
        <div class="form-group">
           <label class="control-label col-sm-5">库存：</label>
           <div class="col-sm-6">
            <input type="number" value="${num}" name="has" placeholder="请输入库存" required class="form-control">
          </div>
        </div>
        <span class="btn btn-success fileinput-button"><i class="fa fa-fw fa-plus"></i>
          <span>${!imgSrc ? '上传图片' : '更换图片'}</span>
          <input type="file" name="files[]" multiple="" class="file-ipt">
        </span>
        <img class="upload-img" src="${imgSrc}">
     </div>
  </div>
</form>`
}

function changeschool () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">选择学校：</label>
           <div class="col-sm-6">
            <select name="" id="label" class="form-control">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
     </div>
  </div>
</form>`
}
function send () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
    <div class="panel-body">
      <div class="form-group">
        <label class="control-label col-sm-5">运单号：</label>
        <div class="col-sm-6">
          <input type="number" name="has" placeholder="请输入运单号" required class="form-control">
        </div>
      </div>
     </div>
  </div>
</form>`
}
