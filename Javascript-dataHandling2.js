var input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];
function dataHandling2(arg) {
    // input menggunakan built-in splice() untuk menambahkan beberapa item pada string
    input.splice(1,1,input[1] + 'Elshawary');
    input.splice(2,1,'Provinsi ' + input[2]);
    input.splice(4,0,'Pria');
    input.splice(5,1,'SMA Internasional Metro');
    console.log(input);



// input menggunakan built-in split() untuk memisahkan tanggal, bulan dan tahun
var tgl = '21/05/1989';
var pisah = tgl.split('/');

var ele1 = Number(pisah[0]);
var ele2 = Number(pisah[1]);
var ele3 = Number(pisah[2]);

var tgl1 = [];
tgl1.push(ele1, ele2, ele3);
tgl1.sort(function(value1, value2){ return value1 < value2});
console.log(tgl1);

// input menggunakan built-in join() untuk membuat separator tanggalan menggunakan simbol '-'
console.log(pisah.join('-'));

// input menggunakan built-in slice() untuk membuat maksimal karakter string
console.log(input[1].slice(0, 14));

switch
    (pisah[1]) {
    case '01':
    {
    pisah[1] = ' Januari '
    break;
    }

    case '02':
    {
    pisah[1] = ' Februari '
    break;
    }

    case '03':
    {
    pisah[1] = ' Maret '
    break;
    }

    case '04':
    {
    pisah[1] = ' April '
    break;
    }

    case '05':
    {
    pisah[1] = ' Mei '
    break;
    }

    case '06':
    {
    pisah[1] = ' Juni '
    break;
    }

    case '07':
    {
    pisah[1] = ' Juli '
    break;
    }

    case '08':
    {
    pisah[1] = ' Agustus '
    break;
    }

    case '09':
    {
    pisah[1] = ' September '
    break;
    }

    case '10':
    {
    pisah[1] = ' Oktober ';
    break;
    }

    case '11':
    {
    pisah[1] = ' November '
    break;
    }

    case '12':
    {
    pisah[1] = ' Desember '
    break;
    }

    default:
    {
    console.log('Tidak ada bulan lebih dari 12!');
    break;
    }
}
console.log(pisah[1]);
}
dataHandling2(input);