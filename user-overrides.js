// How to keep some cookies after closed
//- Press "Ctrl + I" on the website you want to keep cookies
//- Navigate to permissions and untick "use default" for "Set cookies"
// ☰ Settings > Privacy & Security > Cookies & Site Data > Manage Exceptions

// MUST BE DONE MANUALLY!!!!

// Note the cookies get deleted after closing firefox if you want to keep them you need to do allow every
// Copy the bookmark file and cookie file and the cookie permission file
// places.sqlite
// permissions.sqlite
// cookies.sqlite

// Plugins
// https://addons.mozilla.org/firefox/downloads/latest/ublock-origin/latest.xpi
// https://addons.mozilla.org/firefox/downloads/latest/skip-redirect/latest.xpi
// https://addons.mozilla.org/firefox/downloads/latest/chameleon-ext/latest.xpi
// https://addons.mozilla.org/firefox/downloads/latest/darkreader/latest.xpi
// https://addons.mozilla.org/firefox/downloads/latest/languagetool/latest.xpi

// Config Plugins

// Ublock Origins settings
// Restore File in PluginsSettings or from a other profile

// Chameleon settings
// Restore File in PluginsSettings or from a other profile

// HERE STARTS THE AUTOMATIC PART
// Enabel DOT
user_pref("network.trr.uri", "https://dns.quad9.net/dns-query");
// 0710: enable DNS-over-HTTPS (DoH) [FF60+]
//0=default, 2=increased (TRR (Trusted Recursive Resolver) first), 3=max (TRR only), 5=off (no rollout)
user_pref("network.trr.mode", 2);
//restore session and delete some stuff
user_pref("browser.startup.page", 3);
// user_pref("browser.startup.pagfge", 3);
// user_pref("browser.sessionstore.max_tabs_undo", 5);
// user_pref("browser.sessionstore.resume_session_once", true);
// user_pref("privacy.clearOnShutdown.sessions", false); 			
// user_pref("privacy.clearOnShutdown.siteSettings", false); 
// user_pref("browser.sessionstore.max_tabs_undo", 50);			
// user_pref("browser.sessionstore.max_windows_undo", 10);	
// user_pref("browser.sessionstore.restore_on_demand", true);		
// user_pref("browser.sessionstore.privacy_level", 0);		
// user_pref("browser.sessionstore.resume_session_once", true);				
// Disable history
user_pref("places.history.enabled", false); //important
user_pref("privacy.clearOnShutdown.history", false);
user_pref("browser.sessionstore.max_windows_undo", 5);
// Search engine
user_pref("browser.search.defaultenginename", "duckduckgo");
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
//Bookmark Toolbar always show
user_pref("browser.toolbars.bookmarks.visibility", true);
