module.exports = {

  firstModule: {

    depthOne: function(params){
      return new Promise((rs, rj) => {
          console.log('copy, '+JSON.stringify(params));

          return rs(params);
      }).catch (e =>{
        return {error:true};
      });
    }
  },

  secondModule: {

    depthOne: function(params){

      return new Promise((rs, rj) => {
          console.log('gradle, '+JSON.stringify(params));
        
        return rs(params);
      }).catch (e =>{
        return {error:true};
      });

    }
  },

  thirdModule: {

    depthOne: function(params){
      return new Promise((rs, rj) => {
          console.log('files, '+JSON.stringify(params));
        
        return rs(params);
      }).catch (e =>{
        return {error:true};
      });
    }
  },
  hello: function(params){
    console.log('hello');
    return "hello";
  }
  
}
