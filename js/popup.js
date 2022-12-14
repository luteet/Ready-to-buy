(function () {
    var FX = {
        easing: {
            linear: function (progress) {
                return progress;
            },
            quadratic: function (progress) {
                return Math.pow(progress, 2);
            },
            swing: function (progress) {
                return 0.5 - Math.cos(progress * Math.PI) / 2;
            },
            circ: function (progress) {
                return 1 - Math.sin(Math.acos(progress));
            },
            back: function (progress, x) {
                return Math.pow(progress, 2) * ((x + 1) * progress - x);
            },
            bounce: function (progress) {
                for (var a = 0, b = 1, result; 1; a += b, b /= 2) {
                    if (progress >= (7 - 4 * a) / 11) {
                        return -Math.pow((11 - 6 * a - 11 * progress) / 4, 2) + Math.pow(b, 2);
                    }
                }
            },
            elastic: function (progress, x) {
                return Math.pow(2, 10 * (progress - 1)) * Math.cos(20 * Math.PI * x / 3 * progress);
            }
        },
        animate: function (options) {
            var start = new Date;
            var id = setInterval(function () {
                var timePassed = new Date - start;
                var progress = timePassed / options.duration;
                if (progress > 1) {
                    progress = 1;
                }
                options.progress = progress;
                var delta = options.delta(progress);
                options.step(delta);
                if (progress == 1) {
                    clearInterval(id);
    
                    options.complete();
                }
            }, options.delay || 10);
        },
        fadeOut: function (element, options) {
            var to = 1;
            this.animate({
                duration: options.duration,
                delta: function (progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function (delta) {
                    element.style.opacity = to - delta;
                }
            });
        },
        fadeIn: function (element, options) {
            var to = 0;
            element.style.display = 'block';
            this.animate({
                duration: options.duration,
                delta: function (progress) {
                    progress = this.progress;
                    return FX.easing.swing(progress);
                },
                complete: options.complete,
                step: function (delta) {
                    element.style.opacity = to + delta;
                }
            });
        }
    };
    window.FX = FX;
})()
    
    // =-=-=-=-=-=-=-=-=-=-=-=- <popup> -=-=-=-=-=-=-=-=-=-=-=-=
    
    let popupCheck = true, popupCheckClose = true;
    function popup(idPopup) {
    
    if (popupCheck) {
        popupCheck = false;
    
        let popup, popupClose,
    
            body = document.querySelector('body'),
            html = document.querySelector('html'),
            duration = 200,
            id = idPopup;
    
        try {
    
            popup = document.querySelector(id);
            popupClose = popup.querySelectorAll('.popup-close');
    
        } catch {
            return false;
        }
    
        function removeFunc(popup, removeClass) {
    
            if (popupCheckClose) {
                popupCheckClose = false;
    
                FX.fadeOut(popup, {
                    duration: duration,
                    complete: function () {
                        popup.style.display = 'none';
                    }
                });
                popup.classList.remove('active');
    
                setTimeout(() => {
                    popupCheckClose = true;
                }, duration)
    
                if (removeClass) {
    
                    setTimeout(function () {
    
                        body.classList.remove('popup-active');
                        html.style.setProperty('--popup-padding', '0px');
    
                    }, duration)
                }
            }
        }
    
        body.classList.remove('popup-active');
        html.style.setProperty('--popup-padding', window.innerWidth - body.offsetWidth + 'px');
        body.classList.add('popup-active');
    
        popup.classList.add('active');
    
        setTimeout(function () {
            FX.fadeIn(popup, {
                duration: duration,
                complete: function () {
                }
            });
        }, duration);
    
        popupClose.forEach(element => {
            element.addEventListener('click', function () {
                if (document.querySelectorAll('.popup.active').length <= 1) {
                    removeFunc(popup, true);
                } else {
                    removeFunc(popup, false);
                }
                setTimeout(function () {
                    return false;
                }, duration)
            });
        })
    
    
        setTimeout(() => {
            popupCheck = true;
        }, duration);
    
    }
    
    }
    
    // =-=-=-=-=-=-=-=-=-=-=-=- </popup> -=-=-=-=-=-=-=-=-=-=-=-=