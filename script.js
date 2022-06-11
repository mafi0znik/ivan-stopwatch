var Stopwatch = function(elem, options) {
  
    var timer       = createTimer(),
        inputName = createInputName(),
        inputContainer = createInputC(),
        buttonsContainer = createButtonsC(),
        startButton = createButton("Старт", start, "button-start"),
        stopButton  = createButton("Стоп", stop, "button-stop"),
        resetButton = createButton("Сброс", reset, "button-reset"),
        offset,
        clock,
        interval;
    
    // default options
    options = options || {};
    options.delay = options.delay || 1;
   
    // append elements     
    elem.appendChild(inputContainer);
    inputContainer.appendChild(inputName);
    elem.appendChild(timer);
    elem.appendChild(buttonsContainer);
    //buttonsContainer.appendChild(startButton);
    buttonsContainer.appendChild(stopButton);
    buttonsContainer.appendChild(resetButton);
    
    // initialize
    reset();
    
    // private functions
    function createTimer() {
      return document.createElement("span");
    }
    
    function createButtonsC() {
      var bc = document.createElement("div");
      bc.classList.add('buttons-container');
      return bc;
    }
  
    function createButton(action, handler, class_name) {
      var a = document.createElement("a");
      a.classList.add(class_name);
      a.href = "#" + action;
      //a.innerHTML = action;
      a.addEventListener("click", function(event) {
        handler();
        event.preventDefault();
      });
      return a;
    }
  
    function createInputName() {
      var i = document.createElement("input");
      i.classList.add('input-name');
      i.placeholder = "Имя";
      return i;
    }
  
    function createInputC() {
      var ic = document.createElement("span");
      ic.classList.add('input-container');
      return ic;
    }
    
    function start() {
      if (!interval) {
        offset   = Date.now();
        interval = setInterval(update, options.delay);
      }
    }
    
    function stop() {
      if (interval) {
        clearInterval(interval);
        interval = null;
      }
    }
    
    function reset() {
      clock = 0;
      render(0);
    }
    
    function update() {
      clock += delta();
      render();
    }
    
    function render() {
      timer.innerHTML = moment().hour(0).minute(0).second(0).millisecond(clock).format('HH:mm:ss.SS'); 
    }
    
    function delta() {
      var now = Date.now(),
          d = now - offset;
      
      offset = now;
      return d;
    }
    
    // public API
    this.start  = start;
    this.stop   = stop;
    this.reset  = reset;
  };
  
  var el1_1 = document.getElementById("w1_1");
  w1_1 = new Stopwatch(el1_1);
  var el1_2 = document.getElementById("w1_2");
  w1_2 = new Stopwatch(el1_2);
  
  var el2_1 = document.getElementById("w2_1");
  w2_1 = new Stopwatch(el2_1);
  var el2_2 = document.getElementById("w2_2");
  w2_2 = new Stopwatch(el2_2);
  
  var el3_1 = document.getElementById("w3_1");
  w3_1 = new Stopwatch(el3_1);
  var el3_2 = document.getElementById("w3_2");
  w3_2 = new Stopwatch(el3_2);
  
  var el4_1 = document.getElementById("w4_1");
  w4_1 = new Stopwatch(el4_1);
  var el4_2 = document.getElementById("w4_2");
  w4_2 = new Stopwatch(el4_2);
  
  var el5_1 = document.getElementById("w5_1");
  w5_1 = new Stopwatch(el5_1);
  var el5_2 = document.getElementById("w5_2");
  w5_2 = new Stopwatch(el5_2);
  
  var el6_1 = document.getElementById("w6_1");
  w6_1 = new Stopwatch(el6_1);
  var el6_2 = document.getElementById("w6_2");
  w6_2 = new Stopwatch(el6_2);
  
  // var el7_1 = document.getElementById("w7_1");
  // w7_1 = new Stopwatch(el7_1);
  // var el7_2 = document.getElementById("w7_2");
  // w7_2 = new Stopwatch(el7_2);
  
  // var el8_1 = document.getElementById("w8_1");
  // w8_1 = new Stopwatch(el8_1);
  // var el8_2 = document.getElementById("w8_2");
  // w8_2 = new Stopwatch(el8_2);
  
  // var el9_1 = document.getElementById("w9_1");
  // w9_1 = new Stopwatch(el9_1);
  // var el9_2 = document.getElementById("w9_2");
  // w9_2 = new Stopwatch(el9_2);
  
  // var el10_1 = document.getElementById("w10_1");
  // w10_1 = new Stopwatch(el10_1);
  // var el10_2 = document.getElementById("w10_2");
  // w10_2 = new Stopwatch(el10_2);
  
  $('.stopwatch-row').on('click', '.js-start-row', function() {
    var $this_id = $(this).attr('id');
  
    switch ($this_id) {
      case "start_1":
        w1_1.start();
        w1_2.start();
        break;
      case "start_2":
        w2_1.start();
        w2_2.start();
        break;
      case "start_3":
        w3_1.start();
        w3_2.start();
        break;
      case "start_4":
        w4_1.start();
        w4_2.start();
        break;
      case "start_5":
        w5_1.start();
        w5_2.start();
        break;
      case "start_6":
        w6_1.start();
        w6_2.start();
        break;
      // case "start_7":
      //   w7_1.start();
      //   w7_2.start();
      //   break;
      // case "start_8":
      //   w8_1.start();
      //   w8_2.start();
      //   break;
      // case "start_9":
      //   w9_1.start();
      //   w9_2.start();
      //   break;
      // case "start_10":
      //   w10_1.start();
      //   w10_2.start();
      //   break;
      default:
        console.log("Такого элемента нет");
    }
  
  });
  
  $(document).on('click', '.js-reset', function() {
    if (confirm('Вы уверены, что хотите сбросить результаты?')) {
        w1_1.stop();  w1_1.reset();
        w1_2.stop();  w1_2.reset();
        w2_1.stop();  w2_1.reset();
        w2_2.stop();  w2_2.reset();
        w3_1.stop();  w3_1.reset();
        w3_2.stop();  w3_2.reset();
        w4_1.stop();  w4_1.reset();
        w4_2.stop();  w4_2.reset();
        w5_1.stop();  w5_1.reset();
        w5_2.stop();  w5_2.reset();
        w6_1.stop();  w6_1.reset();
        w6_2.stop();  w6_2.reset();
        // w7_1.stop();  w7_1.reset();
        // w7_2.stop();  w7_2.reset();
        // w8_1.stop();  w8_1.reset();
        // w8_2.stop();  w8_2.reset();
        // w9_1.stop();  w9_1.reset();
        // w9_2.stop();  w9_2.reset();
        // w10_1.stop();  w10_1.reset();
        // w10_2.stop();  w10_2.reset();
      } else {
        return;
      }
  });