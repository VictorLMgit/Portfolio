$( document ).ready(function() {

    // Init
    $('.home').hide().fadeIn(1000)


    // Progress bar circle
    let containerA = document.getElementById("circleA");
  
    let circleA = new ProgressBar.Circle(containerA, {
  
      color: '#65DAF9',
      strokeWidth: 6,
      duration: 1400,
      from: { color: '#aaa'},
      to: { color: '#65DAF9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 100);
        circle.setText(value);
  
      }
  
    });
  
    let containerB = document.getElementById("circleB");
  
    let circleB = new ProgressBar.Circle(containerB, {
  
      color: '#65DAF9',
      strokeWidth: 6 ,
      duration: 1600,
      from: { color: '#aaa'},
      to: { color: '#65DAF9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 100);
        circle.setText(value);
  
      }
  
    });
  
    let containerC = document.getElementById("circleC");
  
    let circleC = new ProgressBar.Circle(containerC, {
  
      color: '#65DAF9',
      strokeWidth: 6,
      duration: 1800,
      from: { color: '#aaa'},
      to: { color: '#65DAF9'},
  
      step: function(state, circle) {
        circle.path.setAttribute('stroke', state.color);
  
        var value = Math.round(circle.value() * 100);
        circle.setText(value);
  
      }
  
    });
  
    // iniciando loaders quando a usuário chegar no elemento
    let dataAreaOffset = $('#data-area').offset();
    // stop serve para a animação não carregar mais que uma vez
    let stop = 0;
  
    $(window).scroll(function (e) {
  
      let scroll = $(window).scrollTop();
  
      if(scroll > (dataAreaOffset.top - 500) && stop == 0) {
        circleA.animate(1.0);
        circleB.animate(0.9);
        circleC.animate(1.0);
  
        stop = 1;
      }
  
    });

    // ProgressBar Line
    
    var barPHP = new ProgressBar.Line(lineBarPHP, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
    var barJS = new ProgressBar.Line(lineBarJS, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
    var barBS = new ProgressBar.Line(lineBarBS, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });
    var barBD = new ProgressBar.Line(lineBarBD, {
        strokeWidth: 4,
        easing: 'easeInOut',
        duration: 1400,
        color: '#FFEA82',
        trailColor: '#eee',
        trailWidth: 1,
        svgStyle: {width: '100%', height: '100%'}
      });

      let skillsAreaOffset = $('#skills').offset();
      let stopBarLine = 0;
      $(window).scroll(function (e) {
  
        let scroll = $(window).scrollTop();
    
        if(scroll > (skillsAreaOffset.top - 500) && stopBarLine == 0) {
            barPHP.animate(0.85);
            barJS.animate(0.70);
            barBS.animate(0.75);
            barBD.animate(1);
    
          stopBarLine = 1;
        }
    
      });


    
});



