# BugBase64FromBlob

When an Ansi Blob has an init with BlobTo64Base and the Binary Blob is empty, the following error is created client-side and the application stops working.

    core.mjs:6531 ERROR TypeError: Cannot read properties of null (reading 'Length')
    at _RecordUtils.byteStreamToString_0 (magic-xpa-gui.mjs:7083:58)
    at _RecordUtils.byteStreamToString (magic-xpa-gui.mjs:7076:32)
    at Expression.<anonymous> (magic-xpa-engine.mjs:22194:38)
    at Generator.next (<anonymous>)
    at fulfilled (chunk-YRCLCCAM.js?v=d5ed36d1:68:24)
    at _ZoneDelegate.invoke (zone.js:369:28)
    at Object.onInvoke (core.mjs:14882:33)
    at _ZoneDelegate.invoke (zone.js:368:34)
    at ZoneImpl.run (zone.js:111:43)
    at zone.js:2538:40
