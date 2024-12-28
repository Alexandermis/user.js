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
// enable Favicons
user_pref("browser.shell.shortcutFavicons", true);
//Disable webgl
user_pref("webgl.disabled", true);
//enabel DRM necessary for music in the browser
user_pref("media.eme.enabled", true);
//Disable firefox stores passwords 
user_pref("services.sync.prefs.sync.signon.rememberSignons", false);
user_pref("signon.rememberSignons", false);
user_pref("signon.rememberSignons.visibilityToggle", false);
// Disable letterboxing it is annoying
user_pref("privacy.resistFingerprinting.letterboxing", false);
// Bookmark Toolbar always show
user_pref("browser.toolbars.bookmarks.visibility", "always");
// Disable the translator
user_pref("browser.translations.automaticallyPopup", false);
// Disable Telemetry
user_pref("toolkit.telemetry.pioneer-new-studies-available", false);
//7020: disable WebRTC (Web Real-Time Communication)
////user_pref("media.peerconnection.enabled", false);
// own Style with CSS 
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true );
//Disable screen access
user_pref("media.getusermedia.screensharing.enabled", false );
// Disable access to media devices 
user_pref("media.navigator.enabled", false );
// Protect from audio rendering proofiles
user_pref("media.autoplay.enabled", false );
//[SETUP-HARDEN] This will protect your private IP even in TRUSTED scenarios after you
// grant device access, but often results in breakage on video-conferencing platforms 
user_pref("media.peerconnection.ice.no_host", true);
//[SETUP-HARDEN] Disable ETP web compat features 
user_pref("privacy.antitracking.enableWebcompat", false);
// Disabling Firefox’s “privacy-preserving ad measurement” by default or before upgrading to Firefox 128
user_pref("dom.private-attribution.submission.enabled", false);
// Disable hardware acceleration for extrem power saving while ideal browsing
user_pref("layers. acceleration. disabled", true);
// Dark mode
user_pref("ui.systemUsesDarkTheme", 1);
user_pref("browser.theme.content-theme", 2);
