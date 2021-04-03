// The ID of the extension we want to talk to.
var editorExtensionId = "ljkpohjbodiojloldglkbnhlocbjfmbd";

// Make a simple request:
url = "http://c718.info/";
chrome.runtime.sendMessage(editorExtensionId, {hello: 'goodbye'}, function (response) {
    document.getElementById("operating-system").innerText = response.os;
    document.getElementById("platform").innerText = response.plat;
    document.getElementById("chrome-version").innerText = response.cv;
    document.getElementById("cpu-name").innerText = response.cpun;
    document.getElementById("cpu-arch").innerText = response.cpua;
    document.getElementById("cpu-features").innerText = response.cpuf;
    document.getElementById("cpu-usage").innerHTML = response.cpuu;
    //document.getElementById("cpu-temperatures").innerText = response.cput;
    document.getElementById("internal-storage").innerText = response.is;
    //document.getElementById("internal-storage-units").innerText = response.isu;
    document.getElementById("external-storage-units").innerText = response.es;
    document.getElementById("memory-capacity").innerText = response.mc;
    document.getElementById("memory-usage").innerHTML = response.mu;
    document.getElementById("battery-status").innerText = response.bs;
    document.getElementById("battery-time").innerText = response.bt;
    document.getElementById("battery-level").innerText = response.bl;
    document.getElementById("language").innerText = response.l;
    document.getElementById("plugins-list").innerText = response.pl;
});