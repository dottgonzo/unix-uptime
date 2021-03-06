"use strict";
var fs = require('fs');
function uptime(f) {
    var uptime = fs.readFileSync('/proc/uptime', 'utf-8').split(' ')[0];
    var time;
    if (f) {
        switch (f) {
            case 'seconds':
                time = parseInt(uptime);
                break;
            case 'milliseconds':
                time = parseFloat(uptime) * 1000;
                break;
        }
    }
    else {
        time = parseInt(uptime);
    }
    return time;
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = uptime;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFZLEVBQUUsV0FBTSxJQUFJLENBQUMsQ0FBQTtBQUV6QixnQkFBK0IsQ0FBVTtJQUVyQyxJQUFNLE1BQU0sR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7SUFFckUsSUFBSSxJQUFZLENBQUM7SUFFakIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVKLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFFUixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtnQkFDdkIsS0FBSyxDQUFDO1lBRVYsS0FBSyxjQUFjO2dCQUNmLElBQUksR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFBO2dCQUNoQyxLQUFLLENBQUM7UUFFZCxDQUFDO0lBRUwsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osSUFBSSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQUksQ0FBQTtBQUNmLENBQUM7QUF6QkQ7d0JBeUJDLENBQUEiLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBmcyBmcm9tICdmcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVwdGltZShmPzogc3RyaW5nKTpudW1iZXIge1xuXG4gICAgY29uc3QgdXB0aW1lID0gZnMucmVhZEZpbGVTeW5jKCcvcHJvYy91cHRpbWUnLCAndXRmLTgnKS5zcGxpdCgnICcpWzBdXG5cbiAgICBsZXQgdGltZTogbnVtYmVyO1xuXG4gICAgaWYgKGYpIHtcblxuICAgICAgICBzd2l0Y2ggKGYpIHtcblxuICAgICAgICAgICAgY2FzZSAnc2Vjb25kcyc6XG4gICAgICAgICAgICAgICAgdGltZSA9IHBhcnNlSW50KHVwdGltZSlcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnbWlsbGlzZWNvbmRzJzpcbiAgICAgICAgICAgICAgICB0aW1lID0gcGFyc2VGbG9hdCh1cHRpbWUpICogMTAwMFxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIH1cblxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRpbWUgPSBwYXJzZUludCh1cHRpbWUpXG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWVcbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
