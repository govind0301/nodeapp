var http = require("http");
var url=require("url");
process_request = function(req,resp)
{
   var p = url.parse(req.url);
    switch(p.pathname)
    {
        case "/":
            //resp.write("uri of this page :"+req.url);
            resp.end("Welcome Page");
            break;
            case "/mypage":
                resp.write("uri of this page :"+p);
                resp.end("Welcome to my Page");
                break;
            default:
                resp.end("default page");
                resp.write("page name :"+p);
                break;  
    }
    console.log(p);
}
var server = http.createServer(process_request);
server.listen(8181);
console.log("server started")