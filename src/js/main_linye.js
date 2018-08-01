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
  clickCheck('tab-item', 'tab-selectd')
  clickCheck('search-name', 'search-selectd')
  clickCheck('page-item', 'page-selectd')
  clickCheck('class-type-item', 'certificate-selected')
  clickCheck('son-type-item', 'certificate-selected')
  progressColor(40, 56, 180)

  /**
   * 选项卡
   */
  $('.nag-tag').on('click', function () {
    var className = $(this).attr('name')
    $('.section').css('display', 'none')
    $('.' + className).css('display', 'block')
  })
  /**
   * 点击选中
   * linye
   * @param {String} className  类名
   * @param {String} selectedName 选中之后的类名
   */
  function clickCheck(className, selectedName) {
    $('.' + className).on('click', function () {
      $(this).addClass(selectedName)
      $(this).siblings().removeClass(selectedName)
    })
  }
  /**
   * 进度条
   * @author <linye>
   * @param {int} has_rank 拥有的数量
   * @param {int} all_rank 总共的数量
   * @param {int} widths 进度条的长度
   */
  function progressColor(has_rank, all_rank, widths) {
    $('.progress-color').css('width', (has_rank / all_rank) * 180 + 'px')
  }

})
