//replace (Belajar-Satu-Tahun-Bersama-Niomic) to (Belajar Satu Tahun Bersama Niomic)
function replaceRegexp(){
    let data = "Belajar-Satu-Tahun-Bersama-Niomic";
    console.log(data.replace(/[-]+/g," "));
}

replaceRegexp();