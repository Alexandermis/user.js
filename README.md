Project based on https://github.com/arkenfox/user.js/wiki
# Maybe get the newest version of 

https://github.com/arkenfox/user.js/blob/master/user.js

# How to use this?

1. Just copy the contant of the copyToProfileFolder to the firefox profile and use the scripts.

# How to Set Cookie Exceptions

1. Navigate to Settings > Privacy & Security > Cookies & Site Data > Manage Exceptions.

### The following settings must be done manually:

- Note that cookies get deleted after closing Firefox. If you want to keep them, you need to allow them every time.
- Copy the bookmark file, cookie file, and the cookie permission file:
# Windows location:
- `%APPDATA%\Mozilla\Firefox\Profiles\`
# Linux location
- `~/. mozilla/firefox/`
# Copy this files from the old profile.
  - `places.sqlite` Bookmarks
  - `favicons.sqlite` The favicons for the bookmarks 
  - `permissions.sqlite` Side permissions including cookie permissions
  - `cookies.sqlite` Cookies 
  - `localstore.rdf`  Toolbar layout
  
# Plugins I'm Using

- [uBlock Origin](https://addons.mozilla.org/firefox/downloads/latest/ublock-origin/latest.xpi)
- [Skip Redirect](https://addons.mozilla.org/firefox/downloads/latest/skip-redirect/latest.xpi)
- [Chameleon](https://addons.mozilla.org/firefox/downloads/latest/chameleon-ext/latest.xpi)
- [Midnight Lizard](https://addons.mozilla.org/firefox/downloads/latest/midnight-lizard-quantum/latest.xpi)
- [LanguageTool](https://addons.mozilla.org/firefox/downloads/latest/languagetool/latest.xpi)


## Configuring Plugins

### uBlock Origin Settings

Restore the file in the PluginsSettings folder or from another profile.

### Chameleon Settings

Restore the file in the PluginsSettings folder or from another profile.

### Change the search engine
1) https://github.com/searxng/searxng
2) https://search.brave.com
3) https://www.startpage.com/
4) https://duckduckgo.com/

## Remove Facebook Wikipedia and co from search 
about:preferences#home disable blank page disable all at the new page and renable it again.

## If you want apply a custom style
This is my custom style - [FirefoxStyle](https://github.com/Alexandermis/FirefoxStyle)

## How does firefox profiles work?
Run firefox with the flag
-p "ProfileName"
