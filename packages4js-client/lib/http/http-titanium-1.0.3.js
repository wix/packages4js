var http=http||{};http.Factory=http.Factory||function(){return{create:function(a){var a=a||{},b=Ti.Network.createHTTPClient({timeout:a.timeout||6E4,onload:a.onload||function(){},onerror:a.onerror||function(){},onprogress:a.onprogress||function(){},ontimeout:a.ontimeout||function(){}});b.setUserAgent=function(a){b.setRequestHeader("User-Agent",a)};return b}}}();http.create=http.create||http.Factory.create;