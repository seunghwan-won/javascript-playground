var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      setTimeout(function() {
          console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");      
      }.bind(healthObj), 1000)
    }
  }
  healthObj.showHealth();

  var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      setTimeout(function() {
          console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");      
      }.bind(this), 1000)
    }
  }
  healthObj.showHealth();

  var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      setTimeout( () =>  {
          console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");      
          debugger;
      }, 1000);
    }
  }
  healthObj.showHealth();

  var callTest = {
      name : "원승환",
      lastTime : "AM00:00"
  }

  var healthObj = {
    name : "달리기",
    lastTime : "PM10:12",
    showHealth : function() {
      setTimeout(function() {
          console.log(this.name + "님, 오늘은 " + this.lastTime + "에 운동을 하셨네요");      
      }.call(callTest), 10000)
    }
  }
  healthObj.showHealth();