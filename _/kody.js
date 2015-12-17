	var kody ={}
	kody.radio=null;
	kody.checkip='{"jsonrpc": "2.0"}';
	
	kody.reboot   = '{"jsonrpc": "2.0", "id":"1", "method": "System.Reboot"}';
	kody.shutdown = '{"jsonrpc": "2.0", "id":"1", "method": "System.Shutdown"}';
	
	kody.playpause = '{"jsonrpc":"2.0","method":"Player.PlayPause","params":{"playerid":0},"id":1}';
	kody.slide2015 = '{"jsonrpc":"2.0","id":"1","method":"Player.Open","params":{"item":{"directory":"storage/pictures/###2015/"}}}';
	kody.cojestgrane = '{"jsonrpc": "2.0", "method": "Player.GetItem", "params": { "properties": ["title", "thumbnail", "file", "fanart", "streamdetails"], "playerid": 0 }, "id": "AudioGetItem"}';
	kody.ainfo = '{"jsonrpc": "2.0", "id":"1", "method": "Addons.GetAddonDetails", "params": { "addonid":"plugin.audio.aaaaa"}}';
	kody.aaaaa = '{"jsonrpc": "2.0", "id":"1", "method": "Addons.ExecuteAddon", "params": { "addonid":"plugin.audio.aaaaa"}}';
	kody.collection = '?jsonrpc=Collection';
	kody.tvbox = '{"jsonrpc": "2.0", "id":"1", "method": "Addons.GetAddonDetails", "params": { "addonid":"plugin.video.tvbox"}}';


kody.vol0 = '{"jsonrpc":"2.0","id":"1","method":"Application.SetVolume","params":{"volume":0}}';
kody.vol10 = '{"jsonrpc":"2.0","id":"1","method":"Application.SetVolume","params":{"volume":50}}';
kody.vol25 = '{"jsonrpc":"2.0","id":"1","method":"Application.SetVolume","params":{"volume":75}}';
kody.vol50 = '{"jsonrpc":"2.0","id":"1","method":"Application.SetVolume","params":{"volume":83}}';
kody.vol75 = '{"jsonrpc":"2.0","id":"1","method":"Application.SetVolume","params":{"volume":90}}';
kody.vol99 = '{"jsonrpc":"2.0","id":"1","method":"Application.SetVolume","params":{"volume":99}}';

	
	kody.tokfm = '{"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"http://gdansk1-1.radio.pionier.net.pl:8000/pl/tuba10-1.mp3"},"options":{"repeat":"one"}},"id":1}';
	kody.rfmc = '{"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"http://31.192.216.5:8000/rmf_classic"},"options":{"repeat":"one"}},"id":1}';
	kody.tok = '{"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"http://poznan5-1.radio.pionier.net.pl:8000/radiotok.ogg"},"options":{"repeat":"one"}},"id":1}';
	kody.pr3 = '{"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"mms://stream.polskieradio.pl/program3"},"options":{"repeat":"one"}},"id":1}';
	kody.jball = '{"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"http://pub6.jazzradio.com:80/jr_jazzballads_aacplus?d1e1bfa0a67fafc4764954be"},"options":{"repeat":"one"}},"id":1}';
	kody.jpiano = '{"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"http://pub1.jazzradio.com:80/jr_pianotrios_aacplus?d1e1bfa0a67fafc4764954be"},"options":{"repeat":"one"}},"id":1}';
	kody.jvocal = '{"jsonrpc":"2.0","method":"Player.Open","params":{"item":{"file":"http://pub1.jazzradio.com:80/jr_vocallegends_aacplus?d1e1bfa0a67fafc4764954be"},"options":{"repeat":"one"}},"id":1}';

kody.artist = '{"jsonrpc": "2.0", "method": "AudioLibrary.GetArtists", "params": { "limits": { "start" : 0, "end": 75 }, "properties": [ "thumbnail", "fanart", "born", "formed", "died", "disbanded", "yearsactive", "mood", "style", "genre" ], "sort": { "order": "ascending", "method": "artist", "ignorearticle": true } }, "id": 1}';
kody.albums = '{"jsonrpc": "2.0", "method": "AudioLibrary.GetAlbums", "params": { "limits": { "start" : 0, "end": 50 }, "properties": ["playcount", "artist", "genre", "rating", "thumbnail", "year", "mood", "style"], "sort": { "order": "ascending", "method": "album", "ignorearticle": true } }, "id": "libAlbums"}';
kody.songs  = '{"jsonrpc": "2.0", "method": "AudioLibrary.GetSongs", "params": { "limits": { "start" : 0, "end": 25 }, "properties": [ "artist", "duration", "album", "track" ], "sort": { "order": "ascending", "method": "track", "ignorearticle": true } }, "id": "libSongs"}';