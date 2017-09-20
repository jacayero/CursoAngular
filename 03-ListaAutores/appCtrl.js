class AppCtrl {

//    constructor(){
//     this.$scope=$scope
//   }

    $onInit(){
        
        this.autor = {
            nombre:'A',
            apellido: 'A2',
            fechaNacimiento: '01/01/85',
            pais: 'Spain',
            generos: ['A','B']
        };

        this.array.push(this.autor);

        this.autor2 = {
            nombre:'B',
            apellido: 'B2',
            fechaNacimiento: '01/01/85',
            pais: 'France',
            generos: ['C','D']
        };

        this.array.push(this.autor2);

        this.autor3 = {
            nombre:'C',
            apellido: 'C2',
            fechaNacimiento: '01/01/85',
            pais: 'Germany',
            generos: ['F','G']
        } 

         new Date 

        this.array.push(this.autor3);
        
    }

    
   // filtar (){
        
   //     this.array.push(this.name);
                       

   // }
}


angular.module("appMain").controller("AppCtrl",AppCtrl)
