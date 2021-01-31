{
    // Java: Exception
// Javascript: Error
// const arr = new Array(1000000000000000);

function readFile(fileName: string): string{
    if(fileName === 'not exist'){
        throw new Error(`file not exist! ${fileName}`)
    }
    return 'file contents'
}

function closeFile(fileName: string){
    //
}
const fileName = 'file';
try{
    console.log(readFile(fileName));
} catch(error){
    //dialog, snackbar 등 error처리
    console.error('catched');
} finally{
    closeFile(fileName);
}
}