# Lampa Rus Cinema Helper (prototype)

A small Lampa plugin scaffold intended to be compatible with modern browser-based Lampa clients, including Android and iOS where the host Lampa build supports third-party plugins.

## Important limitations

- This is a **starter prototype**, not a streaming-source provider.
- It adds a Russian-language “Кино: помощь” menu item with a reminder to use sources already installed in Lampa.
- It does not scrape websites, bypass DRM/paywalls, or include film/video URLs.
- 1080p playback depends on the selected source, stream format, network, and device. The plugin cannot force a source to offer 1080p.
- iPhone compatibility depends on the Lampa client/browser and its plugin support. Test on the exact iOS app or browser you use.

## Install for testing

1. Host `lampa-rus-cinema.js` at a stable HTTPS URL (for example, GitHub Pages).
2. Open Lampa → **Настройки → Расширения → Добавить плагин**.
3. Paste the direct HTTPS URL to `lampa-rus-cinema.js` and confirm.
4. Restart/reload Lampa and look for **Кино: помощь** in the menu.

A local file path on your phone generally cannot be used as a plugin URL; Lampa needs a URL it can load.

## Next development step

Choose the exact Lampa client/build and the source plugins already installed. Then we can integrate with supported source APIs rather than guessing undocumented interfaces.
