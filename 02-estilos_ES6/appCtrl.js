class AppCtrl {

//    constructor(){
//     this.$scope=$scope
//   }

    $onInit(){
        
        this.array =  [];
        this.name = "";
        
    }

    sumar (){
        
    

        this.array.push(this.name);
      
    }
}


angular.module("appMain").controller("AppCtrl",AppCtrl)
