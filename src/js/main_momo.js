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

  // 扇形进度图
  var mask = $('.mask')
  mask.each(function () {
    if ($(this).find('span').text() <= 50) {
      $(this).siblings('.pie_right').css('transform', 'rotate(' + ($(this).find('span').text() * 3.6) + 'deg)')
    } else {
      $(this).siblings('.pie_right').css('transform', 'rotate(180deg)')
      $(this).siblings('.pie_left').css('transform', 'rotate(' + (($(this).find('span').text() - 50) * 3.6) + 'deg)')
    }
  })

  // 选项卡
  function tab (navTagName, changeTagName, activeClassName) {
    navTagName.click(function () {
      navTagName.not($(this)).removeClass(activeClassName)
      $(this).addClass(activeClassName)
      changeTagName.removeClass(activeClassName)
      changeTagName.eq($(this).index()).addClass(activeClassName)
    })
  }
  tab($('.course_list_details_list_pointer'), $('.course_list_details_show'), 'active')
  tab($('.change_course_nav_list'), $('.change_course_details_table'), 'active')

  // close model box
  var close = $('.close')
  var modelBox = $('.course_center_wrap')
  close.click(function (e) {
    modelBox.hide()
  })
  $('.course-head-classes li:first,.main_title_renew').click(function(){
    modelBox.show()
  })
})
