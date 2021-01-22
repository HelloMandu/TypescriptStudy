{
    /*
    * JavaScript
    * Primitive: number, stirng, boolean, bigint, symbol. null, undefined
    * Object: function, array...
    */
   const num: number = 1;
   const str: string = 'hello';
   const boal: boolean = false;

   let age: number | undefined;
   age = undefined;
   age = 1;

   function find(): number | undefined{
       return undefined;
   }

   let person: string | null;
   person = null;
   person = 'sungmin';

   let notSure: unknown = 0;
   notSure = 'he';
   notSure = true;

   let anything: any = 0;
   anything = 'hello';

   function print(): void{
       console.log('hello');
   }
   let unusable: void = undefined;

   function throwError(message: string): never{
       // message => server(log)
       throw new Error(message);
       while(true){}
   }
   
   let obj: object;
   function acceptSomeObject(obj: object){
    acceptSomeObject({name: 'sungmin'});
    acceptSomeObject({animal: 'dog'});
   }
}