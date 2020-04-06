function Health (name, time) {
    this.name= name;
    this.time = time;
    this.printHealthTime = function() {
        return this.name + this.time;
    }
}

var sh = new Health("승환", "AM 00:00");
sh.printHealthTime();

var jh = new Health("주혜", "AM 09:00");
jh.printHealthTime();

sh.printHealthTime === jh.printHealthTime;  /// false

// prototype

Health.prototype.showHealthTime = function () {
    return this.name + this.time;
}

sh.showHealthTime();
jh.showHealthTime();

sh.showHealthTime === jh.showHealthTime;    /// true;