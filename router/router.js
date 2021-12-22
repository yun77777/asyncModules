var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  const modules = require('../utils/modules.js');

  async function moduleTest(){

    var firstModule = await modules.firstModule.depthOne({data:'template'});

    if(firstModule.error){

      res.send(copyTemplate);
    }
    else{
      var secondModule = await modules.secondModule.depthOne({data:'build'});

      if(secondModule.error){

        res.send(buildGradle);
      }
      else{
        var thirdModule = await modules.thirdModule.depthOne({data:'refactoring'});

      }
    }
    
    res.send(thirdModule);

  }

  moduleTest();
});

module.exports = router;
