// Enabel DOT
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
// 0710: enable DNS-over-HTTPS (DoH) [FF60+]
//0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off (no rollout)
user_pref("network.trr.mode", 2);
//restore session and delete some stuff
user_pref("browser.startup.page", 3);	
// Disable history
user_pref("places.history.enabled", false); //important
user_pref("privacy.clearOnShutdown.history", false);
user_pref("browser.sessionstore.max_windows_undo", 5);
// Region
user_pref("browser.search.region", "DE");
//Firefox lan.
user_pref("intl.locale.requested", "en-US,de");
// Extensions and updates
user_pref("extensions.update.enabled", true); //0303
user_pref("extensions.update.autoUpdateDefault", true); //0304
user_pref("extensions.pocket.enabled", false); 		
// enable Fav
user_pref("browser.shell.shortcutFavicons", true);
//Disable webgl
user_pref("webgl.disabled", true);
//enabel DRM necessary for music in the browser
user_pref("media.eme.enabled", true);
//Disable Save browsing
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
//Disable firefox stores passwords 
user_pref("services.sync.prefs.sync.signon.rememberSignons", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
// Disable letterboxing it is annoying
user_pref("privacy.resistFingerprinting.letterboxing", false);
// Bookmark Toolbar always show
user_pref("browser.toolbars.bookmarks.visibility", true);
// Disable the translator
user_pref("browser.translations.automaticallyPopup", false);
// Disable Telemetry
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
// Search engine
user_pref("browser.search.defaultenginename", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName", "DuckDuckGo");
user_pref("browser.urlbar.placeholderName.private", "DuckDuckGo");
//7015: enable the DNT (Do Not Track) HTTP header
user_pref("privacy.donottrackheader.enabled", true);
//7020: disable WebRTC (Web Real-Time Communication)
////user_pref("media.peerconnection.enabled", false);