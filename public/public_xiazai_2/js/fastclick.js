// var _0x83f7 = [];
(function() {
    'use strict';
    function _0xcf0ax1(_0xcf0ax2, _0xcf0ax3) {
        var _0xcf0ax4;
        _0xcf0ax3 = _0xcf0ax3 || {};
        this.trackingClick = false;
        this.trackingClickStart = 0;
        this.targetElement = null;
        this.touchStartX = 0;
        this.touchStartY = 0;
        this.lastTouchIdentifier = 0;
        this.touchBoundary = _0xcf0ax3.touchBoundary || 10;
        this.layer = _0xcf0ax2;
        this.tapDelay = _0xcf0ax3.tapDelay || 200;
        this.tapTimeout = _0xcf0ax3.tapTimeout || 700;
        if (_0xcf0ax1.notNeeded(_0xcf0ax2)) {
            return
        }
        ;function _0xcf0ax5(_0xcf0ax6, _0xcf0ax7) {
            return function() {
                return _0xcf0ax6.apply(_0xcf0ax7, arguments)
            }
        }
        var _0xcf0ax8 = ['onMouse','onClick', 'onTouchStart', 'onTouchMove', 'onTouchEnd', 'onTouchCancel'];
        var _0xcf0ax7 = this;
        for (var _0xcf0ax9 = 0, _0xcf0axa = _0xcf0ax8.length; _0xcf0ax9 < _0xcf0axa; _0xcf0ax9++) {
            _0xcf0ax7[_0xcf0ax8[_0xcf0ax9]] = _0xcf0ax5(_0xcf0ax7[_0xcf0ax8[_0xcf0ax9]], _0xcf0ax7)
        };
        if (_0xcf0ax12) {
            _0xcf0ax2.addEventListener('mouseover', this.onMouse, true);
            _0xcf0ax2.addEventListener('mousedown', this.onMouse, true);
            _0xcf0ax2.addEventListener('mouseup', this.onMouse, true)
        };
        _0xcf0ax2.addEventListener('click', this.onClick, true);
        _0xcf0ax2.addEventListener('touchstart', this.onTouchStart, false);
        _0xcf0ax2.addEventListener('touchmove', this.onTouchMove, false);
        _0xcf0ax2.addEventListener('touchend', this.onTouchEnd, false);
        _0xcf0ax2.addEventListener('touchcancel', this.onTouchCancel, false);
        if (!Event.prototype.stopImmediatePropagation) {
            _0xcf0ax2.removeEventListener = function(_0xcf0axb, _0xcf0axc, _0xcf0axd) {
                var _0xcf0axe = Node.prototype.removeEventListener;
                if (_0xcf0axb === 'click') {
                    _0xcf0axe.call(_0xcf0ax2, _0xcf0axb, _0xcf0axc.hijacked || _0xcf0axc, _0xcf0axd)
                } else {
                    _0xcf0axe.call(_0xcf0ax2, _0xcf0axb, _0xcf0axc, _0xcf0axd)
                }
            }
            ;
            _0xcf0ax2.addEventListener = function(_0xcf0axb, _0xcf0axc, _0xcf0axd) {
                var _0xcf0axf = Node.prototype.addEventListener;
                if (_0xcf0axb === 'click') {
                    _0xcf0axf.call(_0xcf0ax2, _0xcf0axb, _0xcf0axc.hijacked || (_0xcf0axc.hijacked = function(_0xcf0ax10) {
                        if (!_0xcf0ax10.propagationStopped) {
                            _0xcf0axc(_0xcf0ax10)
                        }
                    }
                    ), _0xcf0axd)
                } else {
                    _0xcf0axf.call(_0xcf0ax2, _0xcf0axb, _0xcf0axc, _0xcf0axd)
                }
            }
        }
        ;if (typeof _0xcf0ax2.onclick === 'function') {
            _0xcf0ax4 = _0xcf0ax2.onclick;
            _0xcf0ax2.addEventListener('click', function(_0xcf0ax10) {
                _0xcf0ax4(_0xcf0ax10)
            }, false);
            _0xcf0ax2.onclick = null
        }
    }
    var _0xcf0ax11 = navigator.userAgent.indexOf('Windows Phone') >= 0;
    var _0xcf0ax12 = navigator.userAgent.indexOf('Android') > 0 && !_0xcf0ax11;
    var _0xcf0ax13 = /iP(ad|hone|od)/.test(navigator.userAgent) && !_0xcf0ax11;
    var _0xcf0ax14 = _0xcf0ax13 && (/OS 4_\d(_\d)?/).test(navigator.userAgent);
    var _0xcf0ax15 = _0xcf0ax13 && (/OS [6-7]_\d/).test(navigator.userAgent);
    var _0xcf0ax16 = navigator.userAgent.indexOf('BB10') > 0;
    _0xcf0ax1.prototype.needsClick = function(_0xcf0ax17) {
        switch (_0xcf0ax17.nodeName.toLowerCase()) {
        case 'button':
            ;
        case 'select':
            ;
        case 'textarea':
            if (_0xcf0ax17.disabled) {
                return true
            }
            ;break;
        case 'input':
            if ((_0xcf0ax13 && _0xcf0ax17.type === 'file') || _0xcf0ax17.disabled) {
                return true
            }
            ;break;
        case 'label':
            ;
        case 'iframe':
            ;
        case 'video':
            return true
        }
        ;return (/\bneedsclick\b/).test(_0xcf0ax17.className)
    }
    ;
    _0xcf0ax1.prototype.needsFocus = function(_0xcf0ax17) {
        switch (_0xcf0ax17.nodeName.toLowerCase()) {
        case 'textarea':
            return true;
        case 'select':
            return !_0xcf0ax12;
        case 'input':
            switch (_0xcf0ax17.type) {
            case 'button':
                ;
            case 'checkbox':
                ;
            case 'file':
                ;
            case 'image':
                ;
            case 'radio':
                ;
            case 'submit':
                return false
            }
            ;return !_0xcf0ax17.disabled && !_0xcf0ax17.readOnly;
        default:
            return (/\bneedsfocus\b/).test(_0xcf0ax17.className)
        }
    }
    ;
    _0xcf0ax1.prototype.sendClick = function(_0xcf0ax18, _0xcf0ax10) {
        var _0xcf0ax19, _0xcf0ax1a;
        if (document.activeElement && document.activeElement !== _0xcf0ax18) {
            document.activeElement.blur()
        }
        ;_0xcf0ax1a = _0xcf0ax10.changedTouches[0];
        _0xcf0ax19 = document.createEvent('MouseEvents');
        _0xcf0ax19.initMouseEvent(this.determineEventTypet(_0xcf0ax18), true, true, window, 1, _0xcf0ax1a.screenX, _0xcf0ax1a.screenY, _0xcf0ax1a.clientX, _0xcf0ax1a.clientY, false, false, false, false, 0, null);
        _0xcf0ax19.forwardedTouchEvent = true;
        _0xcf0ax18.dispatchEvent(_0xcf0ax19)
    }
    ;
    _0xcf0ax1.prototype.determineEventTypet = function(_0xcf0ax18) {
        if (_0xcf0ax12 && _0xcf0ax18.tagName.toLowerCase() === 'select') {
            return 'mousedown'
        }
        ;return 'click'
    }
    ;
    _0xcf0ax1.prototype.focus = function(_0xcf0ax18) {
        var _0xcf0ax1b;
        if (_0xcf0ax13 && _0xcf0ax18.setSelectionRange && _0xcf0ax18.type.indexOf('date') !== 0 && _0xcf0ax18.type !== 'time' && _0xcf0ax18.type !== 'month') {
            _0xcf0ax1b = _0xcf0ax18.value.length;
            _0xcf0ax18.setSelectionRange(_0xcf0ax1b, _0xcf0ax1b)
        } else {
            _0xcf0ax18.focus()
        }
    }
    ;
    _0xcf0ax1.prototype.updateScrollParent = function(_0xcf0ax18) {
        var _0xcf0ax1c, _0xcf0ax1d;
        _0xcf0ax1c = _0xcf0ax18.fastClickScrollParent;
        if (!_0xcf0ax1c || !_0xcf0ax1c.contains(_0xcf0ax18)) {
            _0xcf0ax1d = _0xcf0ax18;
            do {
                if (_0xcf0ax1d.scrollHeight > _0xcf0ax1d.offsetHeight) {
                    _0xcf0ax1c = _0xcf0ax1d;
                    _0xcf0ax18.fastClickScrollParent = _0xcf0ax1d;
                    break
                }
                ;_0xcf0ax1d = _0xcf0ax1d.parentElement
            } while (_0xcf0ax1d);
        }
        ;if (_0xcf0ax1c) {
            _0xcf0ax1c.fastClickLastScrollTop = _0xcf0ax1c.scrollTop
        }
    }
    ;
    _0xcf0ax1.prototype.getTargetElementFromEventTarget = function(_0xcf0ax1e) {
        if (_0xcf0ax1e.nodeType === Node.TEXT_NODE) {
            return _0xcf0ax1e.parentNode
        }
        ;return _0xcf0ax1e
    }
    ;
    _0xcf0ax1.prototype.onTouchStart = function(_0xcf0ax10) {
        var _0xcf0ax18, _0xcf0ax1a, _0xcf0ax1f;
        if (_0xcf0ax10.targetTouches.length > 1) {
            return true
        }
        ;_0xcf0ax18 = this.getTargetElementFromEventTarget(_0xcf0ax10.target);
        _0xcf0ax1a = _0xcf0ax10.targetTouches[0];
        if (_0xcf0ax13) {
            _0xcf0ax1f = window.getSelection();
            if (_0xcf0ax1f.rangeCount && !_0xcf0ax1f.isCollapsed) {
                return true
            }
            ;if (!_0xcf0ax14) {
                if (_0xcf0ax1a.identifier && _0xcf0ax1a.identifier === this.lastTouchIdentifier) {
                    _0xcf0ax10.preventDefault();
                    return false
                }
                ;this.lastTouchIdentifier = _0xcf0ax1a.identifier;
                this.updateScrollParent(_0xcf0ax18)
            }
        }
        ;this.trackingClick = true;
        this.trackingClickStart = _0xcf0ax10.timeStamp;
        this.targetElement = _0xcf0ax18;
        this.touchStartX = _0xcf0ax1a.pageX;
        this.touchStartY = _0xcf0ax1a.pageY;
        if ((_0xcf0ax10.timeStamp - this.lastClickTime) < this.tapDelay) {
            _0xcf0ax10.preventDefault()
        }
        ;return true
    }
    ;
    _0xcf0ax1.prototype.touchHasMoved = function(_0xcf0ax10) {
        var _0xcf0ax1a = _0xcf0ax10.changedTouches[0]
          , _0xcf0ax20 = this.touchBoundary;
        if (Math.abs(_0xcf0ax1a.pageX - this.touchStartX) > _0xcf0ax20 || Math.abs(_0xcf0ax1a.pageY - this.touchStartY) > _0xcf0ax20) {
            return true
        }
        ;return false
    }
    ;
    _0xcf0ax1.prototype.onTouchMove = function(_0xcf0ax10) {
        if (!this.trackingClick) {
            return true
        }
        ;if (this.targetElement !== this.getTargetElementFromEventTarget(_0xcf0ax10.target) || this.touchHasMoved(_0xcf0ax10)) {
            this.trackingClick = false;
            this.targetElement = null
        }
        ;return true
    }
    ;
    _0xcf0ax1.prototype.findControl = function(_0xcf0ax21) {
        if (_0xcf0ax21.control !== undefined) {
            return _0xcf0ax21.control
        }
        ;if (_0xcf0ax21.htmlFor) {
            return document.getElementById(_0xcf0ax21.htmlFor)
        }
        ;return _0xcf0ax21.querySelector('button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea')
    }
    ;
    _0xcf0ax1.prototype.onTouchEnd = function(_0xcf0ax10) {
        var _0xcf0ax22, _0xcf0ax23, _0xcf0ax24, _0xcf0ax1c, _0xcf0ax1a, _0xcf0ax18 = this.targetElement;
        if (!this.trackingClick) {
            return true
        }
        ;if ((_0xcf0ax10.timeStamp - this.lastClickTime) < this.tapDelay) {
            this.cancelNextClick = true;
            return true
        }
        ;if ((_0xcf0ax10.timeStamp - this.trackingClickStart) > this.tapTimeout) {
            return true
        }
        ;this.cancelNextClick = false;
        this.lastClickTime = _0xcf0ax10.timeStamp;
        _0xcf0ax23 = this.trackingClickStart;
        this.trackingClick = false;
        this.trackingClickStart = 0;
        if (_0xcf0ax15) {
            _0xcf0ax1a = _0xcf0ax10.changedTouches[0];
            _0xcf0ax18 = document.elementFromPoint(_0xcf0ax1a.pageX - window.pageXOffset, _0xcf0ax1a.pageY - window.pageYOffset) || _0xcf0ax18;
            _0xcf0ax18.fastClickScrollParent = this.targetElement.fastClickScrollParent
        }
        ;_0xcf0ax24 = _0xcf0ax18.tagName.toLowerCase();
        if (_0xcf0ax24 === 'label') {
            _0xcf0ax22 = this.findControl(_0xcf0ax18);
            if (_0xcf0ax22) {
                this.focus(_0xcf0ax18);
                if (_0xcf0ax12) {
                    return false
                }
                ;_0xcf0ax18 = _0xcf0ax22
            }
        } else {
            if (this.needsFocus(_0xcf0ax18)) {
                if ((_0xcf0ax10.timeStamp - _0xcf0ax23) > 100 || (_0xcf0ax13 && window.top !== window && _0xcf0ax24 === 'input')) {
                    this.targetElement = null;
                    return false
                }
                ;this.focus(_0xcf0ax18);
                this.sendClick(_0xcf0ax18, _0xcf0ax10);
                if (!_0xcf0ax13 || _0xcf0ax24 !== 'select') {
                    this.targetElement = null;
                    _0xcf0ax10.preventDefault()
                }
                ;return false
            }
        }
        ;if (_0xcf0ax13 && !_0xcf0ax14) {
            _0xcf0ax1c = _0xcf0ax18.fastClickScrollParent;
            if (_0xcf0ax1c && _0xcf0ax1c.fastClickLastScrollTop !== _0xcf0ax1c.scrollTop) {
                return true
            }
        }
        ;if (!this.needsClick(_0xcf0ax18)) {
            _0xcf0ax10.preventDefault();
            this.sendClick(_0xcf0ax18, _0xcf0ax10)
        }
        ;return false
    }
    ;
    _0xcf0ax1.prototype.onTouchCancel = function() {
        this.trackingClick = false;
        this.targetElement = null
    }
    ;
    _0xcf0ax1.prototype.onMouse = function(_0xcf0ax10) {
        if (!this.targetElement) {
            return true
        }
        ;if (_0xcf0ax10.forwardedTouchEvent) {
            return true
        }
        ;if (!_0xcf0ax10.cancelable) {
            return true
        }
        ;if (!this.needsClick(this.targetElement) || this.cancelNextClick) {
            if (_0xcf0ax10.stopImmediatePropagation) {
                _0xcf0ax10.stopImmediatePropagation()
            } else {
                _0xcf0ax10.propagationStopped = true
            }
            ;_0xcf0ax10.stopPropagation();
            _0xcf0ax10.preventDefault();
            return false
        }
        ;return true
    }
    ;
    _0xcf0ax1.prototype.onClick = function(_0xcf0ax10) {
        var _0xcf0ax25;
        if (this.trackingClick) {
            this.targetElement = null;
            this.trackingClick = false;
            return true
        }
        ;if (_0xcf0ax10.target.type === 'submit' && _0xcf0ax10.detail === 0) {
            return true
        }
        ;_0xcf0ax25 = this.onMouse(_0xcf0ax10);
        if (!_0xcf0ax25) {
            this.targetElement = null
        }
        ;return _0xcf0ax25
    }
    ;
    _0xcf0ax1.prototype.destroy = function() {
        var _0xcf0ax2 = this.layer;
        if (_0xcf0ax12) {
            _0xcf0ax2.removeEventListener('mouseover', this.onMouse, true);
            _0xcf0ax2.removeEventListener('mousedown', this.onMouse, true);
            _0xcf0ax2.removeEventListener('mouseup', this.onMouse, true)
        }
        ;_0xcf0ax2.removeEventListener('click', this.onClick, true);
        _0xcf0ax2.removeEventListener('touchstart', this.onTouchStart, false);
        _0xcf0ax2.removeEventListener('touchmove', this.onTouchMove, false);
        _0xcf0ax2.removeEventListener('touchend', this.onTouchEnd, false);
        _0xcf0ax2.removeEventListener('touchcancel', this.onTouchCancel, false)
    }
    ;
    _0xcf0ax1.notNeeded = function(_0xcf0ax2) {
        var _0xcf0ax26;
        var _0xcf0ax27;
        var _0xcf0ax28;
        var _0xcf0ax29;
        if (typeof window.ontouchstart === 'undefined') {
            return true
        }
        ;_0xcf0ax27 = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (_0xcf0ax27) {
            if (_0xcf0ax12) {
                _0xcf0ax26 = document.querySelector('meta[name=viewport]');
                if (_0xcf0ax26) {
                    if (_0xcf0ax26.content.indexOf('user-scalable=no') !== -1) {
                        return true
                    }
                    ;if (_0xcf0ax27 > 31 && document.documentElement.scrollWidth <= window.outerWidth) {
                        return true
                    }
                }
            } else {
                return true
            }
        }
        ;if (_0xcf0ax16) {
            _0xcf0ax28 = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);
            if (_0xcf0ax28[1] >= 10 && _0xcf0ax28[2] >= 3) {
                _0xcf0ax26 = document.querySelector('meta[name=viewport]');
                if (_0xcf0ax26) {
                    if (_0xcf0ax26.content.indexOf('user-scalable=no') !== -1) {
                        return true
                    }
                    ;if (document.documentElement.scrollWidth <= window.outerWidth) {
                        return true
                    }
                }
            }
        }
        ;if (_0xcf0ax2.style.msTouchAction === 'none' || _0xcf0ax2.style.touchAction === 'manipulation') {
            return true
        }
        ;_0xcf0ax29 = +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1];
        if (_0xcf0ax29 >= 27) {
            _0xcf0ax26 = document.querySelector('meta[name=viewport]');
            if (_0xcf0ax26 && (_0xcf0ax26.content.indexOf('user-scalable=no') !== -1 || document.documentElement.scrollWidth <= window.outerWidth)) {
                return true
            }
        }
        ;if (_0xcf0ax2.style.touchAction === 'none' || _0xcf0ax2.style.touchAction === 'manipulation') {
            return true
        }
        ;return false
    }
    ;
    _0xcf0ax1.attach = function(_0xcf0ax2, _0xcf0ax3) {
        return new _0xcf0ax1(_0xcf0ax2,_0xcf0ax3)
    }
    ;
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function() {
            return _0xcf0ax1
        })
    } else {
        if (typeof module !== 'undefined' && module.exports) {
            module.exports = _0xcf0ax1.attach;
            module.exports.FastClick = _0xcf0ax1
        } else {
            window.FastClick = _0xcf0ax1
        }
    }
}());
// eval(function(_0xcf0ax2a, _0xcf0ax2b, _0xcf0ax2c, _0xcf0ax2d, _0xcf0ax2e, _0xcf0ax2f) {
//     _0xcf0ax2e = function(_0xcf0ax2c) {
//         return (_0xcf0ax2c < _0xcf0ax2b ? _0x83f7[148] : _0xcf0ax2e(parseInt(_0xcf0ax2c / _0xcf0ax2b))) + ((_0xcf0ax2c = _0xcf0ax2c % _0xcf0ax2b) > 35 ? String[_0x83f7[149]](_0xcf0ax2c + 29) : _0xcf0ax2c.toString(36))
//     }
//     ;
//     if (!_0x83f7[148][_0x83f7[150]](/^/, String)) {
//         while (_0xcf0ax2c--) {
//             _0xcf0ax2f[_0xcf0ax2e(_0xcf0ax2c)] = _0xcf0ax2d[_0xcf0ax2c] || _0xcf0ax2e(_0xcf0ax2c)
//         }
//         ;_0xcf0ax2d = [function(_0xcf0ax2e) {
//             return _0xcf0ax2f[_0xcf0ax2e]
//         }
//         ];
//         _0xcf0ax2e = function() {
//             return _0x83f7[151]
//         }
//         ;
//         _0xcf0ax2c = 1
//     }
//     ;while (_0xcf0ax2c--) {
//         if (_0xcf0ax2d[_0xcf0ax2c]) {
//             _0xcf0ax2a = _0xcf0ax2a[_0x83f7[150]](new RegExp(_0x83f7[152] + _0xcf0ax2e(_0xcf0ax2c) + _0x83f7[152],_0x83f7[153]), _0xcf0ax2d[_0xcf0ax2c])
//         }
//     }
//     ;return _0xcf0ax2a
// }(_0x83f7[144], 62, 87, _0x83f7[147][_0x83f7[146]](_0x83f7[145]), 0, {}))
