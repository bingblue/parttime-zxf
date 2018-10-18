$(function () {
  /**
   * 功能介绍,每个方法请写注释，按下面模板来写.
   * @author <作者>
   * @param {类型} 参数名 描述.
   * @param {string} name=alice 姓名(默认alice).
   * @param {object} option 配置信息.
   * @return {Number} 返回值描述.
   */
  comment = {
    init: function () {
      this.testNav()
      this.tableSwitch()
      this.toSentence()
      this.fullBlank()
      this.customRadio()
      this.clasProHover()
      this.intelTextNav()
      this.writeTextHeight()
      this.addSyncClass()
      this.addSyncBody()
      this.wordsAct()
      this.banner()
      this.select()
      this.audioPlay()
      this.reloadInput()
    },
    // input 宽度自适应
    reloadInput: function () {
      $('.xc-reload-input').on('keyup', function() {
        var $this = $(this);
        var $length = $this.val().length
        var maxLength = parseInt($this.attr('reloadLength') || 0, 10)
        if ($length > maxLength) {
          var $width = $length * 11 + 20
          $this.width($width).parent().width($width)
        }
      })
    },
    /**
     * 模拟下拉框
     */
    select: function () {
      $('.xc-head-select').on('click', function (event) {
        event.stopPropagation()
        var $this = $(this)
        if ($this.hasClass('select')) {
          $this.removeClass('select')
        } else {
          $this.addClass('select')
        }
      })
      $('.xc-head-select .xc-head-select-ul li').on('click', function () {
        var $this = $(this)
        if (!$this.hasClass('active')) {
          $this.addClass('active').siblings().removeClass('active')
          var $name = $this.parent().siblings('.name')
          $name.text($this.text())
          $name.attr('value', $this.attr('value'))
        }
      })
      $('body').on('click', function () {
        $('.xc-head-select').removeClass('select')
      })
    },
    /**
     * 幻灯
     */
    banner: function () {
      $('#xc-question').on('click', function () {
        $('.xc-banner').show()
      })
      var $index = 1
      var $items = $('.xc-banner .xc-banner-item')
      var $prv = $('.xc-banner .xc-banner-prv')
      var $next = $('.xc-banner .xc-banner-next')
      var $active = $('.xc-banner .xc-banner-btns .active')
      $('.xc-banner-marker,.xc-banner-close').on('click', function () {
        $(this).parents('.xc-banner').hide()
      })
      $prv.on('click', function () {
        prv()
      })
      $next.on('click', function () {
        next()
      })
      var $maxIndex = $items.length
      function next() {
        if ($index + 1 <= $maxIndex) {
          $index += 1
          changeIndex()
        }
      }
      function prv() {
        if ($index - 1 > 0) {
          $index = $index - 1
          changeIndex()
        }
      }
      function changeIndex() {
        $items.eq($index - 1).addClass('active').siblings().removeClass('active')
        $active.text($index)
      }
    },
    /**
     * 倒计时
     * @param {Object} ele 添加倒计时元素
     * @param {Number} second 设置倒计时秒数
     * @param {Function} fun 倒计时结束回调
     */
    endTime: function (ele, second, fun) {
      var $time = ele
      $time.attr('time', second)
      var timer = ''
      function start() {
        var time = Number($time.attr('time'))
        if (time) {
          $time.text(returnTime(time))
        } else {
          $time.text(returnTime(time))
          timer && clearInterval(timer)
          fun && fun()
          $time.addClass('end')
        }
      }
      start()
      timer = setInterval(function () {
        start()
        $time.attr('time', Number($time.attr('time')) - 1)
        if ($time.attr('time') <= 30) {
          $time.addClass('xc-red')
        }
      }, 1000)
      function returnTime(time) {
        return addZero(parseInt(time / 60)) + ':' + addZero(parseInt(time % 60))
      }
      function addZero(num) {
        if (num < 10) {
          return '0' + num
        } else {
          return num
        }
      }
    },
    addSyncBody: function () {
      $('.course-body .course-body-untiy').on('click', function () {
        var $this = $(this)
        if (!$this.hasClass('active')) {
          $(".course-body .active").removeClass('active')
          $this.addClass('active')
          var $index = $this.index()
          $('.course-body .course-body-box-item').eq($index).addClass('active').siblings().removeClass('active')
        }
      })
    },
    /**
     * 單詞表
     */
    wordsAct: function () {
      $('.xc-head-categories .radio').click(function () {
        var $this = $(this).find('.circle')
        if (!$this.hasClass('active')) {
          $this.addClass('active').parent().siblings().find('.circle').removeClass('active')
        }
      })
    },
    /**
     * 同步课程导航切换
     */
    addSyncClass: function () {
      $('.course-head-courses .course-head-course').hover(function () {
        var $this = $(this)
        if (!$this.hasClass('active')) {
          $this.addClass('active').siblings().removeClass('active')
        }
      })
    },
    /**
     * 作文高度自适应 和 范文切换
     */
    writeTextHeight: function () {
      $('#xc-writing').on('keyup', function () {
        this.style.height = 'auto'
        this.style.height = this.scrollHeight + 'px'
      })
      var $li = $('#writing-list .xc-writing-list-item')
      $li.on('click', function () {
        var $this = $(this)
        if (!$this.hasClass('active')) {
          var index = $this.index()
          $this.addClass('active').siblings().removeClass('active')
          $('#writing-list').siblings('.xc-writing-div').find('li').eq(index).addClass('active').siblings().removeClass('active')
        }
      })
    },
    intelTextNav: function () {
      var $navli = $('#intelText-classes .intelText-class.active')
      var $this = $navli
      if ($this.length) {
        $this.siblings('.intelText-line').css({ 'left': $this.position().left, 'width': $this.innerWidth() }).show()
      }
    },
    /**
     * 课程进度hover
     */
    clasProHover: function () {
      $('#class-pro').hover(
        function () {
          $(this).find('.course-list').show()
        },
        function () {
          $(this).find('.course-list').hide()
        }
      )
    },
    /**
     * 闯关答题
     */
    customRadio: function () {
      /**
       * 模拟单选框
       */
      $('.coustom-label.can .label').on('click', function () {
        var $this = $(this)
        if ($this.hasClass('active')) {
        } else {
          $this.addClass('active').parent().siblings().find('.label').removeClass('active')
          $this.find('input').prop('checked', true)
        }
        console.log($this.parent().parent().find('input:checked').val())
        return false
      })
      var $writeInput = $('.coustom-label .write-input')
      $writeInput.on('focus', function () {
        $(this).addClass('active')
      })
      $writeInput.on('blur', function () {
        $(this).removeClass('active')
      })
    },
    /**
     * 默写填空相关事件
     */
    fullBlank: function () {
      var $input = $('#readText-blank input')
      $input.on('focus', function () {
        var $this = $(this)
        $this.addClass('active').parent('.readText-blank-item').siblings().find('input').removeClass('active')
      })
      $input.on('blur', function () {
        $(this).removeClass('active')
      })
      $input.eq(0).focus()
    },
    /**
     * 看字组句页面事件
     */
    toSentence: function () {
      // input框背景切换
      var $input = $('#readText-write input')
      $input.on('focus', function () {
        var $this = $(this)
        $this.addClass('active').parent().siblings().find('input').removeClass('active')
      })
      $input.on('blur', function () {
        var $this = $(this)
        $this.removeClass('active')
      })
      $input.eq(0).focus()
      var $btn = $('#readText-write .readText-write-btn')
      $btn.on('click', function () {
        $input.val('').eq(0).focus()
      })
    },
    /**
     * 个人中心测试记录导航切换
     * @author xc
     */
    testNav: function () {
      $('#test-nav ul li').on('click', function () {
        var $li = $(this)
        var $index = $(this).index()
        var activeName = 'active'
        if ($li.hasClass(activeName)) {
          return false
        }
        $li.addClass(activeName).siblings().removeClass(activeName)
        $li.siblings('.line').css('left', $li.position().left)
        $('#test-box .test-item').eq($index).addClass(activeName).siblings().removeClass(activeName)
      })
    },
    /**
     * 单词表 隐藏全部，显示全部开关
     * @author xc
     */
    tableSwitch: function () {
      $('.xc-table .table-switch').on('click', function () {
        var $this = $(this)
        var $index = $this.parent().index()
        if ($this.hasClass('active')) {
          $this.removeClass('active')
          $this.find('.tit').text('隐藏全部')
          $this.parents('.xc-table').find('tbody tr :nth-child(' + ($index + 1) + ') span').css('display', 'inline')
        } else {
          $this.addClass('active')
          $this.find('.tit').text('显示全部')
          $this.parents('.xc-table').find('tbody tr :nth-child(' + ($index + 1) + ') span').css('display', 'none')
        }
      })
      $(".xc-table td").on('click', function() {
        var $span = $(this).find(">span");
        if ($span.is(':hidden')) {
          $span.show();
        } else {
          $span.hide();
        }
      })
    },
    /**
     * 音频播放
     */
    audioPlay: function () {
      function forMatTime(t) {
        return Math.floor(t/60)+":"+(t%60/100).toFixed(2).slice(-2)
      }
      function getTime(audio) {
        audio.oncanplay = function () {
          var duration = audio.duration
          $(audio).parent().find('.duration').text(forMatTime(duration))
        }
      }
      function getCurrentTime(audio) {
        var currentTime = audio.currentTime
        $(audio).parent().find('.currentTime').text(forMatTime(currentTime))
        $(audio).parent().find('.xc-proplay-inner').width((audio.currentTime / audio.duration)*100 + '%')
      }
      $(".audioMp3").each(function (index, ele) {
        getTime($(ele)[0])
        $(ele).parent().find('.tooglePlay').on('click',function() {
          var $this = $(this);
          if ($this.hasClass('play')) {
            $(ele)[0].play()
            $this.timer && clearInterval($this.timer)
            $this.timer = setInterval(function() {
              getCurrentTime($(ele)[0])
            }, 200)
            $this.removeClass('play').addClass('pause').attr('src', '../img/readText-play-active.png')
            $this.siblings('.tooglePause').attr("src", '../img/realText-zt.png')
          } else {
            $(ele)[0].pause()
            $this.timer && clearInterval($this.timer)
            $this.removeClass('pause').addClass('play').attr('src', '../img/readText-play.png')
            $this.siblings('.tooglePause').attr("src", '../img/realText-zt-active.png')
          }
          
        })
        $(ele).parent().find('.toogleloop').on('click', function () {
          var $this = $(this);
          if ($(this).hasClass('true')) {
            $this.removeClass('true').attr('src', '../img/readText-loop.png')
          } else {
            $this.addClass('true').attr('src', '../img/readText-loop-active.png')
          }
        })
        $(ele)[0].addEventListener('ended', function () {
          var $this = $(this).parent().find('.tooglePlay')
          if ($(this).parent().find('.toogleloop').hasClass('true')) {
            $(this)[0].currentTime = 0;
            $(this)[0].play();
            return;
          }
          $this.timer && clearInterval($this.timer)
          $this.removeClass('pause').addClass('play').attr('src', '../img/readText-play.png')
          $this.siblings('.tooglePause').attr("src", '../img/realText-zt-active.png')
      }, false);
      })
    }
  }
  comment.init()
})
