# HausEngel – Website

Website für HausEngel – Betreuung und Hauswirtschaft (Naina Sarkush, Köln).

Reines HTML, CSS und ein wenig JavaScript. Kein Build-Schritt, keine
Abhängigkeiten – die Dateien können direkt über GitHub Pages veröffentlicht
werden.

## Dateien

| Datei | Inhalt |
|---|---|
| `index.html` | Die eigentliche Seite mit allen Abschnitten |
| `impressum.html` | Impressum (Vorlage, muss noch vervollständigt werden) |
| `datenschutz.html` | Datenschutzerklärung (Vorlage, muss noch geprüft werden) |
| `css/style.css` | Das gesamte Design |
| `js/main.js` | Nur das Menü für kleine Bildschirme |
| `assets/` | Logo und Bilder |

## Lokal ansehen

Die Datei `index.html` einfach doppelklicken – sie öffnet sich im Browser.

## Texte ändern

Alle Texte stehen direkt in `index.html`. Der jeweilige Abschnitt ist im Code
mit einem Kommentar markiert, zum Beispiel:

```html
<!-- ============ PREISE ============ -->
```

Einfach den Text zwischen den Anführungszeichen bzw. zwischen `<p>` und `</p>`
ändern, speichern, Browser neu laden.

## Bilder ergänzen

Die Seite kommt bewusst ohne Fotos aus. Soll später doch eines dazukommen –
etwa ein Porträt im Abschnitt „Über mich":

1. Bilddatei in den Ordner `assets/` legen, zum Beispiel `assets/naina.jpg`
2. An der gewünschten Stelle in `index.html` einfügen:

```html
<img src="assets/naina.jpg" alt="Naina Sarkush">
```

Der `alt`-Text beschreibt das Bild für blinde Nutzer und für Google – er sollte
kurz sagen, was zu sehen ist.

Die Symbole auf den Leistungskarten sind direkt als SVG in `index.html`
eingebaut. Ihre Farbe und Größe lassen sich über die Klasse `.card__icon` in
`css/style.css` ändern.

## Farben und Schriftgrößen ändern

Ganz oben in `css/style.css` stehen alle Farben und Größen gesammelt als
Variablen. Wird dort ein Wert geändert, ändert sich die ganze Seite mit.

## Vor der Veröffentlichung

- [ ] Gelbe Hinweis-Kästen in `impressum.html` und `datenschutz.html` entfernen
- [ ] Gelb markierte Lücken ausfüllen (Umsatzsteuer, anerkennende Stelle)
- [ ] Rechtstexte prüfen lassen (z. B. mit einem Generator wie e-recht24.de)
- [ ] Texte gegenlesen lassen
- [ ] Kontaktdaten und Öffnungszeiten auf Aktualität prüfen

## Veröffentlichen über GitHub Pages

1. Repository auf GitHub anlegen und diesen Ordner hochladen
2. Im Repository auf **Settings → Pages** gehen
3. Unter *Source* den Branch `main` und den Ordner `/ (root)` auswählen
4. Nach ein bis zwei Minuten ist die Seite unter
   `https://<benutzername>.github.io/<repository-name>/` erreichbar

HTTPS ist bei GitHub Pages automatisch aktiv.
