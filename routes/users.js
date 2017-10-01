var express=require('express');
var router=express.Router();
var Twitter=require('twitter');
router.get('/others',function(req,res){
    res.render('others');
});
router.post('/other',function(req,res){
    var followers=[];
    var name=req.body.name;
   // console.log("heyy this is the friend list zone");
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
 client.get('followers/list', {
  screen_name: name,
  count:200
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    data.users.forEach(user => {
     // console.log(user.screen_name)
    followers.push(user.screen_name);
    });
  }
     res.render('others',{followers:followers});
     
});
    
});
router.get('/others2',function(req,res){
    res.render('others2');
});
router.post('/other2',function(req,res){
    var following=[];
    var name=req.body.name;
   // console.log("heyy this is the friend list zone");
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
    
client.get('friends/list', {
  screen_name: name
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    //console.log(data)
      data.users.forEach(user=>{
          //console.log(user.screen_name);
          following.push(user.screen_name);
          console.log(following);
          
      });
      res.render('others2',{following:following}); 
  }
    
});

});
router.get('/',function(req,res){
   // res.send("hyy users");
    var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
    //console.log(client);
    var params = {screen_name: 'preetibangad'};
    var tweets=[];
    client.get('statuses/user_timeline', params, function(error, users, response) {
  if (!error) {
   for(var i=0;i<users.length;i++)
       
      tweets.push(users[i].text);
      
  }
        //console.log(tweets);
        res.render('tweet',{tweets:tweets});
        
});
    
});
router.get('/friendlist',function(req,res){
    var followers=[];
   // console.log("heyy this is the friend list zone");
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
 client.get('followers/list', {
  screen_name: 'PreetiBangad',
  count:200
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    data.users.forEach(user => {
     // console.log(user.screen_name)
    followers.push(user.screen_name);
    });
  }
     res.render('followers',{followers:followers});
     
});
    
});
router.get('/reply',function(req,res){
    console.log("hi");
});
router.get('/following',function(req,res){
    var following=[];
   // console.log("heyy this is the friend list zone");
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
    
client.get('friends/list', {
  screen_name: 'PreetiBangad'
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    //console.log(data)
      data.users.forEach(user=>{
          //console.log(user.screen_name);
          following.push(user.screen_name);
          console.log(following);
          
      });
      res.render('following',{following:following}); 
  }
    
});

});
router.post('/update',function(req,res){
    var tweet=req.body.tweet;
    console.log(tweet);
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
    client.post('statuses/update', {status: tweet},  function(error, tweet, response) {
  if(error) throw error;
  console.log(tweet);  // Tweet body. 
        //console.log(tweet.id);
  //console.log(response);  // Raw response object. 
        res.redirect('/users');
        
});
   
    
    
});
/*
router.post('/create',function(req,res){
    var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
    client.post('friendships/create',{friend:"niti_taylor"},function(error,response){
       if(error) throw error;
        else 
          console.log("done");
    });
    
    
});
*/
router.get('/retweet',function(req,res){
    var latest_tweets=[];
    var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
     client.get('statuses/home_timeline', {
  count: 200
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else  {
    data.forEach(t => {
    //  console.log(t.text)
      //user.push(t.user.screen_name);
        latest_tweets.push(t);
        
        //console.log(t.id);
      //  console.log(user);
        //console.log(tweet);
               
        
      //console.log(t.user.screen_name)
      //console.log(t.id_str)
      //console.log('\n')
    });
      
 res.render('retweets',{latest_tweets:latest_tweets});
  }
});
});
///////////////////////////////////////////////////////////////////////////////////////
router.post('/reply',function(req,res){
    var id=req.body.id;
    var reply=req.body.reply;
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
    client.post('statuses/update', {
  status: reply,
  in_reply_to_status_id: id
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})
    //console.log("this is the repy page");
});
router.post('/delete',function(req,res){
    var id=req.body.id;
    var reply=req.body.reply;
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
    client.post('statuses/destroy/:id', {
  status: reply,
  in_reply_to_status_id: id
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweeted!`)
  }
})
    //console.log("this is the repy page");
});
router.post('/favourite',function(req,res){
   var id=req.body.id;
    var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
client.post('statuses/destroy/:id', {
  id: id
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweet deleted!`)
  }
});
});

router.post('/unfavourite',function(req,res){
   var id=req.body.id;
    var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});
client.post('statuses/destroy/:id', {
  id: id
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(`${data.text} tweet deleted!`)
  }
});
});

router.get('/friends',function(req,res){
    var user=[];
    var tweet=[];
    var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
   
    client.get('statuses/home_timeline', {
  count: 5
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else  {
    data.forEach(t => {
    //  console.log(t.text)
      user.push(t.user.screen_name);
        tweet.push(t.text);
        //console.log(t.id);
      //  console.log(user);
        //console.log(tweet);
               
        
      //console.log(t.user.screen_name)
      //console.log(t.id_str)
      //console.log('\n')
    });
      res.render('index',{tweet:tweet});
 
  }
});
});
router.post('/destroy',function(req,res){
    
   var username=req.body.username;
    console.log(username);
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
    
    client.post('friendships/destroy', {
  screen_name: username
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})
 res.redirect('/');
});
router.post('/createfriends',function(req,res){
    
   var username=req.body.username;
    console.log(username);
     var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
    
    client.post('friendships/create', {
  screen_name: username
}, (err, data, response) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
});
    res.redirect('/');
    
});
router.post('/create',function(req,res){
    var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
}); 
    var msg=req.body.msg;
    var friend=req.body.friend;
    client.post('direct_messages/new',{
       screen_name: friend,
  text: msg
}, function(err, data, response)  {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
});
});


router.post('/show',function(req,res){ 
    search=[];
         var client = new Twitter({
  consumer_key: 'wRq4cZ4KHUsW4uDRVFSM24OGY',
  consumer_secret: '5nzvhIxQzAeJtnqT9zwbMnim498pa5Z9NSd4neVo6wzRCxJBm6',
  access_token_key: '902949052681203729-KaQRky9BYquN74XcoZ9K2OuLHhMlXBl',
  access_token_secret: '0IItLdlRQ24DVsavBMTigULNcHIsbPcE5ZyOZegXvayls'
});   
    var query=req.body.query;
          // console.log(query);
      client.stream('statuses/filter', {track: query},  function(stream) {
  stream.on('data', function(tweet) {
    //console.log(tweet.text);
      search.push(tweet.text);
      console.log(search);
      //res.render('search',{search:search});
      
  });

  stream.on('error', function(error) {
  console.log(error);
  });
         

});
              });

module.exports=router;
