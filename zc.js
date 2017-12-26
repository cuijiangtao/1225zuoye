var http = require('http'),
 	querystring = require('querystring'),
 	fs = require('fs');
 	url = require('url')

 	http.createServer(function(req,res){
 		res.setHeader('Access-Control-Allow-Origin','*');
 			var str = '';
 			req.on('data',function(date){
 		
 			str += date
 			})
 			req.on('end',function(err){

 				if(err) throw err;
 			var json = querystring.parse(str);
 
 		 fs.readFile('./zc.txt','utf8',function(err,data){
 			if(err) throw err;
 			var json1 = JSON.parse(data);
 			//end
 				if(json1[json.user]){
 					res.write('账号已注册')
 					res.end()
 				}else{
 					json1[json.user] = json.pass;
 					fs.writeFile('zc.txt',JSON.stringify(json1),function(err){
 						if(err) throw err;
 						res.write('注册成功')
 						res.end();
 					})
 				}
 			})
 			
 		})
 	}).listen(8003)

 	http.createServer(function(req,res){
 		res.setHeader('Access-Control-Allow-Origin','*');

 			var str = '';
 			req.on('data',function(date){
 		
 			str += date
 			})
 			req.on('end',function(err){
 				if(err) throw err;
 				var json = querystring.parse(str);
 				fs.readFile('./zc.txt','utf8',function(err,data){
 				  var json1 = JSON.parse(data);
 				
 				 if( json1[json.user] == json.pass){
 				  	res.write('登录成功');
 				  	res.end()
 				  		
 				  	}else{
 				  	res.write('账号密码错误');
 				  	res.end()
 				  	}
 				  

 				})
 			})
  
 	}).listen(8004);






http.createServer(function(req,res){
    res.setHeader('Access-Control-Allow-Origin','*');
    var json = url.parse(req.url,true).query;
    fs.writeFile('wenzhang.txt',JSON.stringify(json),function(err){    //增加
        if(err) throw err;
        console.log('发布OK');
        fs.readFile('./wenzhang.txt','utf8',function(err,data){   //查
            if (err) throw err;
            res.write(data);
            res.end();


        })
    })
}).listen(7000)










