$(function(){
  // 修改
  $(".jq-edit").click(function(){
    swal({
      title: "创建/修改商品",
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
    swal({
      title: '',
      text: '确认取消该订单吗?',
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
  // 兑换
  $('.jq-send').click(function(){
    swal({
      title: "",
      text: '确认将该订单标记为完成兑换吗?',
      html: true,
      type: "success",
      showCancelButton: true,
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
  
})

function text () {
  return `<form method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
        <div class="form-group">
           <label class="control-label col-sm-5">商品名称：</label>
           <div class="col-sm-6">
            <input type="text" name="name" placeholder="请输入商品名称" required class="form-control">
          </div>
        </div>
        <div class="form-group">
           <label class="control-label col-sm-5">价格：</label>
           <div class="col-sm-6">
            <input type="number" name="price" placeholder="请输入价格" required class="form-control">
          </div>
        </div>
        <div class="form-group">
           <label class="control-label col-sm-5">库存：</label>
           <div class="col-sm-6">
            <input type="number" name="has" placeholder="请输入库存" required class="form-control">
          </div>
        </div>
        <span class="btn btn-success fileinput-button"><i class="fa fa-fw fa-plus"></i>
          <span>上传图片</span>
          <input type="file" name="files[]" multiple="">
        </span>
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
