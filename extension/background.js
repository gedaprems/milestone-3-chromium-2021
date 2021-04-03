  chrome.runtime.onMessageExternal.addListener(
    function(request, sender, sendResponse) {
      if (sender.url == "http://c718.info/"){
        var msg = 
            {
              os : document.getElementById("operating-system").innerText ,
              plat : document.getElementById("platform").innerText,
              cv : document.getElementById("chrome-version").innerText,
              cpun : document.getElementById("cpu-name").innerText,
              cpua : document.getElementById("cpu-arch").innerText,
              cpuf : document.getElementById("cpu-features").innerText,
              cpuu : document.getElementById("cpu-usage").innerHTML,
              cput : document.getElementById("cpu-temperatures").innerText,
              is : document.getElementById("internal-storage").innerText,
              isu : document.getElementById("internal-storage-units").innerHTML,
              esu : document.getElementById("external-storage-units").innerText,
              mc : document.getElementById("memory-capacity").innerText,
              mu : document.getElementById("memory-usage").innerHTML,
              bs : document.getElementById("battery-status").innerText,
              bt : document.getElementById("battery-time").innerText,
              bl : document.getElementById("battery-level").innerText,
              l : document.getElementById("language").innerText,
              pl : document.getElementById("plugins-list").innerText
            };
        sendResponse(msg) ;
        return;
      }
    });
