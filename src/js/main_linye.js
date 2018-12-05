'use strict'
$(function () {
  /**
   * 功能介绍,每个方法请写注释，按下面模板来写.
   * @author <作者>
   * @param {类型} 参数名 描述.
   * @param {string} name=alice 姓名(默认alice).
   * @param {object} option 配置信息.
   * @return {Number} 返回值描述.
   */
  clickCheck('tab-item', 'tab-selectd');
  clickCheck('search-name', 'search-selectd');
  clickCheck('page-item', 'page-selectd');
  clickCheck('class-type-item', 'certificate-selected');
  clickCheck('son-type-item', 'certificate-selected');
  progressColor(40, 56, 180);

  /**
   * 选项卡
   */
  $('.nag-tag').on('click', function () {
    var className = $(this).attr('name');
    $('.section').css('display', 'none');
    $('.' + className).css('display', 'block');
  })

  /**
   * 设置昵称
   */
  $('.edit-icon2').on('click', function () {
    $('.setNickname').show()
    $('.edit-icon2').hide()
    $('.jq-nickname').hide()
  })
  $('.btn-nickname').on('click', function () {
    $('.setNickname').hide()
    $('.edit-icon2').show()
    $('.jq-nickname').show().html($('.ipt-nickname').val())
  })
  /**
   * 05选项卡
   */
  $('.ranking-tag').on('click', function () {
    var classNames = $(this).attr('name');
    $('.ranking-section').css('display', 'none');
    $('.' + classNames).css('display', 'block');
  })
  /**
   * 点击选中
   * linye
   * @param {String} className  类名
   * @param {String} selectedName 选中之后的类名
   */
  function clickCheck (className, selectedName) {
    $('.' + className).on('click', function () {
      $(this).addClass(selectedName);
      $(this).siblings().removeClass(selectedName);
    })
  }
  /**
   * 进度条
   * @author <linye>
   * @param {int} hasRank 拥有的数量
   * @param {int} allRank 总共的数量
   * @param {int} widths 进度条的长度
   */
  function progressColor (hasRank, allRank, widths) {
    $('.progress-color').css('width', (hasRank / allRank) * 180 + 'px');
  }
  
  /**
   * 换密码
   */
  $('.sendCode').on('click',function(){
  	$('.step1').css('display','none');
  	$('.step2').css('display','block');
  	$('.progress-line1').eq(0).addClass('progress-line1-finish');
  	$('.progress-item').eq(0).addClass('progress-item-finish');
  	$('.progress-item').eq(1).addClass('progress-item-ing');
  	$('.progress-item span').eq(0).text('');
  	$('.progress-name').eq(1).addClass('progress-name-finish');
  })
  $('.testCode').on('click',function(){
  	$('.step2').css('display','none');
  	$('.step3').css('display','block');
  	$('.progress-line1').eq(1).addClass('progress-line1-finish');
  	$('.progress-item').eq(1).addClass('progress-item-finish');
  	$('.progress-item').eq(2).addClass('progress-item-ing');
  	$('.progress-item span').eq(1).text('');
  	$('.progress-name').eq(2).addClass('progress-name-finish');
  })
  $('.changeFinish').on('click',function(){
  	$('.progress-line1').eq(2).addClass('progress-line1-finish');
  	$('.progress-item').eq(2).addClass('progress-item-finish');
  	$('.progress-item span').eq(2).text('');
  })
  
  /**
   * 点击编辑
   */
  $('.edit-icon').on('click',function(){
  	$('.linye-personal-data .data-detail').css('display', 'none');
  	$('.linye-personal-data .data-detail2').css('display', 'block');
  })

  $('.linye-shopping .option-record').on('click',function(){
    $('.linye-shopping .obtain-histry-alert').css('display', 'flex');
  })
  $('.linye-shopping .buy-record').on('click',function(){
    $('.linye-shopping .buy-histry-alert').css('display', 'flex');
  })
  $('.linye-shopping .alert-close').on('click',function(){
    $('.linye-shopping .alert-layer').css('display', 'none');
  })
  $("#user-face").click(function() {
    $(this).siblings('input').click()
  })
  $("#user-face-file").change(function() {
    var file = this.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = function(e) {
      $('#user-face').attr('src', e.target.result)
    }
  })
})
