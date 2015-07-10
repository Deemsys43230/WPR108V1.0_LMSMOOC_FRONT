
CountDownTimer('09/30/2015 12:00 PM', 'countdown'); //Month.Day

function CountDownTimer(dt, id)
        {
            var end = new Date(dt);

            var _second = 1000;
            var _minute = _second * 60;
            var _hour = _minute * 60;
            var _day = _hour * 24;
            var timer;

            function showRemaining() {
            var now = new Date();
            var distance = end - now;
            if (distance < 0) {

            clearInterval(timer);
            document.getElementById(id).innerHTML = 'EXPIRED!';

            return;
            }

            var hours = Math.floor(distance / _hour);
            var minutes = Math.floor((distance % _hour) / _minute);
            var seconds = Math.floor((distance % _minute) / _second);

                if(hours==1 || hours == 0 ){
                    document.getElementById(id).innerHTML = hours + ' hr ';

                }

                else{
                    document.getElementById(id).innerHTML = hours + ' hrs ';
                }



                document.getElementById(id).innerHTML += minutes + ' mins ';
                document.getElementById(id).innerHTML += seconds + ' secs';
            }

            timer = setInterval(showRemaining, 1000);
        }


