$(function(){
  // 奖励商城 兑换
  $('.mall-wrap .cansell').click(function(){
    // alert(1)
    swal({ 
      title: "购买商品",
      text: cansell(), 
      html: true,
      type: 'input',
      confirmButtonText: "确认",
      closeOnConfirm: false,
      allowOutsideClick: true
    }, function (isConfirm) {
      if(!$('#cansellform').parsley().validate()) return false
      const testmb = /^1\d{10}$/
      const mobile1 = $('.jq-mobile1').val()
      if(!(testmb.test(mobile1))){
        swal.showInputError("请输入正确的手机号码")
        return false
      } else {
        swal({ 
          title: "购买成功！",
          text: '我们会将商品尽快发出，你可以在购买记录中查看物流信息~', 
          confirmButtonText: "我知道了",
          allowOutsideClick: true
        })
      }
    })
  })
  // 奖励商城 兑换
  $('.mall-wrap .sellout').click(function(){
    return false
  })
  // 奖励商城 消费记录
  $('.jq-record').click(function(){
    swal({ 
      title: "购买历史",
      text: record(),
      html: true,
      allowOutsideClick: true
    })
  })
})
function cansell () {
  return ` <form id="cansellform" method="post" class="form-horizontal" action="#" data-parsley-validate="" novalidate="">
  <div class="panel panel-dark panel-flat">
     <div class="panel-body">
       <div class="row">
          <div class="col-xs-6">
            <div class="panel panel-info">
              <div class="panel-body">
                <img class="foot-img" src="../img/bg1.jpg" alt="商品图片">
              </div>
              <div class="panel-footer">
                <p class="title-p">商品名称</p>
                <p>
                  <span class="text-danger">￥ 1200学币</span>
                </p>
              </div>
            </div>
          </div>
          <div class="col-xs-6">
            <div class="form-group">
              <label class="control-label col-sm-5">选择数量：</label>
              <div class="col-sm-6">
                <input class="control-label" type="number" required>
              </div>
            </div>
            <span class="text-danger">库存： 999</span>
            <p>我的学币： 10000</p>
            <p>购买所需： 1200</p>
            <p>购买后剩余： 8800</p>
          </div>
       </div>
        <p class="title-p">收货信息</p>
        <div class="form-group">
           <label class="control-label col-sm-2">收件人：</label>
           <div class="col-sm-4">
            <input type="text" name="name" placeholder="请输入" required class="form-control">
          </div>
          <label class="control-label col-sm-2">收件人手机：</label>
           <div class="col-sm-4">
              <input type="text" name="name" placeholder="请输入" required class="form-control jq-mobile1">
          </div>
        </div>
        <p class="title-p">收货地址</p>
        <div class="form-group">
          <label class="control-label col-sm-2">省/市：</label>
          <div class="col-sm-4">
            <select name="" id="label" class="form-control">
              <option value="">杭州市/ 西湖区</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
          <label class="control-label col-sm-2">市/区：</label>
          <div class="col-sm-4">
            <select name="" id="label" class="form-control">
              <option value="">杭州市/ 西湖区</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
        <div class="form-group">
          <label class="control-label col-sm-2">详细地址：</label>
          <div class="col-sm-10">
            <input id="id-password" placeholder="请输入" type="text" name="sex" required class="form-control">
          </div>
        </div>
     </div>
  </div>
</form>`
}
function record () {
  return `<div class="table-responsive record-table">
  <table class="table table-bordered table-hover dataTable">
    <thead>
      <tr>
        <th>商品</th>
        <th>下单时间</th>
        <th>消耗学币</th>
        <th>是否发货</th>
        <th>运单</th>
      </tr>
    </thead>
    <tbody id="designerlist">
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>未发货</td>
        <td>--</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
      <tr>
        <td>商品名称</td>
        <td>2018-01-01 22:22:22</td>
        <td>99</td>
        <td>已发货</td>
        <td>顺丰速运：00000000000000000</td>
      </tr>
    </tbody>
  </table>
</div>  `
}