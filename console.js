const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/sound/:name', (req, res)=> {
  const {name} = req.params

  if(name=="dog"){
    res.json({'sound':'멍멍'})
  }else if (name=="cat"){
    res.json({'sound':'야용','img':'https://flexible.img.hani.co.kr/flexible/normal/970/777/imgdb/resize/2019/0926/00501881_20190926.JPG'})
  }else{
    res.json({'sound':'알수없음'})
  }

})

app.listen(3000)