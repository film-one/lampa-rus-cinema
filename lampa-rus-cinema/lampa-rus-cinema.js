(function () {
    'use strict';

    var PLUGIN_ID = 'lampa_rus_cinema_helper';
    if (window[PLUGIN_ID]) return;
    window[PLUGIN_ID] = true;

    function notify(title, text) {
        if (window.Lampa && Lampa.Notifier && typeof Lampa.Notifier.show === 'function') {
            Lampa.Notifier.show({ title: title, text: text, time: 5000 });
        }
    }

    function addMenuButton() {
        if (!window.Lampa || !Lampa.Menu || typeof Lampa.Menu.addButton !== 'function') return;
        Lampa.Menu.addButton('search', 'Кино: помощь', function () {
            notify(
                'Кино: помощь',
                'Откройте карточку фильма и выберите установленный в Lampa источник онлайн-просмотра. Качество 1080p доступно только тогда, когда его предоставляет сам источник.'
            );
        });
    }

    function init() {
        if (!window.Lampa) return;
        addMenuButton();
        if (Lampa.Listener && typeof Lampa.Listener.follow === 'function') {
            Lampa.Listener.follow('app', function (event) {
                if (event && (event.type === 'ready' || event.type === 'complite')) addMenuButton();
            });
        }
        console.log('[Lampa Rus Cinema Helper] loaded');
    }

    if (window.appready) init();
    else if (window.Lampa && Lampa.Listener && typeof Lampa.Listener.follow === 'function') {
        Lampa.Listener.follow('app', function (event) {
            if (event && (event.type === 'ready' || event.type === 'complite')) init();
        });
    } else {
        document.addEventListener('DOMContentLoaded', init);
    }
})();
